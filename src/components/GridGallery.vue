<template>
  <div class="gallery">
    <gallery-item-vue
      v-for="image in images2"
      :key="image.img"
      :image="image"
    ></gallery-item-vue>
    <gallery-item-vue class="big_elem" v-if="!mobileView"
      :image="images[0]"
    ></gallery-item-vue>
    <gallery-item-vue
      v-for="image in images2"
      :key="image.img"
      :image="image"
    ></gallery-item-vue>
    <gallery-item-vue class="big_elem1" v-if="!mobileView"
      :image="images[1]"
    ></gallery-item-vue>
    <gallery-item-vue
      v-for="image in images2"
      :key="image.img"
      :image="image"
    ></gallery-item-vue>
    
  </div>
</template>

<script>
import GalleryItemVue from "./UI/GalleryItem.vue";
export default {
  components: {
    GalleryItemVue,
  },
  data() {
    return {
      mobileView: true,
      images2: [
        {
          img: require("@/images/items/item4.jpg"),
          title: "CHANEL",
          price: "50$",
          style: "max-width: 310px; max-height: 430px;",
          imgstyle:"width: 310px; height: 430px;",
        },
        {
          img: require("@/images/items/item8.jpg"),
          title: "CARON",
          price: "50$",
          style: "max-width: 310px; max-height: 430px;",
          imgstyle:"width: 310px; height: 430px;",
        },
        {
          img: require("@/images/items/item9.jpg"),
          title: "VALENTINO",
          price: "50$",
          style: "max-width: 310px; max-height: 430px;",
          imgstyle:"width: 310px; height: 430px;",
        },
        {
          img: require("@/images/items/item3.jpg"),
          title: "GUCCI",
          price: "50$",
          style: "max-width: 310px; max-height: 430px;",
          imgstyle:"width: 310px; height: 430px;",
        },
      ],
      images: [
        {
          img: require("@/images/slide1.jpg"),
          title: "MISS DIOR",
          price: "80 $",
          style: "max-width: 650px; max-height: 430px;",
        },
        {
          img: require("@/images/slide2.jpg"),
          title: "CREED",
          price: "80 $",
          style: "max-width: 650px; max-height: 430px;",
        },
      ],
    };
  },
  methods:{
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
  display: grid;
  /* padding-left: 80px;
  padding-top: 50px; */
  padding: 50px 0 50px 0px;
  justify-content: center;
  grid-template-columns: repeat(4, 310px);
  grid-gap: 20px;

}
.big_elem{
  grid-column-start:1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-start: 2;
}
.big_elem1{
  grid-column-start:3;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-start: 3;
}
@media (max-width: 900px) {
  .gallery {
    grid-template-columns: repeat(1, 320px);
    padding-left:10px ;
  }
  .big_elem1{
  grid-column-start:3;
  grid-column-end: 4;
}
.big_elem{
  grid-column-start:1;
  grid-column-end: 2;
} 

}
</style>