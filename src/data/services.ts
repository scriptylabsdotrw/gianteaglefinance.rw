import {
  User03Icon,
  Wallet01Icon,
  Building03Icon,
  Briefcase01Icon,
  FirstAidKitIcon,
  Compass01Icon,
} from 'hugeicons-react'
import type { IconType } from '../components/ui/icon'

export interface Service {
  icon: IconType
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: User03Icon,
    title: 'Personal Loans',
    description:
      'Flexible financing for life’s priorities — from home improvements to education and major purchases, with clear terms.',
  },
  {
    icon: Wallet01Icon,
    title: 'Salary Advance',
    description:
      'Bridge the gap before payday. Quick access to a portion of your salary with straightforward, transparent repayment.',
  },
  {
    icon: Building03Icon,
    title: 'Business Loans',
    description:
      'Capital to launch, expand, or stabilise your operations, structured around your cash flow and growth plans.',
  },
  {
    icon: Briefcase01Icon,
    title: 'SME Financing',
    description:
      'Tailored funding for small and medium enterprises — working capital, equipment, and expansion support.',
  },
  {
    icon: FirstAidKitIcon,
    title: 'Emergency Loans',
    description:
      'Fast, reliable funds for unexpected needs, reviewed promptly so you can act when timing matters most.',
  },
  {
    icon: Compass01Icon,
    title: 'Loan Advisory',
    description:
      'Professional guidance to help you choose the right product, plan repayment, and borrow responsibly.',
  },
]
