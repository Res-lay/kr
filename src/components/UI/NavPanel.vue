<template>
  <div class="panel">
    <div class="block">
      <h2 @click="$router.push('/for_him')">For Him</h2>
      <h2 @click="$router.push('/for_her')">For Her</h2>
      <h2 @click="$router.push('/unisex')">Unisex</h2>
      <h2 @click="$router.push('/new_collection')">New Colection</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.panel {
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: space-evenly;
  background: #eee4da;
  height: 45px;
}
.block {
  justify-self: center;
  display: flex;
  align-self: center;
  margin-left: 70px;
}
h2 {
  padding-right: 70px;
  color: #555555;
  opacity: 0.4;
  font-size: 14px;
  height: fit-content;
  font-weight: 400;
  transition: .5s;
  cursor:pointer;
}
h2:hover{
    opacity: 1;
}
</style>