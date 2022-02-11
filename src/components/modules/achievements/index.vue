<template>
  <Page
    :actionBarHidden="true"
    class="page standard-padding"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout style="height: 7%" orientation="horizontal" @tap="back">
        <Label
          text.decode="&#xf104;"
          textWrap="true"
          style="font-size: 30; color: gray; margin-right: 10; margin-top: 1;"
          class="fas"
        />
        <Label
          text="Achievements"
          textWrap="true"
          class="fredoka-one subtitle"
        />
      </StackLayout>

      <ScrollView style="height: 93%">
        <StackLayout>
          <StackLayout
            v-for="(item, i) in achievements"
            :key="i"
            style="margin-bottom: 15;"
            @tap="openTopScores(item)"
          >
            <GridLayout rows="auto" columns="3*,*">
              <StackLayout row="0" col="0">
                <Label
                  :text="item.topScore.playerName"
                  textWrap="true"
                  style="font-size: 25px; font-weight: bold; color: black;"
                  class="fredoka-one"
                />
                <StackLayout orientation="horizontal">
                  <Label
                    :text="`${item.topScore.subCategoryName}`"
                    textWrap="true"
                    style="font-size: 14px; color: black; font-style: italic;"
                  />
                </StackLayout>
                <Label
                  :text="getDate(item.topScore.date)"
                  textWrap="true"
                  style="font-size: 12px; color: gray; font-style: italic;"
                />
              </StackLayout>
              <StackLayout row="0" col="1">
                <Label
                  :text="`${(item.topScore.rate * 100).toFixed(0)}%`"
                  textWrap="true"
                  style="font-size: 20px; color: black; text-align: right; font-weight: bold;"
                />
                <Label
                  :text="`${item.topScore.score}/${item.topScore.totalItems}`"
                  textWrap="true"
                  style="font-size: 12px; color: gray; text-align: right; font-style: italic;"
                />
              </StackLayout>
            </GridLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
import _ from 'lodash';
import moment from 'moment';
import TopScores from './top-scores';
export default {
  name: 'Achievements',

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      achievements: []
    };
  },

  created() {
    this.processAchievements();
  },

  computed: {
    ...mapGetters({
      GET_GAME_HISTORY: 'GET_GAME_HISTORY'
    })
  },

  methods: {
    processAchievements() {
      let subCategoryIds = _.uniq(
        _.map(this.GET_GAME_HISTORY, 'subCategoryId')
      );
      for (let i = 0; i < subCategoryIds.length; i++) {
        let filter = _.filter(this.GET_GAME_HISTORY, (data) => {
          return data.subCategoryId === subCategoryIds[i];
        });
        for (let j = 0; j < filter.length; j++) {
          filter[j].timeStamp = parseInt(moment(filter[j].date).format('X'));
        }
        let gameHistory = _.orderBy(
          filter,
          ['rate', 'timeStamp'],
          ['desc', 'desc']
        ).slice(0, 10);
        this.achievements.push({
          subCategoryId: subCategoryIds[i],
          gameHistory: gameHistory,
          topScore: _.maxBy(gameHistory, (data) => {
            return data.rate;
          })
        });
      }
    },

    getDate(date) {
      return moment(date).format('MMM D, YYYY H:mm a');
    },

    openTopScores(item) {
      this.$showModal(TopScores, {
        fullscreen: true,
        props: {
          data: item.gameHistory
        }
      });
    }
  }
};
</script>

<style scoped></style>
