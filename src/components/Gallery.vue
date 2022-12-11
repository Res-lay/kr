<template>
  <div class="gallery">
    <type-intro-vue :about="images[0]"></type-intro-vue>
    <gallery-item-vue
      v-show="!mobileView"
      v-for="image in images1"
      :key="image.img"
      :image="image"
    ></gallery-item-vue>
    <gallery-item-vue
      v-show="!mobileView"
      v-for="image in images2"
      :key="image.img"
      :image="image"
    ></gallery-item-vue>
    <type-intro-vue :about="images[1]"></type-intro-vue>
    <type-intro-vue :about="images[2]"></type-intro-vue>
    <gallery-item-vue
      v-show="!mobileView"
      v-for="image in images3"
      :key="image.img"
      :image="image"
    ></gallery-item-vue>
  </div>
</template>

<script>
import TypeIntroVue from "./UI/TypeIntro.vue";
import GalleryItemVue from "./UI/GalleryItem.vue";
export default {
  components: {
    GalleryItemVue,
    TypeIntroVue,
  },
  data() {
    return {
      mobileView: false,
      images1: [
        {
          img: require("@/images/items/item1.jpg"),
          title: "CHANEL",
          price: "50$",
          imgstyle:"width: 310px; height: 430px;",
          style: "max-width: 310px; max-height: 430px;",
        },
        {
          img: require("@/images/items/item2.jpg"),
          title: "VERSACE",
          price: "50$",
          imgstyle:"width: 310px; height: 430px;",
          style: "max-width: 310px; max-height: 430px;",
        },
        {
          img: require("@/images/items/item3.jpg"),
          title: "GUCCI",
          price: "50$",
          imgstyle:"width: 310px; height: 430px;",
          style: "max-width: 310px; max-height: 430px;",
        },
      ],
      images2: [
        {
          img: require("@/images/items/item4.jpg"),
          title: "CHANEL",
          price: "50$",
          imgstyle:"width: 310px; height: 430px;",
          style: "max-width: 310px; max-height: 430px;",
        },
        {
          img: require("@/images/items/item8.jpg"),
          title: "CARON",
          price: "50$",
          imgstyle:"width: 310px; height: 430px;",
          style: "max-width: 310px; max-height: 430px;",
        },
        {
          img: require("@/images/items/item9.jpg"),
          title: "VALENTINO",
          price: "50$",
          style: "max-width: 310px; max-height: 430px;",
          imgstyle:"width: 310px; height: 430px;",
        },
      ],
      images3: [
        {
          img: require("@/images/items/item10.jpg"),
          title: "YSL",
          price: "50$",
          style: "max-width: 310px; max-height: 430px;",
          imgstyle:"width: 310px; height: 430px;",
        },
        {
          img: require("@/images/items/item11.jpg"),
          title: "DIOR",
          price: "50$",
          style: "max-width: 310px; max-height: 430px;",
          imgstyle:"width: 310px; height: 430px;",
        },
        {
          img: require("@/images/items/item12.jpg"),
          title: "RALPH LAUREN",
          price: "50$",
          style: "max-width: 310px; max-height: 430px;",
          imgstyle:"width: 310px; height: 430px;",
        },
      ],
      images: [
        { img: require("@/images/test1.png"), title: "FOR HIM", link: 'for_him' },
        { img: require("@/images/items/item6.jpg"), title: "FOR HER", link: 'for_her' },
        { img: require("@/images/items/item7.png"), title: "UNISEX" , link: 'unisex'},
      ],
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 900;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  padding:50px 0 50px 0;
  flex-wrap: wrap;
  gap: 20px;
}
</style>