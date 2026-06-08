import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { articles } from '../data/insights'
import InsightDetail from '../components/InsightDetail'

export default function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const article = articles.find((a) => a.slug === slug)

  useEffect(() => {
    if (!article) navigate('/insights', { replace: true })
  }, [article, navigate])

  if (!article) return null

  return <InsightDetail article={article} />
}
