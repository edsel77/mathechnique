import MyProfile from '~/components/modules/my-profile'
export default {
  '/my-profile': {
    name: 'MyProfile',
    component: MyProfile,
    meta: { 
      requiredAuth: true
    }
  }
}