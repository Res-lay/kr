<template>
    <div class="navbar">
        <img class='menu'  :src=title[3].img alt="" @click="makeShow">
      <h1 class="logo" :style=title[0].color @click="$router.push('/')" >LATYSHEV</h1>
      <img :src=title[1].img alt="" style="width: 20px; margin-right: 2rem; cursor: pointer;">
    </div>
  </template>
  
  <script>
  export default {
    props:{
      title:{
        type:Object,
        required:true
      },
        ShowNav:{
            type: Boolean,
        }
    },
    data(){
        return{
        };
    },
    methods:{
        makeShow(){
            this.$emit('makeShow');
        }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    width: 100%;
    height: 121px;
    align-items: center;
    justify-content: space-between;
  }
 .menu{
    cursor: pointer;
    width: 20px;
    margin-left: 2rem;
 }
  </style>