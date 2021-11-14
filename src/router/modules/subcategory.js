import Subcategory from '~/components/modules/subcategory'
export default {
  '/subcategory': {
    name: 'Subcategory',
    component: Subcategory,
    meta: { 
      requiredAuth: true
    }
  }
}