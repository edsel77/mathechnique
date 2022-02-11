<template>
  <Page
    :actionBarHidden="true"
    class="page standard-padding"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout>
        <GridLayout style="height: 10%">
          <Label :text="title" textWrap="true" class="rammeto-one title" />
          <Label
            text.decode="&#xf0c9;"
            textWrap="true"
            style="text-align: right; font-size: 40; color: black;"
            class="fas"
            @tap="route('/menu')"
          />
        </GridLayout>
        <StackLayout
          orientation="horizontal"
          style="background-color: white; border-radius: 10;"
        >
          <StackLayout style="padding-top: 15; padding-left: 11;">
            <Label
              text.decode="&#xf002;"
              class="fas"
              textWrap="true"
              style="font-size: 20; margin-top: 3;"
            />
          </StackLayout>
          <TextField
            v-model="search"
            hint="Search"
            style="padding: 10; font-weight: bold; color: gray; height: 60; border-bottom-width: 1; border-bottom-color: transparent; font-size: 20px; width: 100%;"
          />
        </StackLayout>
      </StackLayout>

      <ScrollView style="height: 90%">
        <WrapLayout style="margin-top: 20">
          <StackLayout
            style="width: 50%; padding: 10;"
            v-for="(data, i) in categoryList"
            :key="i"
            @tap="goToSubcategory(data)"
          >
            <StackLayout>
              <Image
                v-if="data.icon"
                :src="`~/data/images/app-icons/${data.icon}`"
                style="text-align: center; border-radius: 10;"
              />
              <Image
                v-else
                :src="`~/assets/images/mathechnique-logo-500x500px.png`"
                style="text-align: center; border-radius: 10;"
              />
            </StackLayout>
          </StackLayout>
        </WrapLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
import CategoryList from '~/data/categoryList.json';
import _ from 'lodash';
export default {
  name: 'Home',

  data() {
    return {
      search: '',
      CategoryList,
      categoryList: ''
    };
  },

  created() {
    this.categoryList = _.cloneDeep(CategoryList);
  },

  computed: {
    ...mapGetters({
      GET_MY_PROFILE: 'GET_MY_PROFILE'
    }),

    title() {
      let title = 'MATHechnique';
      if (this.GET_MY_PROFILE) {
        if (this.GET_MY_PROFILE.firstName) {
          title = `Hi ${this.GET_MY_PROFILE.firstName},`;
        }
      }
      return title;
    }
  },

  watch: {
    search(val) {
      if (val.length > 0) {
        this.categoryList = _.filter(this.CategoryList, (res) => {
          return res.categoryName.toLowerCase().includes(val.toLowerCase());
        });
      } else {
        this.categoryList = _.cloneDeep(this.CategoryList);
      }
    }
  },

  methods: {
    goToSubcategory(data) {
      this.route('/subcategory', {
        data
      });
    }
  }
};
</script>

<style scoped></style>
