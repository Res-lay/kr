<template>
  <div style="background: #c4b6a8; overflow-x: hidden;">
    <div class="content">
      <main-vue />
        <gallery-vue />
      <about-label-vue></about-label-vue>
      <my-footer-vue/>
    </div>
  </div>
</template>
  
  <script>
import MainVue from "@/components/Main.vue";
import AboutLabelVue from "@/components/UI/AboutLabel.vue";
import GalleryVue from "@/components/Gallery.vue";
import MyFooterVue from "@/components/MyFooter.vue";
export default {
  components: {
    AboutLabelVue,
    MainVue,
    GalleryVue,
    MyFooterVue,
  },
};
</script>
  
<style scoped>
.content {
  background: #f5ece3;
  padding: 10px;
}
</style>
  