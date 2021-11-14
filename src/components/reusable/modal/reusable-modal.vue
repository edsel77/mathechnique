<template>
  <DockLayout
    stretchLastChild="false"
    style="background-color: #FFF; padding: 15;"
  >
    <StackLayout dock="top">
      <Label
        class="title"
        fontSize="18"
        :text="title"
        textWrap="true"
        horizontalAlignment="center"
      />
      <Label
        class="normal-text"
        fontSize="17"
        :text="message"
        textWrap="true"
        horizontalAlignment="center"
        style="margin-top: 10;"
      />
    </StackLayout>
    <Button
      :text="buttonText"
      @tap="close"
      fontSize="17"
      dock="bottom"
      style="width: 100%; margin-top: 15;"
      :class="buttonClass"
    />
  </DockLayout>
</template>

<script>
export default {
  props: ['title', 'message', 'buttonText', 'buttonClass', 'timeout'],

  mounted() {
    if (this.timeout) {
      setTimeout(() => {
        this.close();
      }, 3000);
    }
  },

  methods: {
    close() {
      this.$modal.close();
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 19;
  font-weight: bold;
}
</style>