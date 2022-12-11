<template>
  <div class="wrapper">
    <about-card-vue
      class="card"
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
  </div>
  <div class="wrapper_btm">
    <span class="text_btm"
      >The brand seeks to build respect among the audience for its products, so
      that the presence of the company's products is a sign of prestige, since
      the focus of the business is focused on exclusive sales, but not on the
      mass market. The brand seeks to build respect among the audience for its
      products, so that the presence of the company's products is a sign of
      prestige, since the focus of the business is focused on exclusive sales,
      but not on the mass market.</span
    >
    <img style='margin-top: 50px;' src="@/images/about1.png" alt="me again" />
  </div>
</template>

<script>
import AboutCardVue from "@/components/UI/AboutCard.vue";
export default {
  components: {
    AboutCardVue,
  },
  data() {
    return {
      cards: [
        { text: "600+", text1: "Man on the team" },
        { text: "1.6 m", text1: "Followers at social network" },
        { text: "35", text1: "Offline shops" },
        { text: "64", text1: "Products of own production" },
        { text: "2x", text1: "Revenue growth every year" },
        { text: "3+", text1: "Location at the world" },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  max-width: 810px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  justify-content: space-around;
  flex-wrap: wrap;
}
.text_btm{
    margin-top: 30px;
    font-size:20px;
    color:#555555;
    line-height: 180%;
}
.wrapper_btm {
  position: relative;
  max-width: 810px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding-bottom: 100px;
}
.card {
  margin-top: 50px;
}
@media(max-width: 830px){
  .wrapper_btm{
    padding:0 30px 0 30px;
  }
}
</style>