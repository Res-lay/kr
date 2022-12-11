<template>
  <div class="navbar">
    <div class="navbar__btns">
      <my-button  :style= title[0].color class="btn" @click="$router.push('/for_her')">Catalog</my-button>
      <my-button :style= title[0].color class="btn" @click="$router.push('/about')">About</my-button>
      <my-button :style= title[0].color class="btn">Delivery</my-button>
    </div>
    <h1 :style= title[0].color class="logo" @click="$router.push('/')">LATYSHEV</h1>
    <div>
      <my-button :style= title[0].color class="btn" @click="$router.push('/contacts')">Contacts</my-button>
      <my-button style="margin-right: 2rem"
        ><img class="icon" :src="title[0].img" alt=""
      /></my-button>
      <my-button style="margin-right: 2rem"
        ><img class="icon" :src="title[1].img" alt=""
      /></my-button>
      <my-button style="margin-right: 5rem"
        ><img class="icon" :src="title[2].img" alt=""
      /></my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  props: {
    title: {
      type: Object,
      required: true,
    },
  },
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
.navbar__btns {
  margin-left: 5rem;
}
.btn {
  margin-right: 4rem;
  transition:.5s;
}
.btn:hover{
  color: #555555;
}
.logo {
  color: lightgrey;
  letter-spacing: 2px;
  margin-right: 100px;
  cursor:pointer;
}
.icon {
  width: 15px;
}
.icn {
  margin-left: 1rem;
}
</style>