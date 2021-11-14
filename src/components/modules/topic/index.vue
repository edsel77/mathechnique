<template>
  <Page
    :actionBarHidden="true"
    class="page standard-padding"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout orientation="horizontal">
        <StackLayout
          style="height: 10%; width: 80%;"
          orientation="horizontal"
          @tap="back"
        >
          <Label
            text.decode="&#xf104;"
            textWrap="true"
            style="font-size: 30; color: gray; margin-right: 10; margin-top: 2;"
            class="fas"
          />
          <Label
            :text="data.subCategoryName"
            textWrap="true"
            class="rammeto-one subtitle"
          />
        </StackLayout>
        <Label
          text.decode="&#xf091;"
          textWrap="true"
          style="text-align: right; font-size: 40; color: #fac61f; width: 20%;"
          class="fas"
        />
      </StackLayout>

      <ScrollView style="height: 90%">
        <StackLayout style="margin-top: 10">
          <StackLayout
            style="padding-top: 20; padding-bottom;"
            v-for="(data, i) in topicList"
            :key="i"
            @tap="goToTopic(data)"
          >
            <StackLayout
              style="border-radius: 10; padding: 20;"
              :style="{ backgroundColor: topicBackgroundColor }"
            >
              <Label
                :text="data.topicName"
                textWrap="true"
                style="text-align: center; font-size: 25;"
                class="fredoka-one"
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
export default {
  name: 'Topic',

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      topicBackgroundColor: '',
      topicList: [
        {
          id: 'lesson',
          topicName: 'Lesson'
        },
        {
          id: 'video',
          topicName: 'Video Tutorial'
        },
        {
          id: 'quiz',
          topicName: 'Activities'
        }
      ]
    };
  },

  created() {
    this.topicBackgroundColor = this.data.topicBackgroundColor;
  },

  methods: {
    goToTopic(data) {
      this.route(`/${data.id}`, {
        data: {
          ...this.data,
          ...data
        }
      });
    }
  }
};
</script>

<style scoped></style>
