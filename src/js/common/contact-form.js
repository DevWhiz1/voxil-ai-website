/* =========================
Contact Form Handler
Handles validation, submission via fetch, and UI feedback
=========================== */

const API_URL = import.meta.env.VITE_API_URL;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    fullname: { required: true, label: 'Full name' },
    company: { required: true, label: 'Company name' },
    email: { required: true, label: 'Work email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phone: { required: false, label: 'Phone number' },
    service: { required: true, label: 'Service' },
    budget: { required: false, label: 'Budget' },
    timeline: { required: false, label: 'Timeline' },
    source: { required: false, label: 'Source' },
    message: { required: true, label: 'Message' },
  };

  // Clear field error on input
  Object.keys(fields).forEach((name) => {
    const el = form.elements[name];
    if (!el) return;
    const event = el.tagName === 'SELECT' ? 'change' : 'input';
    el.addEventListener(event, () => clearFieldError(el));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearAllErrors();

    // Validate
    let hasError = false;
    const formData = {};

    Object.entries(fields).forEach(([name, rules]) => {
      const el = form.elements[name];
      if (!el) return;
      const value = el.value.trim();
      formData[name] = value;

      if (rules.required && !value) {
        showFieldError(el, `${rules.label} is required`);
        hasError = true;
      } else if (rules.pattern && value && !rules.pattern.test(value)) {
        showFieldError(el, `Please enter a valid ${rules.label.toLowerCase()}`);
        hasError = true;
      }
    });

    // Check terms checkbox
    const terms = document.getElementById('terms');
    if (terms && !terms.checked) {
      showFormMessage('Please agree to the privacy policy and terms of service.', 'error');
      hasError = true;
    }

    if (hasError) return;

    // Disable button and show loading
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    submitBtn.classList.add('opacity-60', 'cursor-not-allowed');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showFormMessage('Your message has been sent successfully! We\'ll get back to you soon.', 'success');
        form.reset();
      } else {
        showFormMessage(data.message || 'Something went wrong. Please try again.', 'error');
      }
    } catch (err) {
      showFormMessage('Unable to connect to server. Please check your connection and try again.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      submitBtn.classList.remove('opacity-60', 'cursor-not-allowed');
    }
  });

  function showFieldError(el, message) {
    el.classList.add('border-red-500');
    el.style.borderColor = '#ef4444';
    const errorEl = el.parentElement.querySelector('.field-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
  }

  function clearFieldError(el) {
    el.classList.remove('border-red-500');
    el.style.borderColor = '';
    const errorEl = el.parentElement.querySelector('.field-error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
  }

  function clearAllErrors() {
    form.querySelectorAll('.field-error').forEach((el) => {
      el.textContent = '';
      el.classList.add('hidden');
    });
    form.querySelectorAll('.border-red-500').forEach((el) => {
      el.classList.remove('border-red-500');
      el.style.borderColor = '';
    });
    const msgEl = document.getElementById('form-status-message');
    if (msgEl) {
      msgEl.classList.add('hidden');
      msgEl.textContent = '';
    }
  }

  function showFormMessage(message, type) {
    const msgEl = document.getElementById('form-status-message');
    if (!msgEl) return;

    msgEl.textContent = message;
    msgEl.classList.remove('hidden', 'bg-green-50', 'text-green-700', 'border-green-200',
      'bg-red-50', 'text-red-700', 'border-red-200',
      'dark:bg-green-900/30', 'dark:text-green-400', 'dark:border-green-800',
      'dark:bg-red-900/30', 'dark:text-red-400', 'dark:border-red-800');

    if (type === 'success') {
      msgEl.classList.add('bg-green-50', 'text-green-700', 'border-green-200',
        'dark:bg-green-900/30', 'dark:text-green-400', 'dark:border-green-800');
    } else {
      msgEl.classList.add('bg-red-50', 'text-red-700', 'border-red-200',
        'dark:bg-red-900/30', 'dark:text-red-400', 'dark:border-red-800');
    }

    // Auto-hide success after 6s
    if (type === 'success') {
      setTimeout(() => {
        msgEl.classList.add('hidden');
      }, 6000);
    }
  }
});
