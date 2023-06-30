import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'LC',
    lpAddresses: {
      96: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xae59cbc550890bc621ef0749d7d841994986ec51',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'LC-BNB LP',
    lpAddresses: {
      96: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xcA0DEe42A5f266c09c748733465bC8297349a080',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      96: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  
  /**
   * 
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
  
  
]

export default farms
