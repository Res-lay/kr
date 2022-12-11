<template>
  <div
    style="
      background: #f5ece3;
      overflow: hidden;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    "
  >
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

      <h1 class="intro">Our contacts</h1>
    </div>
    <contact-vue></contact-vue>
    <div id="map" class="map"></div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import NavbarVue from "@/components/UI/Navbar.vue";
import contactVue from "@/components/UI/contact.vue";
import MyFooter from "@/components/MyFooter.vue";
import MobileNav from "@/components/UI/MobileNav.vue";
import mobileNavBarVue from "@/components/UI/mobileNavBar.vue";

export default {
  components: {
    mobileNavBarVue,
    MobileNav,
    NavbarVue,
    contactVue,
    MyFooter,
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
    init() {
      var mymap = new ymaps.Map("map", {
        center: [55.67001443738299,37.48016925870328],
        zoom: 17,
        controls:[]
      });
      var mapdot = new ymaps.Placemark([55.67001443738299,37.48016925870328], null, {preset: "islands#blueCircleIcon"})
      mymap.geoObjects.add(mapdot);
    },

  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  mounted() {
    ymaps.ready(this.init);
  },
};
</script>

<style scoped>
.m_nav {
  position: absolute;
  top: 3rem;
  left: 1rem;
}
.map{
  display: flex;
  width: 1440px;
  height: 400px;
  margin-top:80px;
  margin-bottom: 80px;
  border:3px solid #555555; 
  border-radius: 3px;
}
.main {
  width: 100%;
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-image: url(@/images/image1.png);
  background-size: cover;
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
  background: #f5ece3;
}
.intro {
  color: #555555;
  text-align: center;
  font-size: 40px;
  margin-top: 100px;
  letter-spacing: 2px;
}


.open {
  transform: translateX(160px);
}
@media(max-width: 1440px){
  .map{
    width:1000px;
  }
}
@media(max-width: 1000px){
  .map{
    width:600px;
  }
}
@media (max-width: 900px) {
  .intro {
    padding-bottom: 150px;
  }
}
@media (min-width: 901px) {
  .open {
    transform: translateX(0);
  }
}
@media(max-width: 600px){
  .map{
    width:300px;
    height: 200px;
  }
}
</style>