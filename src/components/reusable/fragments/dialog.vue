<template>
  <Page>
    <StackLayout>
      <GridLayout rows="100 100" columns="* 2*">
          <Label
            row="0"
            col="0"
            text="Username:"
            textWrap="true" />
          <TextField
            row="0"
            col="1"
            hint="username"
            :text="username" />
          <Label
            row="1"
            col="0"
            text="Password:"
            textWrap="true" />
          <TextField
            row="1"
            col="1"
            hint="password"
            secure="true"
            :text="password" />
      </GridLayout>
      <Button
        text="Sing In"
        :tap="onLoginButtonTap" />
  </StackLayout>
</Page>
</template>
<script>
export default {
  name: 'Dialog',
  data () {
    return {
      xmlns: 'http://www.nativescript.org/tns.xsd',
      onShownModally: true,
      username: 'eayala',
      password: 1234
    }
  },

  methods: {
    onLoginButtonTap () {

    }
  }
}
</script>