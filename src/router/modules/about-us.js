import AboutUs from '~/components/modules/about-us'
export default {
  '/about-us': {
    name: 'AboutUs',
    component: AboutUs,
    meta: { 
      requiredAuth: true
    }
  }
}