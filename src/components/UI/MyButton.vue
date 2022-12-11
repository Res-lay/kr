<template>
  <button  class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  background: none;
  border: none;
  font-size: 15px;
  color: #555555;
  cursor: pointer;
  transition: .5s;
}
.btn:hover{
  color:#555555;
}
</style>