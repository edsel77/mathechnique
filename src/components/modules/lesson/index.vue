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
          <StackLayout v-for="(data, i) in lesson" :key="i">
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
      subCategoryId: 'INT-001',
      lesson: [
        {
          type: 'string',
          data: 'Properties of Integers',
          backgroundColor: 'green',
          textColor: 'white',
          crayonFont: true
        },
        {
          type: 'image',
          data: '/integers/lesson-integer-1.png'
        },
        {
          type: 'string',
          data: 'This is additional notes.',
          backgroundColor: 'green',
          textColor: 'white',
          crayonFont: true
        },
        {
          type: 'image',
          data: '/integers/lesson-integer-2.png'
        },
        {
          type: 'string',
          data: 'You can change the background color and text color also.',
          backgroundColor: 'orange',
          textColor: 'black',
          crayonFont: true
        },
        {
          type: 'string',
          data: 'Disable the crayon font.',
          backgroundColor: 'orange',
          textColor: 'black',
          crayonFont: false
        },
        {
          type: 'image',
          data: '/integers/lesson-integer-3.png'
        },
        {
          type: 'image',
          data: '/integers/lesson-integer-4.png'
        },
        {
          type: 'string',
          data: 'Explanation here.',
          backgroundColor: 'green',
          textColor: 'white',
          crayonFont: true
        },
        {
          type: 'image',
          data: '/integers/lesson-integer-5.png'
        },
        {
          type: 'image',
          data: '/integers/lesson-integer-6.png'
        },
        {
          type: 'string',
          data: 'More explanations and additonal notes from the above discussions.',
          backgroundColor: 'green',
          textColor: 'white',
          crayonFont: true
        },
        {
          type: 'image',
          data: '/integers/lesson-integer-7.png'
        },
        {
          type: 'string',
          data: 'This is the summary of the lesson. You can put as much as many text here.',
          backgroundColor: 'green',
          textColor: 'white',
          crayonFont: true
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
