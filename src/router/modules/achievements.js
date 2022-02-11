import Achievements from '~/components/modules/achievements'
export default {
  '/achievements': {
    name: 'Achievements',
    component: Achievements,
    meta: { 
      requiredAuth: true
    }
  }
}