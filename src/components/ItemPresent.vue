<template>
  <div class="app">
    <div class="wrapper">
      <div class="image">
        <img src="@/images/items/item9.jpg" alt="poster" />
      </div>
      <div class="text">
        <div class="like" style="height: 40px">
          <button class="fav" @click="this.liked = !this.liked" v-if="!liked">
            <font-awesome-icon icon="fa-regular fa-heart" />
          </button>
          <button class="fav1" @click="this.liked = !this.liked" v-if="liked">
            <font-awesome-icon icon="fa-solid fa-heart" />
          </button>
          <span style="color: #555555">Add to favourites</span>
        </div>

        <h1 style="height: 60px" class="logo">{{ name }}</h1>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <quantity-btn></quantity-btn>
          <span class="price">51 $</span>
        </div>
        <button class="add_to_cart">
          <img
            src="@/images/shop_black.png"
            alt=""
            style="width: 20px; padding-top: 1px; position: relative"
          />
          Add to shopping cart
        </button>
        <span
          class="more"
          
          >A delicate floral arrangement is suitable for both men and women. It
          combines several bright accents, creating a multifaceted, refined
          fragrance. The opening chord of jasmine is intertwined with shades of
          rich tuberose and exquisite damask rose. A warm, velvety train is
          created by a soft and noble, slightly creamy note of sandalwood.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import QuantityBtn from "./UI/QuantityBtn.vue";
export default {
  components: {
    QuantityBtn,
  },
  data() {
    return {
      liked: false,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.price{
  margin-right: 100px;
  font-size: 30px;
}
.text {
  display: flex;
  flex-direction: column;
  position: relative;
  flex-wrap: wrap;
}
.more {
  width: 420px;
  padding: 20px;
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  color: #555555;
}
.like {
  width: fit-content;
}
.add_to_cart {
  cursor: pointer;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #eee4da;
  font-weight: normal;
  border: none;
  color: #555555;
  font-size: 20px;
  border-radius: 40px;
  width: 400px;
  height: 80px;
}
.fav {
  background: transparent;
  border: none;
  font-size: 20px;
  color: #555555;
}
.fav1 {
  background: transparent;
  border: none;
  font-size: 20px;
  color: red;
}
.app {
  padding: 30px 0 30px 0;
}
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.logo {
  color: #555555;
  width: fit-content;
}
.image {
  max-width: 520px;
  max-height: 700px;
}
.image img {
  width: 100%;
  height: 100%;
}
@media (max-width: 900px) {
  .image {
    max-width: 320px;
    max-height: 500px;
  }
  .text {
    margin-top: 30px;
  }
}
@media (max-width: 450px) {
  .text {
    align-items: center;
  }
  .add_to_cart {
    width: 250px;
  }
  .price{
    margin-right: 0;
    margin-left: 20px;
  }
}

@media(max-width:390px){
  .more{
    width:360px;
  }
}
</style>