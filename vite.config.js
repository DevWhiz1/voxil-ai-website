import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

import { minify } from 'terser';
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

const getHtmlEntries = () => {
  const pagesDir = path.resolve(__dirname, '');
  const entries = {};
  const files = fs.readdirSync(pagesDir);
  const htmlFiles = files.filter((file) => file.endsWith('.html'));
  htmlFiles.forEach((file) => {
    const name = path.basename(file, '.html');
    entries[name] = path.resolve(pagesDir, file);
  });

  return entries;
};
const jsToBottomNoModule = () => {
  return {
    name: 'no-attribute',
    transformIndexHtml(html) {
      html = html.replace(`type="module" crossorigin`, '');
      let scriptTag = html.match(/<script[^>]*>(.*?)<\/script[^>]*>/)[0];
      html = html.replace(scriptTag, '');
      html = html.replace('<!-- SCRIPT -->', scriptTag);
      return html;
    },
  };
};
const cssCrossOriginRemove = () => {
  return {
    name: 'css-cross-origin-remove',
    transformIndexHtml(html) {
      return html.replace(
        /(<link[^>]*rel=["']stylesheet["'][^>]*?)\s+crossorigin(?:=["'][^"']*["'])?/g,
        '$1'
      );
    },
  };
};
const vendorMinifier = () => {
  return {
    name: 'vendor-minifier',
    async generateBundle(options, bundle) {
      // Minify vendor scripts after build
      const vendorDir = path.resolve(__dirname, 'dist/vendor');

      if (fs.existsSync(vendorDir)) {
        const vendorFiles = fs.readdirSync(vendorDir);

        for (const file of vendorFiles) {
          if (file.endsWith('.js')) {
            const filePath = path.join(vendorDir, file);
            const content = fs.readFileSync(filePath, 'utf8');

            try {
              // Use Terser for advanced minification
              const minified = await minify(content, {
                compress: {
                  drop_console: false, // Keep console logs for debugging
                  drop_debugger: true,
                  pure_funcs: ['console.log'], // Remove console.log calls
                  passes: 2,
                },
                mangle: {
                  toplevel: false, // Don't mangle top-level names to avoid breaking
                },
                format: {
                  comments: /@license|@preserve|@format|@version/i, // Preserve license comments
                },
                sourceMap: false,
              });

              // Write minified content back
              fs.writeFileSync(filePath, minified.code);

              // Calculate size reduction
              const originalSize = content.length;
              const minifiedSize = minified.code.length;
              const reduction = (((originalSize - minifiedSize) / originalSize) * 100).toFixed(1);

              console.log(`✅ Minified vendor script: ${file} (${reduction}% smaller)`);
            } catch (error) {
              console.warn(`⚠️ Failed to minify ${file}:`, error.message);
              // Fallback to basic minification
              const basicMinified = content
                .replace(/\/\/(?!.*@license|.*@preserve|.*@format|.*@version).*$/gm, '')
                .replace(/\/\*[\s\S]*?\*\/(?!.*@license|.*@preserve|.*@format|.*@version)/g, '')
                .replace(/\s+/g, ' ')
                .replace(/\s*([{}();,=+\-*/<>!&|])\s*/g, '$1')
                .replace(/\s+$/gm, '')
                .replace(/^\s*[\r\n]/gm, '')
                .trim();

              fs.writeFileSync(filePath, basicMinified);
              console.log(`✅ Basic minified vendor script: ${file}`);
            }
          }
        }
      }
    },
  };
};

const seoData = {
  'index': {
    title: 'Custom AI Agent Development & Automation Agency – Voxil AI',
    description: 'Build and deploy custom AI agents, intelligent workflows, and AI SaaS products with Voxil AI — your end-to-end AI automation agency. From $2,500. Book a free consultation.'
  },
  'about': {
    title: 'About Us – Enterprise AI Experts & Automation Specialists – Voxil AI',
    description: 'Meet the team behind Voxil AI, a premier custom AI agent development and process automation agency helping businesses leverage generative AI for ROI.'
  },
  'services': {
    title: 'Custom AI Agent Development & Workflow Automation Services – Voxil AI',
    description: 'Discover our full suite of AI development services: custom AI chatbot development, custom workflow automation solutions, and AI SaaS development agency.'
  },
  'ai-voice-agents': {
    title: 'AI Voice Agent Development & Integration Services - Voxil AI',
    description: 'Voxil AI builds custom AI voice agents for customer support, lead qualification, appointment booking, and outbound sales with sub-100ms latency.'
  },
  'ai-chatbot-development': {
    title: 'AI Chatbot Development Services & Customer Support Automation – Voxil AI',
    description: 'Build custom AI chatbots and intelligent virtual assistants integrated with your database, CRM, and API. Boost customer satisfaction and cut support costs.'
  },
  'ai-saas-development': {
    title: 'Custom AI SaaS Development Agency & AI Product Engineering – Voxil AI',
    description: 'Turn your AI ideas into profitable SaaS platforms. We build end-to-end custom AI SaaS products, LLM integrations, and robust cloud architectures.'
  },
  'pricing': {
    title: 'Transparent AI Development & Automation Pricing – Voxil AI',
    description: 'Explore our custom AI agent development and workflow automation packages. Use our interactive ROI calculator to find the perfect plan starting from $2,500.'
  },
  'contact': {
    title: 'Book a Free 30-Min AI Strategy Call & Contact Us – Voxil AI',
    description: 'Ready to automate your operations? Contact Voxil AI to book your free AI strategy session, discuss your project requirements, and get a custom quote.'
  },
  'process': {
    title: 'Our 4-Step AI Development & Workflow Automation Process – Voxil AI',
    description: 'From initial discovery and rapid prototyping to seamless production deployment and active optimization. See how we deliver enterprise-ready AI solutions.'
  },
  'case-study': {
    title: 'AI Success Stories, Case Studies & ROI Solutions – Voxil AI',
    description: 'See how Voxil AI designs, deploys, and integrates custom AI agents and workflow automation to drive measurable business growth and ROI.'
  },
  'case-study-details': {
    title: 'Detailed AI Automation Case Study & Results – Voxil AI',
    description: 'Explore details, challenges, solutions, and metrics of our client success stories with custom AI agents and automated workflows.'
  },
  'testimonial': {
    title: 'Verified Client Reviews, Testimonials & Clutch Ratings – Voxil AI',
    description: 'Read verified client feedback and ratings from business leaders who automated their operations, reduced overhead, and scaled with Voxil AI solutions.'
  },
  'faq': {
    title: 'AI Automation & Custom Agent Development FAQ – Voxil AI',
    description: 'Find answers to common questions about custom AI agent pricing, workflow automation, LLM selection, data privacy, and CRM integrations.'
  },
  'blog': {
    title: 'AI Automation Insights, Tutorials & Agency Updates – Voxil AI',
    description: 'Stay ahead of the curve with our latest insights, tutorials, and guides on custom AI agent development, n8n workflows, and business automation.'
  }
};

const seoOptimizer = () => {
  return {
    name: 'seo-optimizer',
    transformIndexHtml(html, ctx) {
      let pageName = path.basename(ctx.path || '', '.html');
      if (!pageName || pageName === '/' || pageName === 'index') {
        pageName = 'index';
      }

      const data = seoData[pageName] || {
        title: 'Voxil AI - Custom AI Agent Development & Automation Agency',
        description: 'Voxil AI builds custom AI agents, intelligent workflows, and custom AI SaaS solutions to streamline operations, cut costs, and scale your business.'
      };

      const canonicalUrl = `https://voxilai.tech${ctx.path === '/index.html' ? '/' : ctx.path}`;

      // 1. Process <title>
      if (html.includes('<title>')) {
        html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${data.title}</title>`);
      } else {
        html = html.replace('</head>', `  <title>${data.title}</title>\n</head>`);
      }

      // 2. Process meta description
      const descTag = `<meta name="description" content="${data.description}" />`;
      if (html.match(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i)) {
        html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, descTag);
      } else {
        html = html.replace('</head>', `  ${descTag}\n</head>`);
      }

      // 3. Process canonical
      const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
      if (html.match(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i)) {
        html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, canonicalTag);
      } else {
        html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
      }

      // 4. Process Open Graph tags
      const ogTags = [
        `<meta property="og:url" content="${canonicalUrl}" />`,
        `<meta property="og:title" content="${data.title}" />`,
        `<meta property="og:description" content="${data.description}" />`
      ];
      
      ogTags.forEach(tag => {
        const propMatch = tag.match(/property="([^"]+)"/)[1];
        const regex = new RegExp(`<meta\\s+property="${propMatch}"\\s+content="[^"]*"\\s*\\/?>`, 'i');
        if (html.match(regex)) {
          html = html.replace(regex, tag);
        } else {
          html = html.replace('</head>', `  ${tag}\n</head>`);
        }
      });

      // 5. Process Twitter tags
      const twitterTags = [
        `<meta name="twitter:url" content="${canonicalUrl}" />`,
        `<meta name="twitter:title" content="${data.title}" />`,
        `<meta name="twitter:description" content="${data.description}" />`
      ];

      twitterTags.forEach(tag => {
        const nameMatch = tag.match(/name="([^"]+)"/)[1];
        const regex = new RegExp(`<meta\\s+name="${nameMatch}"\\s+content="[^"]*"\\s*\\/?>`, 'i');
        if (html.match(regex)) {
          html = html.replace(regex, tag);
        } else {
          html = html.replace('</head>', `  ${tag}\n</head>`);
        }
      });

      return html;
    }
  };
};

export default defineConfig({
  plugins: [
    tailwindcss(),
    injectHTML({
      tagName: 'Component',
    }),
    jsToBottomNoModule(),
    cssCrossOriginRemove(),
    vendorMinifier(),
    seoOptimizer(),
  ],
  server: {
    open: true,
  },
  base: '/',
  build: {
    rollupOptions: {
      input: getHtmlEntries(),
    },
    minify: false,
    modulePreload: false,
    cssMinify: false,
    assetsDir: 'assets',
  },
});
