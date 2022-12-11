<template>
  <div>
    <div class="btns">
        <my-button
      ><img src="@/images/search_black.png" class="btn" alt="search"
    /></my-button>
    <my-button style="margin-right: 1rem;">
        <img 
        src="@/images/profile_black.png" 
        class='btn' 
        alt=""
        >
    </my-button>
    </div>
    
    <ul>
      <li @click="$router.push('/')">Main Page</li>
      <li @click="$router.push('/for_her')">Catalog</li>
      <li @click="$router.push('/about')">About</li>
      <li @click="$router.push('/contacts')">Contacts</li>
      <li>Delivery</li>
      <li>Partners</li>
    </ul>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
};
</script>

<style scoped>
.btn {
  width: 20px;
  
}
.btns{
    display: flex;
    justify-content: space-between;
}
ul {
  list-style: none;
  width: 100px;
  margin: 0 20px 0 0;
  margin-left: 2rem;
}
li {
  color: #555555;
  cursor: pointer;
  margin-top: 34px;
  font-weight: bold;
  transition: .5s;
}
li:hover {
  color: #ac8f78;
}
</style>