<template>
  <div style="background: #c4b6a8; padding: 10px">
    <div class="main">
      <shop-main-vue :content="content"></shop-main-vue>
    </div>
    <div class="main" style="margin-top: 20px">
      <grid-gallery></grid-gallery>
    </div>
    <div class="main" style="margin-top: 20px">
      <my-footer-vue />
    </div>
  </div>
</template>
  
  <script>
import MyFooterVue from "@/components/MyFooter.vue";
import ShopMainVue from "@/components/ShopMain.vue";
import GridGallery from "@/components/GridGallery.vue";
export default {
  data() {
    return {
      content: { title: "Unisex" },
    };
  },
  components: {
    ShopMainVue,
    GridGallery,
    MyFooterVue,
  },
  created(){
    window.scrollTo(top);
  }
};
</script>
  
  <style scoped>
.main {
  border-radius: 10px;
  overflow: hidden;
  background: #f5ece3;
}
</style>