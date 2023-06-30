import tokens from './tokens'
import farms from './farms'
import { Ifo, Token } from './types'

const cakeBnbLpToken: Token = {
  symbol: farms[1].lpSymbol,
  address: farms[1].lpAddresses,
  decimals: 18,
}

const ifos: Ifo[] = [
  {
    id: 'yukla',
    address: '0xBeE786b2E92C7DCe3aa07B85f37d37491Cb46C64',
    isActive: true,
    name: '',
    poolBasic: {
      saleAmount: '0',
      raiseAmount: '$0',
      cakeToBurn: '$0',
      distributionRatio: 0.33,
    },
    poolUnlimited: {
      saleAmount: '0',
      raiseAmount: '$0',
      cakeToBurn: '$0',
      distributionRatio: 0.66,
    },
    currency: cakeBnbLpToken,
    token: tokens.yukla,
    releaseBlockNumber: 16714751,
    campaignId: '1',
    articleUrl: '#',
    tokenOfferingPrice: 1.0,
    version: 2,
  },
]

export default ifos
