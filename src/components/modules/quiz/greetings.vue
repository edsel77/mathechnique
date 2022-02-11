<template>
  <Page
    :actionBarHidden="true"
    :androidStatusBarBackground="themeColor"
    @tap="$modal.close"
  >
    <StackLayout verticalAlignment="center" v-if="data.isCorrectAnswer">
      <Gif src="~/assets/gifs/balloons.gif" height="300"></Gif>
      <Label
        :text="message"
        textWrap="true"
        style="text-align: center; font-size: 50; font-weight: bold; color: green"
        class="crayon-font"
      />
      <StackLayout style="text-align: center; margin-top: 20;">
        <GridLayout :columns="progressFormat" class="progressbar">
          <StackLayout
            col="0"
            class="progressbar-value"
            verticalAlignment="center"
          >
          </StackLayout>
        </GridLayout>
        <StackLayout>
          <Label
            v-show="displayProgress"
            :text="`${progress.toFixed(0)}%`"
            textWrap="false"
            class="crayon-font"
            style="font-size: 30px; color: black;"
          />
        </StackLayout>
      </StackLayout>
    </StackLayout>
    <StackLayout verticalAlignment="center" v-else>
      <Gif src="~/assets/gifs/sorry.gif" height="300"></Gif>
      <Label
        :text="message"
        textWrap="true"
        style="text-align: center; font-size: 50; font-weight: bold; color: red"
        class="crayon-font"
      />
      <StackLayout style="text-align: center; margin-top: 20;">
        <GridLayout :columns="progressFormat" class="progressbar">
          <StackLayout
            col="0"
            class="progressbar-value"
            verticalAlignment="center"
          >
            <Label
              v-show="displayProgress"
              textWrap="false"
              class="crayon-font"
              style="font-size: 15px; color: white;"
            />
          </StackLayout>
        </GridLayout>
        <StackLayout>
          <Label
            v-show="displayProgress"
            :text="`${progress.toFixed(0)}%`"
            textWrap="false"
            class="crayon-font"
            style="font-size: 30px; color: black;"
          />
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
const audio = require('nativescript-audio');
const player = new audio.TNSPlayer();
import greetings from '~/data/greetings.json';
export default {
  name: 'Greetings',

  props: {
    data: {
      type: Object,
      required: true
    },

    progress: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      greetings,
      message: '',
      progressFormat: '1*,99*',
      displayProgress: false
    };
  },

  created() {
    setTimeout(() => {
      this.$modal.close();
      player.pause();
    }, 5000);

    setTimeout(() => {
      this.progressFormat = this.progress + '*,' + (100 - this.progress) + '*';
      this.displayProgress = true;
    }, 100);

    if (this.data.isCorrectAnswer) {
      this.message = this.greetings.correct[
        Math.floor(Math.random() * this.greetings.correct.length)
      ];
    } else {
      this.message = this.greetings.incorrect[
        Math.floor(Math.random() * this.greetings.incorrect.length)
      ];
    }

    let audioFile = this.data.isCorrectAnswer
      ? 'clapping.mp3'
      : 'wrong-answer.mp3';
    const playerOptions = {
      audioFile: `~/assets/tones/${audioFile}`,
      loop: false,
      completeCallback: function() {
        // console.log('finished playing');
      },
      errorCallback: function(errorObject) {
        // console.log(JSON.stringify(errorObject));
      },
      infoCallback: function(args) {
        // console.log(JSON.stringify(args));
      }
    };

    player
      .playFromUrl(playerOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('something went wrong...', err);
      });
  }
};
</script>

<style scoped>
.progressbar {
  height: 40;
  margin: 10;
  border-radius: 10;
  background: silver;
}
.progressbar-value {
  background: green;
  height: 35;
  border-radius: 10;
}
</style>
