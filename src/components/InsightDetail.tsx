import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft02Icon,
  Calendar01Icon,
  Clock01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from 'hugeicons-react'
import { type Article, type Block, articles, categoryColours } from '../data/insights'
import CTABand from './CTABand'
import Reveal from './ui/Reveal'

/* ── Content block renderer ── */
function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="mt-6 text-base leading-[1.9] text-ink-charcoal/80 first:mt-0 sm:text-[1.03rem]">
          {block.text}
        </p>
      )

    case 'heading':
      return (
        <div className="mb-5 mt-12">
          <span className="mb-4 block h-0.5 w-8 rounded-full bg-gold" />
          <h2 className="font-display text-2xl font-bold leading-tight text-ink-black sm:text-3xl">
            {block.text}
          </h2>
        </div>
      )

    case 'list':
      return (
        <div className="my-8">
          {block.intro && (
            <p className="mb-5 text-sm font-semibold text-ink-charcoal">{block.intro}</p>
          )}
          <ol className="space-y-4">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-base leading-relaxed text-ink-charcoal/80">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      )

    case 'callout':
      return (
        <div className="my-10 flex items-start gap-5 overflow-hidden rounded-2xl bg-gold/[0.06] p-7 ring-1 ring-gold/20 sm:p-8">
          <span className="mt-1 block h-12 w-1 shrink-0 rounded-full bg-gold" />
          <div>
            <p className="mb-2 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-gold">
              {block.label}
            </p>
            <p className="text-base font-medium leading-relaxed text-ink-black sm:text-[1.05rem]">
              {block.text}
            </p>
          </div>
        </div>
      )

    default:
      return null
  }
}

/* ── Compact sidebar related card ── */
function SidebarCard({ article }: { article: Article }) {
  return (
    <Link
      to={`/insights/${article.slug}`}
      className="group flex items-start gap-3 rounded-xl border border-black/[0.07] p-3 transition-all duration-200 hover:border-gold/30 hover:bg-gold/[0.03]"
    >
      <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </div>
      <div className="min-w-0 py-0.5">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-gold/70">
          {article.category}
        </p>
        <p className="mt-1 font-display text-sm font-semibold leading-snug text-ink-black line-clamp-2">
          {article.title}
        </p>
        <span className="mt-1.5 flex items-center gap-1 text-[0.7rem] font-semibold text-gold">
          Read
          <ArrowUpRight01Icon className="h-3 w-3" />
        </span>
      </div>
    </Link>
  )
}

/* ── Bottom grid article card ── */
function BottomCard({ article }: { article: Article }) {
  return (
    <Link to={`/insights/${article.slug}`} className="group block h-full">
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-colors hover:border-gold/40"
      >
        <div className="relative h-44 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
              categoryColours[article.category] ?? 'bg-gold text-white'
            }`}
          >
            {article.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs text-muted">
            {article.date} · {article.readTime}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink-black">
            {article.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
            {article.excerpt}
          </p>
          <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-gold">
            Read article
            <ArrowRight01Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </motion.article>
    </Link>
  )
}

/* ── Main component ── */
export default function InsightDetail({ article }: { article: Article }) {
  const related = articles.filter((a) => a.slug !== article.slug)
  const sidebarRelated = related.slice(0, 2)
  const bottomRelated = related.slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-white pt-24 sm:pt-28 lg:pt-32">
        <div className="relative w-full overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="h-[55vh] w-full object-cover sm:h-[65vh] lg:h-[72vh]"
          />
          <div className="absolute inset-0 bg-ink-black/82" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/70 to-transparent" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">

            {/* Top — breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/50">
              <Link to="/" className="transition-colors hover:text-white">Home</Link>
              <ArrowRight01Icon className="h-3.5 w-3.5 opacity-50" />
              <Link to="/insights" className="transition-colors hover:text-white">Insights</Link>
              <ArrowRight01Icon className="h-3.5 w-3.5 opacity-50" />
              <span className="max-w-[200px] truncate text-gold sm:max-w-none">{article.category}</span>
            </nav>

            {/* Bottom — category + title */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    categoryColours[article.category] ?? 'bg-gold text-white'
                  }`}
                >
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/55">
                  <Calendar01Icon className="h-4 w-4" /> {article.date}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/55">
                  <Clock01Icon className="h-4 w-4" /> {article.readTime}
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15]"
              >
                {article.title}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meta strip ── */}
      <div className="border-b border-black/[0.07] bg-white">
        <div className="container-px flex items-center justify-between py-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold font-display text-xs font-bold text-white">
              GE
            </span>
            <div className="leading-none">
              <p className="text-sm font-semibold text-ink-black">{article.author}</p>
              <p className="mt-0.5 text-xs text-muted">Giant Eagle Finance · Kigali</p>
            </div>
          </div>
          <Link
            to="/insights"
            className="hidden items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-gold sm:flex"
          >
            <ArrowLeft02Icon className="h-4 w-4" />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* ── Article body + sidebar ── */}
      <div className="container-px py-12 sm:py-16 lg:py-20">

        {/* Back link — mobile only */}
        <Link
          to="/insights"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-gold sm:hidden"
        >
          <ArrowLeft02Icon className="h-4 w-4" />
          Back to Insights
        </Link>

        <div className="grid gap-14 lg:grid-cols-[1fr_360px]">

          {/* ── Main article ── */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            {/* Lead excerpt */}
            <p className="border-l-[3px] border-gold pl-5 text-base font-medium leading-relaxed text-ink-charcoal sm:text-lg sm:pl-6">
              {article.excerpt}
            </p>

            {/* Content */}
            <div className="mt-10">
              {article.content.map((block, i) => (
                <RenderBlock key={i} block={block} />
              ))}
            </div>

            {/* Author footer */}
            <div className="mt-14 flex items-center gap-4 border-t border-black/[0.07] pt-8">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gold font-display text-base font-bold text-white">
                GE
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-black">{article.author}</p>
                <p className="text-xs text-muted">Giant Eagle Finance Ltd · Kigali, Rwanda</p>
              </div>
            </div>
          </motion.article>

          {/* ── Sidebar ── */}
          <aside>
            <div className="lg:sticky lg:top-24 space-y-5">

              {/* CTA card */}
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-2xl bg-ink-black p-7"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold/70">
                  Ready to apply?
                </p>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug text-white">
                  Get the right facility for your needs
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Our team will review your inquiry within 24 hours and guide you through clear, fair terms.
                </p>
                <Link to="/contact" className="btn-gold mt-6 w-full">
                  Apply Now
                  <ArrowRight01Icon className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 py-3 text-sm font-semibold text-white/70 transition-colors hover:border-white/50 hover:text-white"
                >
                  View Loan Products
                </Link>
              </motion.div>

              {/* Related articles */}
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-black/[0.08] bg-white p-5"
              >
                <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
                  More Insights
                </p>
                <div className="space-y-3">
                  {sidebarRelated.map((a) => (
                    <SidebarCard key={a.slug} article={a} />
                  ))}
                </div>
              </motion.div>

            </div>
          </aside>

        </div>
      </div>

      {/* ── More articles — bottom grid ── */}
      <section className="bg-ivory py-14 sm:py-20 border-t border-black/[0.07]">
        <div className="container-px">
          <Reveal>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-8 bg-gold/40" />
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-gold/70">
                    Continue reading
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-ink-black sm:text-3xl">
                  More from our team
                </h2>
              </div>
              <Link
                to="/insights"
                className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold/80 sm:flex"
              >
                View all
                <ArrowRight01Icon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bottomRelated.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <BottomCard article={a} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 sm:hidden">
              <Link
                to="/insights"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-gold"
              >
                View all insights
                <ArrowRight01Icon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
