<template>
  <Page class="page bg-dark" :actionBarHidden="true">
    <ScrollView :scrollBarIndicatorVisible="false">
      <StackLayout>
        <GridLayout
          columns="80*,20*"
          style="margin-top: 20; margin-bottom: 15;"
        >
          <Label
            col="1"
            horizontalAlignment="right"
            text.decode="&#xf00d;"
            class="fas"
            style="margin-right: 20; color: black;"
            fontSize="30"
            @tap="returnPage"
          />
        </GridLayout>

        <StackLayout v-for="(menu, i) in menuList" :key="i">
          <GridLayout
            style="padding: 20; background-color: #12cdd4; margin: 10; border-radius: 15;"
            @tap="tapMenu(menu)"
            verticalAlignment="center"
          >
            <Label
              :text="menu.text"
              horizontalAlignment="center"
              class="menu-text fredoka-one"
            />
          </GridLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import * as application from '@nativescript/core/application';
export default {
  name: 'Menu',

  data() {
    return {
      menuList: [
        {
          text: 'Home',
          route: '/home'
        },
        {
          text: 'My Profile',
          route: '/my-profile'
        },
        {
          text: 'Achievements',
          route: '/achievements'
        },
        {
          text: 'About Us',
          route: '/about-us'
        },
        {
          text: 'Quit',
          route: '/logout'
        }
      ]
    };
  },

  methods: {
    tapMenu(menu) {
      if (menu.route === '/logout') {
        this.quitApp();
      } else {
        this.route(menu.route);
      }
    },

    quitApp() {
      if (application.android) {
        application.android.foregroundActivity.finish();
      }
    },

    returnPage() {
      this.$navigator.back();
    }
  }
};
</script>

<style scoped>
.menu-text {
  font-size: 20px;
  color: black;
}
</style>
