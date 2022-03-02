<template>
  <Page
    :actionBarHidden="true"
    class="page"
    :androidStatusBarBackground="themeColor"
  >
    <GridLayout>
      <Gif src="~/assets/gifs/animated-balloons.gif" height="100%" />
      <StackLayout>
        <StackLayout style="height: 20%" class="standard-padding">
          <Label
            text="Result"
            textWrap="true"
            class="rammeto-one title"
            style="color: black"
          />
          <Label
            :text="`Score: ${score}/${totalItems}`"
            textWrap="true"
            class="crayon-font"
            style="color: white; font-size: 25"
          />
        </StackLayout>
        <ScrollView style="height: 65%">
          <StackLayout verticalAlignment="center">
            <Label
              :text="message.message"
              textWrap="true"
              style="text-align: center; font-size: 50; font-weight: bold;"
              :style="{ color: messageColor }"
              class="crayon-font"
            />
            <StackLayout style="margin-top: 20;" verticalAlignment="center">
              <Label
                :text="`${score}/${totalItems}`"
                textWrap="true"
                style="text-align: center; font-size: 60; font-weight: bold;"
                :style="{ color: messageColor }"
                class="bangers-font"
              />
            </StackLayout>
          </StackLayout>
        </ScrollView>
        <StackLayout style="height: 15%" class="standard-padding">
          <Button
            text="Back to Home"
            @tap="goToHome"
            style="border-radius: 10; background-color: yellow; font-weight: bold;"
            class="fredoka-one"
          />
        </StackLayout>
      </StackLayout>
    </GridLayout>
  </Page>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
import greetings from '~/data/greetings.json';
import _ from 'lodash';
const audio = require('nativescript-audio');
const player = new audio.TNSPlayer();
export default {
  name: 'QuizResult',

  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },

    score: {
      type: Number,
      required: true,
      default: 0
    },

    totalItems: {
      type: Number,
      required: true,
      default: 0
    },

    category: {
      type: String,
      required: true,
      default: ''
    }
  },

  data() {
    return {
      resultMessage: [],
      message: ''
    };
  },

  created() {
    this.resultMessage = greetings.resultMessage;
    for (let i = 0; i < this.resultMessage.length; i++) {
      if (this.scoreRatio <= this.resultMessage[i].factor) {
        this.message = this.resultMessage[i];
        break;
      }
    }

    let playerName = 'Guest';
    if (this.GET_MY_PROFILE) {
      if (this.GET_MY_PROFILE.firstName) {
        playerName = `${this.GET_MY_PROFILE.firstName} ${this.GET_MY_PROFILE.lastName}`;
      }
    }

    this.UPDATE_GAME_HISTORY({
      categoryId: this.category,
      categoryName: this.data.categoryName,
      subCategoryId: this.data.subCategoryId,
      subCategoryName: this.data.subCategoryName,
      score: this.score,
      totalItems: this.totalItems,
      rate: this.scoreRatio,
      date: new Date(),
      playerName
    });

    const playerOptions = {
      audioFile: '~/assets/tones/clapping.mp3',
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
  },

  computed: {
    scoreRatio() {
      return this.score / this.totalItems;
    },

    messageColor() {
      if (this.scoreRatio >= 0.75) {
        return 'green';
      } else if (this.scoreRatio >= 0.5) {
        return 'orange';
      } else {
        return 'red';
      }
    }
  },

  methods: {
    ...mapMutations({
      UPDATE_GAME_HISTORY: 'UPDATE_GAME_HISTORY'
    }),

    goToHome() {
      player.pause();
      this.route('/home', {}, true);
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
