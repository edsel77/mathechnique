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
            text="Top Scores"
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
            v-for="(item, i) in data"
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
  name: 'TopScores',

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  methods: {
    getDate(date) {
      return moment(date).format('MMM D, YYYY H:mm a');
    }
  }
};
</script>

<style scoped></style>
