<template>
  <div class="item" @mouseover="upHere = true" @mouseleave="upHere = false"
    :style = image.style>
    <transition name="hover-animation">
      <span @click="$router.push(`/store/${image.title}`)" class="hover" v-show="upHere">
        <h2 class="title">
          <span>{{ `${image.title}` }}</span>
        </h2>
        <h2 class="price">
          <span>{{ `${image.price}` }}</span>
        </h2>
      </span>
    </transition>
    <img :src="image.img" alt="" :style=image.imgstyle />
  </div>
</template>

<script>
export default {
  data() {
    return {
      upHere: false,
    };
  },
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
.item {
  border-radius: 10px;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
}
.item img {
  position: relative;
  height: 100%;
  width: 100%;
}
.title {
  position: absolute;
  top: 350px;
  left: 20px;
  color: whitesmoke;
}
.price {
  position: absolute;
  top: 350px;
  right: 20px;
  color: whitesmoke;
}
.hover {
  position: absolute;
  cursor:pointer;
  z-index: 5;
  width: 100%;
  height: 100%;
  background: #8888887f;
}
.hover-animation-enter-active,
.hover-animation-leave-active {
  transition: opacity 0.5s ease;
}

.hover-animation-enter-from,
.hover-animation-leave-to {
  opacity: 0;
}
/* @media (max-width: 380px)
{
  .item{
    max-width: 270px !important;
  }
}
@media (max-width: 380px)
{
  .item{
    max-width: 230px !important;
  }
} */
</style>