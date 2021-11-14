import Menu from '~/components/modules/menu'
export default {
  '/menu': {
    name: 'Menu',
    component: Menu,
    meta: { 
      requiredAuth: true
    }
  }
}