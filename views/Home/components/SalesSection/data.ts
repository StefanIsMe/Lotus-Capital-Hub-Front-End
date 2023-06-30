import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'AMM Aggregator protocol will soon be enabled.',
  bodyText: 'Trade tokens at the best prices on Ethereum blockchain, Binance blockchain, Polygon blockchain and, Avalanche blockchain. Using our DEX aggregator, tap into liquidity on 35+ decentralized exchanges, such as 0x, Uniswap, 1inch, pancakeswap, and Kyber, to execute your trade with the best return and lowest transaction fees.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
 
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'Lotus Capital makes it simple to make your crypto work for you!.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
 
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'LC is the governance token of Lotus Capital.',
  bodyText:
    'LC token is at the core of the Lotus Capital ecosystem. Buy, trade,  farm, stake, earn, and vote with LC.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xae59cbc550890bc621ef0749d7d841994986ec51',
    text: 'Buy LC',
    external: false,
  },


  images: {
    path: '/images/home/',
    attributes: [
      { src: 'coin', alt: 'LC token' }
    ],
  },
}
