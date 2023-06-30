import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Lotus Capital',
  description:
    'The most popular AMM on BSC by user count! Earn LC through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Lotus Capital), NFTs, and more, on a platform you can trust.',
  image: 'https://lotuscapital.netlify.app/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Lotus Capital')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Lotus Capital')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Lotus Capital')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Lotus Capital')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Lotus Capital')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Lotus Capital')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Lotus Capital')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Lotus Capital')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Lotus Capital')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Lotus Capital')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Lotus Capital')}`,
      }
    default:
      return null
  }
}
