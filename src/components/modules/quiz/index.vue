<template>
  <Page
    :actionBarHidden="true"
    class="page standard-padding"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout
        orientation="horizontal"
        @tap="back"
        style="margin-bottom: 15"
      >
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
          <!-- <Label
            text="No data for this quiz."
            textWrap="true"
            style="text-align: center; font-size: 17; color: black;"
          /> -->
        </StackLayout>
        <StackLayout v-else verticalAlignment="top">
          <StackLayout>
            <Label
              :text="`Question: ${questionNumber}/${totalItems}`"
              textWrap="true"
              style="font-weight: bold; font-size: 20;"
            />
            <StackLayout v-for="(item, i) in activeQuestion.question" :key="i">
              <Image
                :src="
                  `~/data/images/topics/${data.categoryId}/${data.subCategoryId}/${item.data}`
                "
                stretch="aspectFit"
              />
            </StackLayout>
          </StackLayout>

          <StackLayout style="margin-top: 20">
            <StackLayout v-for="(item, i) in activeQuestion.choices" :key="i">
              <StackLayout
                style="margin-bottom: 10; border-radius: 20px; text-align: center"
                @tap="selectAnswer(item)"
              >
                <Image
                  :src="
                    `~/data/images/topics/${data.categoryId}/${data.subCategoryId}/${item.data}`
                  "
                  stretch="aspectFit"
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
import Correct from './greetings.vue';
import _ from 'lodash';
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
      questions: '',
      questionNumber: 1,
      activeQuestion: '',
      score: 0
    };
  },

  created() {
    let itemCount = 20;
    this.questions = [];
    for (let i = 0; i < itemCount; i++) {
      this.questions.push({
        questionId: i + 1,
        question: [
          {
            type: 'image',
            data: `ACTIVITY/${this.leadingZero(i + 1, 4)}-.jpg`
          }
        ],
        choices: [
          {
            type: 'image',
            data: `ACTIVITY/${this.leadingZero(i + 1, 4)}-option1.jpg`,
            isCorrectAnswer: false
          },
          {
            type: 'image',
            data: `ACTIVITY/${this.leadingZero(i + 1, 4)}-option2.jpg`,
            isCorrectAnswer: false
          },
          {
            type: 'image',
            data: `ACTIVITY/${this.leadingZero(i + 1, 4)}-option3.jpg`,
            isCorrectAnswer: false
          },
          {
            type: 'image',
            data: `ACTIVITY/${this.leadingZero(i + 1, 4)}-answer.jpg`,
            isCorrectAnswer: true
          }
        ]
      });
    }
    this.questions = _.shuffle(this.questions);
    this.activeQuestion = this.questions[this.questionNumber - 1];
    this.activeQuestion.choices = _.shuffle(this.activeQuestion.choices);
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
            data: this.data,
            score: this.score,
            totalItems: this.totalItems,
            category: this.activeQuestion.category
          },
          true
        );
      } else {
        this.activeQuestion = this.questions[val - 1];
        this.activeQuestion.choices = _.shuffle(this.activeQuestion.choices);
      }
    }
  },

  methods: {
    selectAnswer(data) {
      if (data.isCorrectAnswer) {
        this.score++;
      }
      this.activeQuestion = "";
      let progress = (this.score / this.totalItems) * 100;
      this.$showModal(Correct, {
        fullscreen: true,
        props: {
          data: data,
          progress
        }
      }).then(() => {
        this.questionNumber++;
      });
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
