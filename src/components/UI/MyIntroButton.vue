<template>
  <button class="btn">
    <img src="@/images/vector.png" alt="vector">
  </button>
</template>

<script>
export default {
  name:'intro-button',
}
</script>

<style scoped>
img{
  width:20px;
}
.btn{
  display: flex;
  cursor: pointer;
  border:none;
  justify-content: center;
  padding:6px 1px 1px 1px;
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background: #88888899;
}
</style>