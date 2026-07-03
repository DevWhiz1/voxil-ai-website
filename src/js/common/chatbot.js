// --- Interactive AI Chatbot Logic & Backend API Integration ---
(function() {
  const chatBtn = document.getElementById('ai-chat-btn');
  const chatWindow = document.getElementById('ai-chat-window');
  const chatClose = document.getElementById('ai-chat-close');
  const chatReset = document.getElementById('ai-chat-reset');
  const chatMessages = document.getElementById('ai-chat-messages');
  const chatSend = document.getElementById('ai-chat-send');
  const chatText = document.getElementById('ai-chat-text');

  if (!chatBtn || !chatWindow) return;

  const rawApiUrl = import.meta.env.VITE_API_URL || '';
  const API_BASE = `${rawApiUrl.replace(/\/$/, '')}/api/chat`;
  let currentSessionId = localStorage.getItem('voxil_chat_session_id') || null;
  let isTyping = false;
  let sessionInitialized = false;

  // Toggle Chat Drawer
  chatBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
    chatWindow.classList.toggle('flex');
    if (chatWindow.classList.contains('flex')) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
      if (!sessionInitialized) {
        sessionInitialized = true;
        initSession();
      }
    }
  });

  if (chatClose) {
    chatClose.addEventListener('click', () => {
      chatWindow.classList.add('hidden');
      chatWindow.classList.remove('flex');
    });
  }

  if (chatReset) {
    chatReset.addEventListener('click', () => {
      startNewSession();
    });
  }

  // Format text safely (markdown bolding, links, newlines)
  function formatText(rawText) {
    if (!rawText) return '';
    let text = rawText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Markdown bold **text**
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
    // Markdown links [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" class="underline text-primary-500 hover:text-primary-600 font-medium">$1</a>');
    // Bullet points
    text = text.replace(/(?:^|\n)[•\-*]\s+(.*)/g, '<br/>• $1');
    // Linebreaks
    text = text.replace(/\n/g, '<br/>');

    return text;
  }

  // Render default greeting & sample pills
  function renderDefaultState() {
    chatMessages.innerHTML = `
      <!-- AI Greeting -->
      <div class="flex items-start gap-2.5 max-w-[88%]">
        <div class="size-7 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 flex items-center justify-center shrink-0 mt-0.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        <div class="bg-white dark:bg-background-9 border border-stroke-4 dark:border-stroke-7 rounded-2xl rounded-tl-none p-3.5 shadow-sm text-sm text-secondary dark:text-accent leading-relaxed">
          Hello! I am the Voxil AI Assistant. How can I help you scope your AI agent or workflow automation project today?
        </div>
      </div>

      <!-- Sample Question Pill (Only 1 Question) -->
      <div id="ai-chat-pills" class="flex flex-col gap-2 pt-1">
        <button class="chat-pill flex items-center gap-2.5 border border-stroke-4 dark:border-stroke-7 bg-white dark:bg-background-9 p-3 rounded-xl text-xs font-medium text-left hover:border-primary-500 hover:bg-primary-500/5 transition-all text-secondary dark:text-accent group shadow-xs">
          <div class="p-1.5 rounded-lg bg-primary-500/10 text-primary-500 shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <span>How do Voxil custom AI agents automate workflows?</span>
        </button>
      </div>
    `;
    bindPillEvents();
  }

  function bindPillEvents() {
    const pills = chatMessages.querySelectorAll('.chat-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const spanText = pill.querySelector('span')?.innerText || pill.innerText;
        handleUserSend(spanText);
      });
    });
  }

  function appendMessage(text, isUser = false) {
    const pillsContainer = chatMessages.querySelector('#ai-chat-pills');
    if (pillsContainer) pillsContainer.remove();

    const msgDiv = document.createElement('div');
    msgDiv.className = `flex items-start gap-2.5 max-w-[88%] ${isUser ? 'ml-auto justify-end' : ''}`;
    
    if (!isUser) {
      const avatar = document.createElement('div');
      avatar.className = 'size-7 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 flex items-center justify-center shrink-0 mt-0.5';
      avatar.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>';
      msgDiv.appendChild(avatar);
    }

    const bubble = document.createElement('div');
    bubble.className = `p-3.5 shadow-sm text-sm border ${
      isUser 
        ? 'bg-primary-500 text-white rounded-2xl rounded-tr-none border-primary-600' 
        : 'bg-white dark:bg-background-9 border-stroke-4 dark:border-stroke-7 rounded-2xl rounded-tl-none text-secondary dark:text-accent'
    }`;
    bubble.innerHTML = isUser ? formatText(text) : formatText(text);

    if (!isUser) {
      const hasBookLink = text.includes('book-meeting.html') || text.includes('voxilai.tech/book-meeting');
      const hasContactLink = text.includes('contact.html') || text.includes('voxilai.tech/contact');

      if (hasBookLink || hasContactLink) {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'flex flex-col gap-2 mt-3 pt-3 border-t border-stroke-4 dark:border-stroke-7';
        
        if (hasBookLink) {
          const bookBtn = document.createElement('a');
          bookBtn.href = './book-meeting.html';
          bookBtn.className = 'inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-xs font-semibold rounded-xl shadow-md transition-all duration-200 transform active:scale-95';
          bookBtn.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span>Book Free Consultation</span>
          `;
          buttonsContainer.appendChild(bookBtn);
        }
        if (hasContactLink) {
          const contactBtn = document.createElement('a');
          contactBtn.href = './contact.html';
          contactBtn.className = 'inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-white dark:bg-background-7 hover:bg-background-3 dark:hover:bg-background-6 text-secondary dark:text-accent border border-stroke-4 dark:border-stroke-7 text-xs font-semibold rounded-xl shadow-sm transition-all duration-200 transform active:scale-95';
          contactBtn.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span>Contact Voxilai Tech</span>
          `;
          buttonsContainer.appendChild(contactBtn);
        }
        bubble.appendChild(buttonsContainer);
      }
    }
    
    msgDiv.appendChild(bubble);

    if (isUser) {
      const userAvatar = document.createElement('div');
      userAvatar.className = 'size-7 rounded-full bg-secondary text-white dark:bg-background-7 flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5';
      userAvatar.innerText = 'You';
      msgDiv.appendChild(userAvatar);
    }

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'ai-typing-indicator';
    indicator.className = 'flex items-start gap-2.5 max-w-[88%]';
    indicator.innerHTML = `
      <div class="size-7 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 flex items-center justify-center shrink-0 mt-0.5">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <div class="bg-white dark:bg-background-9 border border-stroke-4 dark:border-stroke-7 rounded-2xl rounded-tl-none p-3.5 shadow-sm flex items-center gap-1.5 text-secondary dark:text-accent">
        <span class="size-1.5 bg-primary-500 rounded-full animate-bounce"></span>
        <span class="size-1.5 bg-primary-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span class="size-1.5 bg-primary-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
      </div>
    `;
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function hideTypingIndicator() {
    const indicator = chatMessages.querySelector('#ai-typing-indicator');
    if (indicator) indicator.remove();
  }

  // Initialize session & load history
  async function initSession() {
    if (currentSessionId) {
      try {
        const res = await fetch(`${API_BASE}/session/${currentSessionId}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.messages) && data.messages.length > 0) {
            chatMessages.innerHTML = '';
            data.messages.forEach(msg => {
              appendMessage(msg.content, msg.role === 'user');
            });
            return;
          }
        }
      } catch (e) {
        console.warn('Backend reachability check warning:', e);
      }
    }
    // Create fresh backend session if no previous messages
    startNewSession();
  }

  async function startNewSession() {
    chatMessages.innerHTML = '';
    renderDefaultState();
    try {
      const res = await fetch(`${API_BASE}/session`, { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        if (data.sessionId) {
          currentSessionId = data.sessionId;
          localStorage.setItem('voxil_chat_session_id', currentSessionId);
        }
      }
    } catch (e) {
      console.warn('Could not create session on backend:', e);
    }
  }

  // Handle message send
  async function handleUserSend(overrideText) {
    if (isTyping) return;
    const text = (overrideText || chatText.value).trim();
    if (!text) return;

    if (!overrideText) chatText.value = '';
    appendMessage(text, true);

    isTyping = true;
    showTypingIndicator();

    try {
      const response = await fetch(`${API_BASE}/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: currentSessionId,
          message: text
        })
      });

      const data = await response.json();
      hideTypingIndicator();
      isTyping = false;

      if (data.success && data.reply) {
        if (data.sessionId && data.sessionId !== currentSessionId) {
          currentSessionId = data.sessionId;
          localStorage.setItem('voxil_chat_session_id', currentSessionId);
        }
        appendMessage(data.reply, false);
      } else {
        appendMessage(data.message || "I couldn't process that request right now. Please try again or contact our team.", false);
      }
    } catch (err) {
      hideTypingIndicator();
      isTyping = false;
      console.error('Chatbot API error:', err);
      // Fallback response if backend server is unreachable
      appendMessage("I'm having trouble connecting to the Voxil AI server. Please verify the backend API service is running or contact [Voxil Support](/contact.html).", false);
    }
  }

  chatSend.addEventListener('click', () => handleUserSend());
  chatText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleUserSend();
    }
  });

})();
