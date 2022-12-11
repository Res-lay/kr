<template>

  <div class="wrapper">
    <div class="image"><img src="@/images/poster2.png" alt="poster" /></div>
    <div class="text">
      <h1 class="logo">LATYSHEV</h1>
      <span class="about"
        >Each Latyshev brand product is truly unique - everything is thought out
        to the smallest detail.</span
      >
      <span class="more"
        >The brand seeks to build respect among the audience for its products,
        so that the presence of the company's products is a sign of prestige,
        since the focus of the business is focused on exclusive sales, but not
        on the mass market.</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  margin-left: 70px;
  margin-right: auto;
  align-items: center;
}
.image {  
  min-width: 520px;
  max-height: 650px;
  padding-bottom: 40px;
  overflow: hidden;
}
.image img {
  max-width: 520px;
  max-height: 650px;
  padding-bottom: 20px;
}
.text {
  display: flex;
  margin-top: 100px;
  margin-right: 300px;
  margin-left: 200px;
  flex-direction: column;
}
.logo{
  align-self: center;
  color: #AC8F78;
}
.about{
  margin-top: 100px;
  color:#555555;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: justify;
}
.more{
  margin-top: 80px;
  color:#555555;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: justify;
  margin-bottom: 50px;
}
@media(max-width:900px){
  .wrapper{
    flex-wrap: wrap;
  }
  .image{
    margin-top: 20px;
    min-width: 310px;
    min-height: 430px
  }
  .image img{
    width: 310px;
    height: 430px;
  }
  .text{
    margin-left: 0;
    margin-right: 0;
    padding: 50px;
  }
  .logo{
    margin-top: 0;
  }
}
@media (max-width:900px){
  .wrapper{
    margin-left: 0;
  }
}
</style>