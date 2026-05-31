export interface Testimonial {
  name: string
  role: string
  initials: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Aline Mukamana',
    role: 'Small Business Owner',
    initials: 'AM',
    quote:
      'Giant Eagle Finance understood my business from the first conversation. The terms were clear, the review was quick, and the funding helped me restock and grow with confidence.',
  },
  {
    name: 'Eric Niyonzima',
    role: 'Salaried Employee',
    initials: 'EN',
    quote:
      'I needed a salary advance ahead of an unexpected expense. The process was simple and respectful, with no hidden surprises. I knew exactly what I was repaying and when.',
  },
  {
    name: 'Diane Uwase',
    role: 'Entrepreneur',
    initials: 'DU',
    quote:
      'Their advisory team genuinely guided me toward the right financing for my venture. Professional, transparent, and dependable — exactly what you want from a lending partner.',
  },
]
