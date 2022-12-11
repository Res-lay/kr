<template>
  <div class="app">
    <mobile-nav v-if="mobileView" class="m_nav"></mobile-nav>
    <div class="main" :class="{ open: ShawNav }">
      <navbar-vue
        :title="title"
        style="border-bottom: 1px solid #55555555"
        v-if="!mobileView"
      ></navbar-vue>
      <mobileNavBarVue
        :title="title"
        :ShawNav="ShawNav"
        v-if="mobileView"
        @makeShow="makeShow"
      ></mobileNavBarVue>
      <main-about></main-about>
    </div>
    <next-about></next-about>
    <my-footer-vue />
  </div>
</template>

<script>
import MainAbout from "@/components/UI/MainAbout.vue";
import NavbarVue from "@/components/UI/Navbar.vue";
import MobileNav from "@/components/UI/MobileNav.vue";
import mobileNavBarVue from "@/components/UI/mobileNavBar.vue";
import MyFooterVue from "@/components/MyFooter.vue";
import NextAbout from "@/components/UI/NextAbout.vue";
export default {
  components: {
    NextAbout,
    MainAbout,
    NavbarVue,
    MobileNav,
    mobileNavBarVue,
    MyFooterVue,
  },
  data() {
    return {
      mobileView: false,
      ShawNav: false,
      title: [
        { color: "color: #555555", img: require("@/images/profile_black.png") },
        { color: "color: #555555", img: require("@/images/shop_black.png") },
        { color: "color: #555555", img: require("@/images/search_black.png") },
        { color: "color: #555555", img: require("@/images/menu_black.png") },
      ],
      
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 900;
    },
    makeShow() {
      this.ShawNav = !this.ShawNav;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style scoped>
.app {
  background: #f5ece3;
}
.main {
  border-radius: 10px;
  overflow: hidden;
  background: #f5ece3;
  position: relative;
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}
.m_nav {
  position: absolute;
  top: 3rem;
  left:1.5rem;
  border-right: 1px solid #55555555;
}
.open {
  transform: translateX(160px);
}
@media (min-width: 901px) {
  .open {
    transform: translateX(0);
  }
}
</style>