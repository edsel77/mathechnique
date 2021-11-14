<template>
  <Page
    :actionBarHidden="true"
    class="page standard-padding"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout style="height: 10%;" orientation="horizontal">
        <Label
          text.decode="&#xf104;"
          textWrap="true"
          style="font-size: 30; color: gray; margin-right: 10; margin-top: 2;"
          class="fas"
          @tap="back"
        />
        <Label
          :text="`${data.subCategoryName} > Lesson`"
          textWrap="true"
          class="rammeto-one subtitle"
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
  name: 'Lesson',

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
        data
      });
    }
  }
};
</script>

<style scoped></style>
