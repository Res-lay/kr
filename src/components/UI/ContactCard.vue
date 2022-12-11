<template>
  <div class="mainn">
    <span class="title">{{ title.name }}</span>
    <span class="title1">{{ title.desc }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  color: #55555555;
}
.title1 {
  color: #555555;
  font-size: 1.2rem;
}
.mainn {
  display: flex;
  width: 314px;
  height: 139px;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  background: #eee4da;
  border-radius: 20px;
}
</style>