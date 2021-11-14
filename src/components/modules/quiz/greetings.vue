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
    </StackLayout>
    <StackLayout verticalAlignment="center" v-else>
      <Gif src="~/assets/gifs/sorry.gif" height="300"></Gif>
      <Label
        :text="message"
        textWrap="true"
        style="text-align: center; font-size: 50; font-weight: bold; color: red"
        class="crayon-font"
      />
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
    }
  },

  data() {
    return {
      greetings,
      message: ''
    };
  },

  created() {
    setTimeout(() => {
      this.$modal.close();
      player.pause();
    }, 5000);

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
        console.log('finished playing');
      },
      errorCallback: function(errorObject) {
        console.log(JSON.stringify(errorObject));
      },
      infoCallback: function(args) {
        console.log(JSON.stringify(args));
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

<style scoped></style>
