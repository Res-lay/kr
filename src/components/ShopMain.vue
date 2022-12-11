<template>
  <mobile-nav v-if="mobileView" class="m_nav"></mobile-nav>
  <section class="main" :class="{ open: ShawNav }">
    <navbar-vue v-if="!mobileView" style="background: #f5ece3" :title="title" />
    <nav-panel v-if="!mobileView"></nav-panel>
    <mobileNavBarVue :title="title" 
        :ShawNav="ShawNav" 
        v-if="mobileView"
        @makeShow="makeShow"
    ></mobileNavBarVue>
    <div  class="title"><h1>{{content.title}}</h1></div>
    <div class="poster"><img src="@/images/poster1.png" alt="" /></div>
  </section>
</template>

<script>
import NavbarVue from "@/components/UI/Navbar.vue";
import MobileNav from "@/components/UI/MobileNav.vue";
import mobileNavBarVue from "@/components/UI/mobileNavBar.vue";
import NavPanel from "@/components/UI/NavPanel.vue";
export default {
  props:{
    content:{
      type:Object,
      required:true
    }
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
  components: {
    mobileNavBarVue,
    MobileNav,
    NavbarVue,
    NavPanel,
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
h1 {
  padding: 69px 0 38px 0;
  color: #555555;
  font-size: 48px;
  font-weight: normal;
}
.m_nav {
  position: absolute;
  top: 3rem;
  left:1.5rem;
}
.title {
  display: flex;
  justify-content: center;
}
.poster {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 30px;
}
.poster img {
  max-width: 1300px;
  max-height: 466px;
}
.main {
  width: 100%;
  overflow: hidden;
  /* border:1px solid black; */
  box-shadow: 1px 5px 5px 0 black;
  border-radius: 10px;
  background: #F5ECE3;
  position: relative;
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}
.open {
  transform: translateX(160px);
}
@media (min-width: 901px){
  .open{
    transform: translateX(0);
  }
  
}
</style>