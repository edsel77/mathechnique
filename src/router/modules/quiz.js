import Quiz from '~/components/modules/quiz'
import QuizResult from '~/components/modules/quiz/result'
export default {
  '/quiz': {
    name: 'Quiz',
    component: Quiz,
    meta: { 
      requiredAuth: true
    }
  },
  '/quiz/result': {
    name: 'QuizResult',
    component: QuizResult,
    meta: { 
      requiredAuth: true
    }
  }
}