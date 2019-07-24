import MarkdownIt from 'markdown-it'
import hljs from '@/plugins/highlight'

const md = new MarkdownIt({
  html: true,
  breaks: false,
  linkify: true,
  typographer: false,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(lang, str, true).value
        }</code></pre>`
      } catch (err) {
        console.err(JSON.stringify(err))
      }
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
  },
})

export default md
