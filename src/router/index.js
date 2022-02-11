import homeRoute from './modules/home'
import menuRoute from './modules/menu'
import quizRoute from './modules/quiz'
import subcategoryRoute from './modules/subcategory'
import topicRoute from './modules/topic'
import lessonRoute from './modules/lesson'
import videoRoute from './modules/video'
import myProfileRoute from './modules/my-profile'
import achievementsRoute from './modules/achievements'
import aboutUsRoute from './modules/about-us'
export default {
  ...homeRoute,
  ...menuRoute,
  ...quizRoute,
  ...subcategoryRoute,
  ...topicRoute,
  ...lessonRoute,
  ...videoRoute,
  ...myProfileRoute,
  ...achievementsRoute,
  ...aboutUsRoute
}