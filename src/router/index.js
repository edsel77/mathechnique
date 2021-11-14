import homeRoute from './modules/home'
import menuRoute from './modules/menu'
import quizRoute from './modules/quiz'
import subcategoryRoute from './modules/subcategory'
import topicRoute from './modules/topic'
import lessonRoute from './modules/lesson'
import videoRoute from './modules/video'
export default {
  ...homeRoute,
  ...menuRoute,
  ...quizRoute,
  ...subcategoryRoute,
  ...topicRoute,
  ...lessonRoute,
  ...videoRoute
}