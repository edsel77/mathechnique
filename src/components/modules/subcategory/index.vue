<template>
  <Page
    :actionBarHidden="true"
    class="page standard-padding"
    :androidStatusBarBackground="themeColor"
  >
    <StackLayout>
      <StackLayout orientation="horizontal" @tap="back" style="margin-bottom: 15">
        <Label
          text.decode="&#xf104;"
          textWrap="true"
          style="font-size: 30; color: gray; margin-right: 10; margin-top: 1;"
          class="fas"
        />
        <Label
          :text="data.categoryName"
          textWrap="true"
          class="fredoka-one subtitle"
        />
      </StackLayout>

      <ScrollView style="height: 93%">
        <StackLayout style="margin-top: 10">
          <StackLayout
            style="padding-top: 20; padding-bottom;"
            v-for="(data, i) in data.subCategoryList"
            :key="i"
            @tap="goToTopic(data)"
          >
            <StackLayout
              style="border-radius: 10; padding: 20;"
              :style="{ backgroundColor: themeColor }"
            >
              <Label
                :text="data.subCategoryName"
                textWrap="true"
                style="text-align: center; font-size: 20; color: black;"
                class="fredoka-one"
              />
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'Subcategory',

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    goToTopic(data) {
      this.route('/topic', {
        data,
        categoryName: this.data.categoryName,
        categoryId: this.data.categoryId,
      });
    }
  }
};
</script>

<style scoped>

</style>
