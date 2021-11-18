<template>
  <Page
    :actionBarHidden="true"
    class="page standard-padding"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout style="height: 15%;" orientation="horizontal" @tap="back">
        <Label
          text.decode="&#xf104;"
          textWrap="true"
          style="font-size: 30; color: gray; margin-right: 10; margin-top: 2;"
          class="fas"
        />
        <Label
          :text="`${data.subCategoryName} > Activities`"
          textWrap="true"
          class="fredoka-one subtitle"
        />
      </StackLayout>
      <ScrollView style="height: 90%">
        <StackLayout v-if="!activeQuestion" verticalAlignment="center">
          <Label
            text="No data for this quiz."
            textWrap="true"
            style="text-align: center; font-size: 17; color: white;"
          />
        </StackLayout>
        <StackLayout v-else>
          <StackLayout
            class="common-container"
            :class="{ 'crayon-font': activeQuestion.chalkFont }"
            :style="{
              backgroundColor: activeQuestion.backgroundColor,
              color: activeQuestion.fontColor
            }"
          >
            <Label
              :text="`Question: ${questionNumber}/${totalItems}`"
              textWrap="true"
              style="font-weight: bold;"
            />
            <StackLayout v-for="(data, i) in activeQuestion.question" :key="i">
              <Label
                v-if="data.type === 'string'"
                :text="data.data"
                textWrap="true"
              />
              <Image
                v-if="data.type === 'image'"
                :src="`~/data/images/${data.data}`"
                stretch="aspectFit"
              />
            </StackLayout>
          </StackLayout>

          <StackLayout style="margin-top: 20">
            <StackLayout v-for="(data, i) in activeQuestion.choices" :key="i">
              <StackLayout
                style="margin-bottom: 10; border-radius: 20px; border-width: 2px; padding: 10; text-align: center"
                :style="{
                  backgroundColor: data.backgroundColor,
                  color: data.fontColor
                }"
                :class="{ 'crayon-font': data.chalkFont }"
                @tap="selectAnswer(data)"
              >
                <Label
                  v-if="data.type === 'string'"
                  :text="data.data"
                  textWrap="true"
                />
                <Image
                  v-if="data.type === 'image'"
                  :src="`~/data/images/${data.data}`"
                  stretch="aspectFit"
                  style="height: 30"
                />
              </StackLayout>
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
import Questions from '~/data/questionBank.json';
import Correct from './greetings.vue';
export default {
  name: 'Quiz',

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      Questions,
      questions: '',
      questionNumber: 1,
      activeQuestion: '',
      score: 0
    };
  },

  created() {
    let data = _.find(Questions, {
      subCategoryId: this.data.subCategoryId
    });
    if (data) {
      this.questions = data.questions;
      this.activeQuestion = this.questions[this.questionNumber - 1];
    }
  },

  computed: {
    totalItems() {
      return this.questions.length;
    }
  },

  watch: {
    questionNumber(val) {
      if (val > this.questions.length) {
        this.route(
          '/quiz/result',
          {
            score: this.score,
            totalItems: this.totalItems,
            category: this.activeQuestion.category,
            subCategory: this.activeQuestion.subCategory
          },
          true
        );
      } else {
        this.activeQuestion = this.questions[val - 1];
      }
    }
  },

  methods: {
    selectAnswer(data) {
      this.$showModal(Correct, {
        fullscreen: true,
        props: {
          data: data
        }
      }).then(() => {
        this.questionNumber++;
      });

      if (data.isCorrectAnswer) {
        this.score++;
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 25;
  color: white;
}
</style>
