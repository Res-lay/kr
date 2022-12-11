<template>
  <div style="background: #f5ece3;">
    <mobile-nav v-if="mobileView" class="m_nav"></mobile-nav>
    <section class="main" :class="{ open: ShawNav }">
      <navbar-vue :title="title" v-if="!mobileView" style="border-bottom: 1px solid #55555555"></navbar-vue>
      <mobileNavBarVue
        :title="title"
        :ShawNav="ShawNav"
        v-if="mobileView"
        @makeShow="makeShow"
      ></mobileNavBarVue>
      <item-present :name="$route.params.id"/>
      
    </section>
    <my-footer-vue style="position:relative;"/>
  </div>
</template>

<script>
import MobileNav from "@/components/UI/MobileNav.vue";
import mobileNavBarVue from "@/components/UI/mobileNavBar.vue";
import ItemPresent from "@/components/ItemPresent.vue";
import MyFooterVue from "@/components/MyFooter.vue";
import NavbarVue from "@/components/UI/Navbar.vue";
export default {
  components: {
    ItemPresent,
    MobileNav,
    MyFooterVue,
    NavbarVue,
    mobileNavBarVue,
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
    window.scrollTo(top);
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-image: url(@/images/image1.png);
  background-size: cover;
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
  background: #f5ece3;
}
.m_nav {
  position: absolute;
  top: 3rem;
  left:1.5rem;
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