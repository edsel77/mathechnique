import Video from '~/components/modules/video'
export default {
  '/video': {
    name: 'Video',
    component: Video,
    meta: { 
      requiredAuth: true
    }
  }
}