<template>
  <div class="main">
    <h1 class="main_text">About Latyshev</h1>
    <span class="text1"
      >The brand seeks to build respect among the audience for its products, so
      that the presence of the company's products is a sign of prestige, since
      the focus of the business is focused on exclusive sales, but not on the
      mass market. The brand seeks to build respect among the audience for its
      products, so that the presence of the company's products is a sign of
      prestige, since the focus of the business is focused on exclusive sales,
      but not on the mass market.</span
    >
    <img style="margin-top:30px; padding:20px" src="@/images/about.png" alt="it's me" />
    <span class="text2"
      >The brand seeks to build respect among the audience for its products, so
      that the presence of the company's products is a sign of prestige, since
      the focus of the business is focused on exclusive sales, but not on the
      mass market.
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  max-width: 810px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
.main_text {
  color: #555555;
  font-size: 48px;
}
.text1 {
  margin-top: 30px;
  font-size: 20px;
  color: #555555;
  line-height: 180%;
}
.text2 {
  margin-top: 60px;
  font-size: 20px;
  color: #555555;
  line-height: 180%;
}

@media (max-width: 830px) {
  .text1 {
    padding: 0 30px 0 30px;
  }
  .text2 {
    padding: 0 30px 0 30px;
  }
}
</style>