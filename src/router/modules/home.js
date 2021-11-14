import Home from '~/components/modules/home'
export default {
  '/home': {
    name: 'Home',
    component: Home,
    meta: { 
      requiredAuth: true
    }
  }
}