import { motion } from 'framer-motion'
import { ArrowUpRight01Icon, Calendar01Icon } from 'hugeicons-react'
import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

interface Article {
  category: string
  title: string
  excerpt: string
  date: string
}

const articles: Article[] = [
  {
    category: 'Guidance',
    title: 'Borrowing responsibly: how to choose the right loan',
    excerpt:
      'A practical look at matching the loan type and repayment term to your real needs and income.',
    date: 'May 2026',
  },
  {
    category: 'Business',
    title: 'Financing growth for small and medium enterprises',
    excerpt:
      'How working capital and structured financing can help your business expand with confidence.',
    date: 'Apr 2026',
  },
  {
    category: 'Planning',
    title: 'Understanding your repayment schedule',
    excerpt:
      'What to look for in clear loan terms, and how transparent repayment keeps you in control.',
    date: 'Mar 2026',
  },
]

export default function Insights() {
  return (
    <section className="section-pad relative border-y border-black/[0.07] bg-white">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="News & financial guidance"
            description="Practical insights to help you borrow wisely and grow with confidence."
            align="left"
          />
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn-outline hidden sm:inline-flex">
              Access more
              <ArrowUpRight01Icon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white"
              >
                {/* Flat patterned header instead of a stock photo */}
                <div className="relative h-40 overflow-hidden border-b border-black/[0.06] bg-ivory">
                  <div className="absolute inset-0 bg-grid opacity-60" />
                  <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white">
                    {article.category}
                  </span>
                  <span className="absolute bottom-5 right-5 font-display text-5xl font-bold text-gold/20">
                    GE
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <Calendar01Icon className="h-3.5 w-3.5" /> {article.date}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink-black">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Read more
                    <ArrowUpRight01Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
