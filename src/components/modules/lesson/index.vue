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
          :text="`${data.subCategoryName} > Lesson`"
          textWrap="true"
          class="fredoka-one subtitle"
        />
      </StackLayout>

      <ScrollView style="height: 85%">
        <StackLayout style="margin-top: 1">
          <StackLayout v-for="(data, i) in lesson.lesson" :key="i">
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
            <Image
              v-else-if="data.type === 'image'"
              :src="`~/data/images/lessons/${data.data}`"
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
      lesson: ''
    };
  },

  created() {
    this.topicBackgroundColor = this.data.topicBackgroundColor;
    let data = _.find(Lessons, {
      subCategoryId: this.data.subCategoryId
    });
    if (data) {
      this.lesson = data;
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
