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
            text="MATHechnique"
            textWrap="true"
            class="rammeto-one title"
          />
          <Label
            text.decode="&#xf0c9;"
            textWrap="true"
            style="text-align: right; font-size: 40; color: gray;"
            class="fas"
          />
        </GridLayout>
        <StackLayout
          orientation="horizontal"
          style="background-color: white; border-radius: 5;"
        >
          <StackLayout style="padding-top: 10; padding-left: 11;">
            <Label
              text.decode="&#xf002;"
              class="fas"
              textWrap="true"
              style="font-size: 30;"
            />
          </StackLayout>
          <TextField
            v-model="search"
            hint="Search"
            style="padding: 10; font-weight: bold; color: gray; height: 50; border-bottom-width: 0; font-size: 20px;"
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
            <StackLayout
              style="border-radius: 10; padding: 10;"
              :style="{ backgroundColor: data.backgroundColor }"
            >
              <Image
                v-if="data.icon"
                :src="`~/data/images/${data.icon}`"
                style="text-align: center; height: 90;"
              />
              <Image
                v-else
                :src="`~/assets/images/icon.png`"
                style="text-align: center; height: 90;"
              />
              <Label
                :text="data.categoryName"
                textWrap="true"
                style="text-align: center; font-size: 25;"
                class="bangers-font"
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
