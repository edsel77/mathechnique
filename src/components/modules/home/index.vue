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
            <StackLayout style="border-radius: 10; padding: 10;" :style="{ backgroundColor: data.backgroundColor }">
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
              <Label :text="data.categoryName" textWrap="true" style="text-align: center; font-size: 25;" class="bangers-font" />
            </StackLayout>
          </StackLayout>
        </WrapLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'Home',

  data() {
    return {
      search: '',
      categoryList: [
        {
          categoryName: 'Integers',
          icon: 'integers.png',
          textColor: 'black',
          backgroundColor: 'yellow',
          subCategoryList: [
            {
              subCategoryName: 'Properties of Integers',
              textColor: 'black',
              backgroundColor: 'yellow',
              topicTextColor: 'black',
              topicBackgroundColor: '#12cdd4'
            },
            {
              subCategoryName: 'Operations of Integers',
              textColor: 'black',
              backgroundColor: 'yellow',
              topicTextColor: 'black',
              topicBackgroundColor: '#12cdd4'
            },
            {
              subCategoryName: 'Types of Integers',
              textColor: 'black',
              backgroundColor: 'yellow',
              topicTextColor: 'black',
              topicBackgroundColor: '#12cdd4'
            },
            {
              subCategoryName: 'Rules of Integers',
              textColor: 'black',
              backgroundColor: 'yellow',
              topicTextColor: 'black',
              topicBackgroundColor: '#12cdd4'
            }
          ]
        },
        {
          categoryName: 'Probability',
          icon: 'probability.png',
          textColor: 'black',
          backgroundColor: 'orange',
          subCategoryList: [
            {
              subCategoryName: 'Conditional Probability',
              textColor: 'black',
              backgroundColor: 'orange',
            },
            {
              subCategoryName: 'Binomial Theorem',
              textColor: 'black',
              backgroundColor: 'orange',
            },
            {
              subCategoryName: 'Permutations and Combinations',
              textColor: 'black',
              backgroundColor: 'orange',
            }
          ]
        },
        {
          categoryName: 'Calculus',
          icon: 'calculus.png',
          textColor: 'white',
          backgroundColor: 'pink',
        },
        {
          categoryName: 'Geometry',
          icon: '',
          textColor: 'white',
          backgroundColor: '#12cdd4',
        }
      ]
    };
  },

  created() {},

  methods: {
    goToSubcategory(data) {
      this.route('/subcategory', {
        data
      });
    },
  }
};
</script>

<style scoped>

</style>
