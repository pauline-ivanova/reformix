import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

interface MarkdownContentProps {
  content: string
  className?: string
}

export default async function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  // Process markdown on the server
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content)

  const htmlContent = String(processedContent)

  return (
    <div 
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}

