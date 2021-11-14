import Topic from '~/components/modules/topic'
export default {
  '/topic': {
    name: 'Topic',
    component: Topic,
    meta: { 
      requiredAuth: true
    }
  }
}