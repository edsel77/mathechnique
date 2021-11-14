import Lesson from '~/components/modules/lesson'
export default {
  '/lesson': {
    name: 'Lesson',
    component: Lesson,
    meta: { 
      requiredAuth: true
    }
  }
}