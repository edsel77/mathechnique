<template>
  <Page class="page bg-dark" :actionBarHidden="true">
    <ScrollView :scrollBarIndicatorVisible="false">
      <StackLayout>
        <GridLayout
          columns="80*,20*"
          style="margin-top: 20; margin-bottom: 15;"
        >
          <StackLayout horizontalAlignment="left" col="0">
            <Label
              v-if="loginInfo.username"
              :text="loginInfo.username"
              class="text-white"
              style="margin-left: 20;"
              fontSize="19"
              textWrap="true"
              fontWeight="bold"
            />
            <Label
              v-if="userInfo.CustomerName"
              :text="userInfo.CustomerName"
              class="text-white"
              style="margin-left: 20;"
              fontSize="14"
              textWrap="true"
            />
            <Label
              v-if="userInfo.CompanyName"
              :text="userInfo.CompanyName"
              class="text-white"
              style="margin-left: 20;"
              fontSize="14"
              textWrap="true"
            />
          </StackLayout>
          <Label
            col="1"
            horizontalAlignment="right"
            text.decode="&#xf00d;"
            class="fas text-white"
            style="margin-right: 20;"
            fontSize="30"
            @tap="globalHomeRoute"
          />
        </GridLayout>

        <GridLayout rows="auto" cols="*">
          <Label
            text="Dark Theme"
            horizontalAlignment="left"
            fontSize="19"
            class="text-white"
            style="margin-left: 20;"
          />
          <Switch
            v-model="isDarkTheme"
            horizontalAlignment="right"
            style="margin-top: 0"
            @checkedChange="changeTheme"
            @tap="tapTheme"
          />
        </GridLayout>

        <StackLayout v-for="(menu, i) in menuList" :key="i">
          <GridLayout
            rows="auto"
            cols="*"
            style="padding: 10; border-bottom-width: 0.5; border-color: #243045;"
            @tap="tapMenu(menu)"
            :backgroundColor="menu.highlight ? '#243045' : ''"
          >
            <Label
              horizontalAlignment="left"
              :text="menu.icon"
              class="fas menu-icon"
              fontSize="30"
            />
            <Label
              :text="menu.text"
              horizontalAlignment="left"
              fontSize="19"
              fontWeight="bold"
              class="text-white menu-text"
              style="margin-left: 55;"
            />
            <Label
              v-show="menu.group && !menu.active"
              horizontalAlignment="right"
              text.decode="&#xf054;"
              class="fas text-white"
              fontSize="20"
              style="margin-top: 11;"
            />
            <Label
              v-show="menu.group && menu.active"
              horizontalAlignment="right"
              text.decode="&#xf078;"
              class="fas text-white"
              fontSize="20"
              style="margin-top: 11;"
            />
          </GridLayout>
          <GridLayout
            v-show="menu.active"
            rows="auto"
            cols="*"
            style="padding: 10; border-bottom-width: 0.5; border-color: #243045;"
            v-for="(item, i) in menu.submenu"
            :key="i"
            @tap="route(item.route)"
            :backgroundColor="item.highlight ? '#243045' : ''"
          >
            <Label
              horizontalAlignment="left"
              text.decode="&#xf111;"
              class="far menu-icon"
              fontSize="12"
              style="margin-top: 17; margin-left: 25;"
            />
            <Label
              :text="item.text"
              horizontalAlignment="left"
              fontSize="19"
              fontWeight="bold"
              class="text-white menu-text"
              style="margin-left: 55;"
            />
          </GridLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { mapMutations } from 'vuex';
import 'nativescript-theme-core/css/core.css';
import 'nativescript-theme-core/index';
import Theme from 'nativescript-theme-core';
export default {
  name: 'Menu',

  props: ['previousRoute'],

  data() {
    return {
      menuList: [
        {
          icon: String.fromCharCode(0xe066),
          text: 'Home',
          route: '/home-billing',
          group: false,
          active: false,
          submenu: [],
          highlight: false
        },
        {
          icon: String.fromCharCode(0xf505),
          text: 'Profile',
          route: '/profile',
          group: false,
          active: false,
          submenu: [],
          highlight: false
        },
        {
          icon: String.fromCharCode(0xf2bd),
          text: 'Account',
          route: '',
          group: true,
          active: false,
          submenu: [
            {
              text: 'Products',
              route: '/product-plans',
              highlight: false
            },
            {
              text: 'Invoices',
              route: '/invoice-list',
              highlight: false
            },
            {
              text: 'Transactions',
              route: '/transaction-list',
              highlight: false
            },
            {
              text: 'Edit Credit Card',
              route: '/edit-credit-card',
              highlight: false
            },
            {
              text: 'Device Management',
              route: '/device-management',
              highlight: false
            }
          ],
          highlight: false
        },
        {
          icon: String.fromCharCode(0xf2b9),
          text: 'Address Book',
          route: '/address-book',
          group: false,
          active: false,
          submenu: [],
          highlight: false
        },
        {
          icon: String.fromCharCode(0xf0e0),
          text: 'Messages',
          route: '/messages',
          group: false,
          active: false,
          submenu: [],
          highlight: false
        },
        {
          icon: String.fromCharCode(0xf1fa),
          text: 'New Message',
          route: '/new-message',
          group: false,
          active: false,
          submenu: [],
          highlight: false
        },
        {
          icon: String.fromCharCode(0xf011),
          text: 'Logout',
          route: '/logout',
          group: false,
          active: false,
          submenu: [],
          highlight: false
        }
      ],
      isDarkTheme: false,
      themeUpdate: false
    };
  },

  mounted() {
    if (this.isIOT) {
      this.menuList.shift();
      this.menuList.unshift({
        icon: String.fromCharCode(0xe066),
        text: 'Dashboard',
        route: '/home',
        group: false,
        active: false,
        submenu: [],
        highlight: false
      });
    }
  },

  created() {
    this.setActiveTab();
    if (this.darkTheme !== undefined) {
      this.isDarkTheme = this.darkTheme;
    }
  },

  methods: {
    ...mapMutations({
      ON_LOGOUT: 'ON_LOGOUT',
      UPDATE_THEME: 'UPDATE_THEME'
    }),

    tapMenu(menu) {
      if (menu.route === '/logout') {
        this.logoutUser();
      } else if (menu.group) {
        menu.active = !menu.active;
      } else {
        this.route(menu.route);
      }
    },

    logoutUser() {
      this.ON_LOGOUT();
      this.$navigator.navigate('/login', { clearHistory: true });
    },

    setActiveTab() {
      for (let i = 0; i < this.menuList.length; i++) {
        if (this.menuList[i].route === this.previousRoute) {
          this.menuList[i].highlight = true;
        }

        if (this.menuList[i].group === true) {
          for (let j = 0; j < this.menuList[i].submenu.length; j++) {
            if (this.menuList[i].submenu[j].route === this.previousRoute) {
              this.menuList[i].submenu[j].highlight = true;
              this.menuList[i].active = true;
            }
          }
        }
      }
    },

    changeTheme(event) {
      this.UPDATE_THEME(event.value);
      Theme.toggleMode(event.value);
    },

    tapTheme() {
      this.themeUpdate = true;
    },

    globalHomeRoute() {
      if (this.themeUpdate) {
        if (this.isIOT) {
          this.route('/home')
        } else {
          this.route('/home-billing')
        }
      } else {
        this.$navigator.back()
      }
    }
  }
};
</script>

<style scoped>
.menu-icon {
  color: #ffc82e;
  margin-top: 10;
  margin-left: 10;
}

.menu-text {
  margin-left: 10;
  margin-top: 11;
}
</style>
