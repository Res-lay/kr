<template>
  <div class="card">
    <span class="main_text">{{ `${card.text}` }}</span>
    <span class="text">{{ `${card.text1}` }}</span>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.card {
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 215px;
}
.main_text {
  color: #e3dad0;
  /* width: 100%; */
  font-weight: 400;
  text-align: center;
  font-size: 96px;
  line-height: 110%;
  letter-spacing: -0.03em;
}
.text {
  text-align:center;
  font-weight: 400;
  font-size: 20px;
  line-height: 180%;
  letter-spacing: -0.02em;
  color: #555555;
}
</style>