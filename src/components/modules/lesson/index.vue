<template>
  <Page
    :actionBarHidden="true"
    class="page"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout
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
          :text="`${data.subCategoryName} > Lesson`"
          textWrap="true"
          class="fredoka-one subtitle"
        />
      </StackLayout>

      <ScrollView style="height: 90%">
        <StackLayout style="margin-top: 1">
          <StackLayout v-for="(item, i) in lessons" :key="i">
            <Image
              :src="
                `~/data/images/topics/${data.categoryId}/${data.subCategoryId}/LESSON/${item}`
              "
              stretch="aspectFit"
            />
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
import Lessons from '~/data/lessons.json';
import _ from 'lodash';
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
      Lessons,
      lessons: []
    };
  },

  created() {
    this.topicBackgroundColor = this.data.topicBackgroundColor;
    let data = _.find(Lessons, {
      subCategoryId: this.data.subCategoryId
    });
    this.lessons = [];
    if (data) {
      for (let i = 0; i < data.lessonCount; i++) {
        this.lessons.push(this.leadingZero(i + 1, 4) + '.jpg');
      }
    }
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
