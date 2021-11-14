<template>
  <Page class="page bg-white" :actionBarHidden="true">
    <StackLayout orientation="horizontal" style="padding: 20;">
      <GridLayout rows="auto" columns="*" verticalAlignment="center">
        <StackLayout horizontalAlignment="center">
          <Label
            text.decode="&#xf57a;"
            color="orange"
            textWrap="true"
            class="far"
            fontSize="80"
            horizontalAlignment="center"
          />
          <Label
            text="No Connection"
            textWrap="true"
            horizontalAlignment="center"
            fontSize="24"
            fontWeight="bold"
            style="margin-top: 15;"
          />
          <Label
            text="Please turn on your internet connection and try again."
            textWrap="true"
            style="text-align: center;"
            fontSize="19"
          />
          <Label
            text="Go to home"
            textWrap="true"
            style="text-align: center; margin-top: 25;"
            fontSize="19"
            @tap="route('/home')"
          />
        </StackLayout>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  name: 'NoInternet',

  props: [],

  data() {
    return {};
  },

  created() {},

  methods: {}
};
</script>

<style scoped>
.color-item {
  height: 70;
  width: 20%;
  border-radius: 10;
  margin: 10;
}
</style>
