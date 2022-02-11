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
        <Label text="About Us" textWrap="true" class="fredoka-one subtitle" />
      </StackLayout>

      <ScrollView style="height: 93%">
        <StackLayout style="margin-top: 10;">
          <Label
            v-for="(item, i) in aboutUs.description"
            :key="i"
            :text="item"
            textWrap="true"
            style="font-size: 20px; color: white; margin-bottom: 15;"
          />
          <Label
            text="Sincerely,"
            textWrap="true"
            style="font-size: 20px; color: white; margin-bottom: 15; color: white;"
          />
          <StackLayout
            v-for="(item, j) in aboutUs.researchers"
            :key="j"
            style="margin-bottom: 10;"
          >
            <Label
              :text="item.name"
              textWrap="true"
              style="font-weight: bold; font-size: 20; color: white;"
            />
            <Label
              :text="item.email"
              textWrap="true"
              style="font-size: 20; color: white;"
            />
          </StackLayout>
          <Label
            :text="`Version ${$build_version}`"
            textWrap="true"
            style="margin-top: 30px; font-size: 18; color: white;"
          />
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
import aboutUs from '~/data/aboutUs.json';
export default {
  name: 'AboutUs',

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      aboutUs
    };
  },

  created() {},

  computed: {},

  methods: {
    ...mapMutations({})
  }
};
</script>

<style scoped></style>
