import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      96: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xC96B0bd79D7fF44eF3Bc8A29561f4D6c83823006',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '7',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
