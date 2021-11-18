<template>
  <Page
    :actionBarHidden="true"
    class="page"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout
        style="height: 15%;"
        orientation="horizontal"
        class="standard-padding"
        @tap="back"
      >
        <Label
          text.decode="&#xf104;"
          textWrap="true"
          style="font-size: 30; color: gray; margin-right: 10; margin-top: 2;"
          class="fas"
        />
        <Label
          :text="`${data.subCategoryName} > Video Tutorial`"
          textWrap="true"
          class="fredoka-one subtitle"
        />
      </StackLayout>

      <StackLayout style="height: 30%; background-color: white;">
        <VideoPlayer
          :src="`~/data/videos/${videoTutorial.path}`"
          autoplay="true"
          controls="true"
          height="250"
          :fill="true"
          ref="videoPlayer"
        ></VideoPlayer>
      </StackLayout>

      <ScrollView style="height: 55%;">
        <StackLayout>
          <StackLayout v-for="(data, i) in videoTutorial.videoDescription" :key="i">
            <StackLayout
              v-if="data.type === 'string'"
              :style="{
                backgroundColor: data.backgroundColor,
                color: data.textColor
              }"
              style="padding: 10"
            >
              <Label
                :text="data.data"
                textWrap="true"
                :class="{ 'crayon-font': data.crayonFont }"
                style="font-size: 25px;"
              />
            </StackLayout>
            <StackLayout v-else-if="data.type === 'image'" style="background-color: white;">
              <Image
                :src="`~/data/images/lessons/${data.data}`"
                stretch="aspectFit"
              />
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
import VideoTutorial from '~/data/videoTutorial.json';
export default {
  name: 'Video Tutorial',

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      VideoTutorial,
      videoTutorial: ''
    };
  },

  created() {
    this.topicBackgroundColor = this.data.topicBackgroundColor;
    let data = _.find(VideoTutorial, {
      subCategoryId: this.data.subCategoryId
    });
    if (data) {
      this.videoTutorial = data;
    }
  },

  beforeDestroy() {
    this.$refs.videoPlayer.nativeView.pause();
  },

  methods: {
    goToTopic(data) {
      this.route(`/${data.id}`, {
        data
      });
    }
  }
};
</script>

<style scoped></style>
