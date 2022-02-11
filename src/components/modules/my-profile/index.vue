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
        <Label text="My Profile" textWrap="true" class="fredoka-one subtitle" />
      </StackLayout>

      <ScrollView style="height: 83%">
        <StackLayout style="margin-top: 10;">
          <StackLayout
            style="background-color: white; border-radius: 15; padding: 10;"
          >
            <TextField
              v-model="firstName"
              hint="First Name"
              style="padding: 7; font-weight: bold; color: black; height: 50; border-bottom-width: 1; border-bottom-color: transparent; font-size: 17px; width: 100%;"
            />
          </StackLayout>
          <StackLayout
            style="background-color: white; border-radius: 15; padding: 10; margin-top: 15;"
          >
            <TextField
              v-model="middleName"
              hint="Middle Name"
              style="padding: 7; font-weight: bold; color: black; height: 50; border-bottom-width: 1; border-bottom-color: transparent; font-size: 17px; width: 100%;"
            />
          </StackLayout>
          <StackLayout
            style="background-color: white; border-radius: 15; padding: 7; margin-top: 15;"
          >
            <TextField
              v-model="lastName"
              hint="Last Name"
              style="padding: 7; font-weight: bold; color: black; height: 50; border-bottom-width: 1; border-bottom-color: transparent; font-size: 17px; width: 100%;"
            />
          </StackLayout>
        </StackLayout>
      </ScrollView>
      <StackLayout style="height: 10%">
        <Button
          text="Save Profile"
          @tap="saveProfile"
          style="border-radius: 10; background-color: yellow; font-weight: bold;"
          :opacity="!firstName || !lastName ? 0.6 : 1"
          class="fredoka-one"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'MyProfile',

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      firstName: '',
      middleName: '',
      lastName: ''
    };
  },

  created() {
    if (this.GET_MY_PROFILE) {
      if (this.GET_MY_PROFILE.firstName) {
        this.firstName = this.GET_MY_PROFILE.firstName;
      }
      if (this.GET_MY_PROFILE.middleName) {
        this.middleName = this.GET_MY_PROFILE.middleName;
      }
      if (this.GET_MY_PROFILE.lastName) {
        this.lastName = this.GET_MY_PROFILE.lastName;
      }
    }
  },

  methods: {
    ...mapMutations({
      UPDATE_MY_PROFILE: 'UPDATE_MY_PROFILE'
    }),

    saveProfile() {
      if (!this.firstName || !this.lastName) {
        return;
      }
      this.UPDATE_MY_PROFILE({
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName
      });
      this.route('/home', {}, true);
    }
  }
};
</script>

<style scoped></style>
