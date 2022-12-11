<template>
  <div class="item">
      <img :src=about.img alt="" />
        <h1><span>{{`${about.title}`}}</span></h1>
        <intro-button @click="$router.push(`${about.link}`)" class="btn"></intro-button>
  </div>
</template>

<script>
import IntroButton from "./MyIntroButton.vue";
export default {
  components: {
    IntroButton,
  },
  props:{
    about:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
    }
  },
  methods:{
  }
};
</script>

<style scoped>
.item{
  position: relative;
  max-width: 310px;
  height: 430px;
}
.item img{
  position: relative;
  height: 430px;
  width: 310px;
  border-radius: 5px;
}
h1{
  position: absolute;
  color: #555555;
  top:350px;
  left:20px;
}
.btn{
  position: absolute;
  top:350px;
  right:30px;
}
</style>