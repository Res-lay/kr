<template>
  <mobile-nav v-if="mobileView" class="m_nav"></mobile-nav>
  <section class="main" :class="{ open: ShawNav }">
    <navbar-vue :title="title"
        v-if="!mobileView"
    ></navbar-vue>
    <mobileNavBarVue :title="title"
        :ShawNav="ShawNav" 
        v-if="mobileView"
        @makeShow="makeShow"
    ></mobileNavBarVue>
  </section>
</template>

<script>
import NavbarVue from "@/components/UI/Navbar.vue";
import MobileNav from "@/components/UI/MobileNav.vue";
import mobileNavBarVue from "@/components/UI/mobileNavBar.vue";
export default {
  components: {
    MobileNav,
    NavbarVue,
    mobileNavBarVue,
  },
  data() {
    return {
      mobileView: false,
      ShawNav: false,
      title:[
      {color:'color: white', img:require('@/images/profile.png')},
      {color:'color: white', img:require('@/images/shop.png')},
      {color:'color: white', img:require('@/images/search.png')},
      {color:'color: white', img: require("@/images/menu.png") },
      ],
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 900;
    },
    makeShow(){
        this.ShawNav = !this.ShawNav;
    }
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  height: 900px;
  position: relative;
  background-image: url(@/images/image1.png);
  background-size: cover;
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}
.m_nav {
  position: absolute;
  top:3rem;
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