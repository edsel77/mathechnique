<template>
  <Page
    :actionBarHidden="true"
    class="page standard-padding"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout>
        <GridLayout style="height: 10%">
          <Label
            text="Game History"
            textWrap="true"
            class="rammeto-one title"
          />
          <Label
            text.decode="&#xf00d;"
            textWrap="true"
            style="text-align: right; font-size: 40; color: gray;"
            class="fas"
            @tap="$modal.close"
          />
        </GridLayout>
      </StackLayout>

      <ScrollView style="height: 90%">
        <StackLayout>
          <StackLayout
            v-for="(item, i) in gameHistory"
            :key="i"
            style="margin-bottom: 15;"
          >
            <GridLayout rows="auto" columns="3*,*">
              <StackLayout row="0" col="0">
                <Label
                  :text="item.playerName"
                  textWrap="true"
                  style="font-size: 25px; font-weight: bold; color: black;"
                  class="fredoka-one"
                />
                <StackLayout orientation="horizontal">
                  <Label
                    :text="item.subCategoryName"
                    textWrap="true"
                    style="font-size: 14px; color: black; font-style: italic;"
                  />
                </StackLayout>
                <Label
                  :text="getDate(item.date)"
                  textWrap="true"
                  style="font-size: 12px; color: gray; font-style: italic;"
                />
              </StackLayout>
              <StackLayout row="0" col="1">
                <Label
                  :text="`${(item.rate * 100).toFixed(0)}%`"
                  textWrap="true"
                  style="font-size: 20px; color: black; text-align: right; font-weight: bold;"
                />
                <Label
                  :text="`${item.score}/${item.totalItems}`"
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
import moment from 'moment';
import _ from 'lodash';
export default {
  name: 'GameHistory',

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      gameHistory: []
    };
  },

  created() {
    this.processGameHistory();
  },

  computed: {
    ...mapGetters({
      GET_GAME_HISTORY: 'GET_GAME_HISTORY'
    })
  },

  methods: {
    processGameHistory() {
      if (!this.GET_GAME_HISTORY) {
        return;
      }
      this.gameHistory = _.sortBy(
        _.filter(_.cloneDeep(this.GET_GAME_HISTORY), (data) => {
          return data.subCategoryId === this.data.subCategoryId;
        }),
        (data) => {
          return new Date(data.date);
        }
      ).reverse();
    },

    getDate(date) {
      return moment(date).format('MMM D, YYYY H:mm a');
    }
  }
};
</script>

<style scoped></style>
