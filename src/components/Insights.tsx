import { motion } from 'framer-motion'
import { ArrowUpRight01Icon, Calendar01Icon, Clock01Icon } from 'hugeicons-react'
import { Link } from 'react-router-dom'
import { articles, categoryColours } from '../data/insights'
import Reveal from './ui/Reveal'

export default function Insights() {
  const [featured, ...rest] = articles

  return (
    <section className="section-pad relative bg-white">
      <div className="container-px">

        {/* ── Featured article — full-width hero card ── */}
        <Reveal>
          <Link to={`/insights/${featured.slug}`} className="group block">
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-3xl border border-black/[0.08] bg-white"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-[420px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/90 via-ink-black/55 to-ink-black/20" />

                {/* Floating meta on image */}
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        categoryColours[featured.category] ?? 'bg-gold text-white'
                      }`}
                    >
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-white/55">
                      <Calendar01Icon className="h-3.5 w-3.5" /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-white/55">
                      <Clock01Icon className="h-3.5 w-3.5" /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
                    {featured.title}
                  </h2>
                </div>
              </div>

              {/* Excerpt row */}
              <div className="flex flex-col items-start justify-between gap-4 px-7 py-6 sm:flex-row sm:items-center sm:px-10">
                <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {featured.excerpt}
                </p>
                <span className="flex shrink-0 items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.06] px-5 py-2.5 text-sm font-semibold text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  Read article
                  <ArrowUpRight01Icon className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          </Link>
        </Reveal>

        {/* ── Remaining articles — responsive grid ── */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.07}>
              <Link to={`/insights/${article.slug}`} className="group block h-full">
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-colors hover:border-gold/40"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
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

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar01Icon className="h-3.5 w-3.5" /> {article.date}
                      </span>
                      <span className="opacity-40">·</span>
                      <span className="flex items-center gap-1.5">
                        <Clock01Icon className="h-3 w-3" /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink-black">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-gold">
                      Read article
                      <ArrowUpRight01Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
