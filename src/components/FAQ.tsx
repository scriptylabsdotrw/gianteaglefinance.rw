import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Add01Icon } from 'hugeicons-react'
import { faqs } from '../data/faqs'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad relative border-y border-black/[0.07] bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered clearly"
          description="Everything you need to know before you apply. Still curious? Our team is happy to help."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen ? 'border-gold bg-ivory' : 'border-black/[0.08] bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-ink-black">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen ? 'bg-gold text-white' : 'bg-ivory text-gold'
                      }`}
                    >
                      <Add01Icon className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
