import {
  User03Icon,
  Building03Icon,
  AnalyticsUpIcon,
  MapPinIcon,
  Car01Icon,
  TractorIcon,
  Home01Icon,
  Clock01Icon,
  Wallet01Icon,
  Certificate01Icon,
} from 'hugeicons-react'
import type { IconType } from '../components/ui/icon'

export interface LoanProduct {
  icon: IconType
  title: string
  description: string
  tag?: string
}

export const loanProducts: LoanProduct[] = [
  {
    icon: User03Icon,
    title: 'Personal Loans',
    description: 'Flexible funds for education, medical, travel, or any personal priority.',
  },
  {
    icon: Building03Icon,
    title: 'Business Loans',
    description: 'Capital to launch, expand, or stabilise your business with structured terms.',
  },
  {
    icon: AnalyticsUpIcon,
    title: 'Working Capital',
    description: 'Keep operations running with short-cycle funding aligned to your revenue.',
  },
  {
    icon: MapPinIcon,
    title: 'Land Purchase Loan',
    description: 'Finance residential or commercial land acquisition with clear title support.',
  },
  {
    icon: Car01Icon,
    title: 'Car Purchase Loan',
    description: 'Drive away sooner with competitive rates and flexible repayment terms.',
  },
  {
    icon: TractorIcon,
    title: 'Agriculture & Livestock',
    description: 'Fund farm inputs, equipment, and livestock with seasonal repayment options.',
  },
  {
    icon: Home01Icon,
    title: 'Property Purchase Loan',
    description: 'Buy residential or commercial property with structured financing and expert guidance.',
  },
  {
    icon: Clock01Icon,
    title: 'Short-term Loan',
    description: 'Quick access to funds for urgent needs, repayable within 1–6 months.',
  },
  {
    icon: Wallet01Icon,
    title: 'Salary Loan',
    description: 'Access a portion of your salary before payday — fast, confidential, and simple.',
  },
  {
    icon: Certificate01Icon,
    title: 'Bid Guarantee',
    description: 'Tender bonds and bid guarantees to support your contract bids and auctions.',
    tag: 'Tender / Auction',
  },
]
