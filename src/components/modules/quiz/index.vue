<template>
  <Page
    :actionBarHidden="true"
    class="page standard-padding"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout style="height: 10%">
        <Label text="Quiz" textWrap="true" class="rammeto-one title" />
      </StackLayout>
      <ScrollView style="height: 90%">
        <StackLayout>
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
import questions from '~/data/questionBank.json';
import Correct from './greetings.vue';
export default {
  name: 'Quiz',

  data() {
    return {
      questions,
      questionNumber: 1,
      activeQuestion: '',
      score: 0
    };
  },

  created() {
    this.activeQuestion = this.questions[this.questionNumber - 1];
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
