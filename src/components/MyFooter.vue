<template>
  <footer class="foo">
    <div class="wrapper">
      <h1 class="logo">LATYSHEV</h1>
    </div>
    <div class="grid" v-if="!mobileView">
      <div class="block">
        <ul>
          <h3>Company</h3>
          <span
            >The brand strives to create respect for its products among the
            audience, so that the presence of the company's products is a sign
            of prestige.</span
          >
        </ul>
        <img src="@/images/socials.png" style="width: 300px" alt="" />
      </div>
      <div class="block" style="margin-left: 80px">
        <ul>
          <h3>Navigation</h3>
          <li @click="$router.push('/for_him')">Product catalog</li>
          <li @click="$router.push('/about')">About Company</li>
          <li>Bonus program</li>
          <li @click="$router.push('/contacts')">Work Process</li>
          <li>Privacy Policy</li>
          <li>Partners</li>
        </ul>
      </div>
      <div class="block" style="margin-left: 80px">
        <ul>
          <h3>Products</h3>
          <li @click="$router.push('/for_him')">For Him</li>
          <li @click="$router.push('/for_her')">For Her</li>
          <li>New collection</li>
          <li>Spacial for You</li>
        </ul>
      </div>
      <div class="block">
        <h3>Contacts</h3>
        <ul>
          <span
            >We are open to new opportunities, so you can contact our company
            representatives for any questions</span
          >
        </ul>
        <div>
          <span class="socials">
            <img src="@/images/mail.png" alt="" />
            E-Mail
          </span>
          <span class="socials">
            <img src="@/images/whatsapp.png" alt="" />
            WhatsApp
          </span>
        </div>
      </div>
    </div>
    <div class="mobile" v-if="mobileView">
      <div style="display: flex">
        <span class="about">
          The brand strives to create respect for its products among the
          audience, so that the presence of the company's products is a sign of
          prestige.
        </span>
      </div>
      <div class="btns">
        <img src="@/images/email.png" alt="e-mail" />
        <img src="@/images/whapp.png" alt="whatsapp" />
      </div>
      <img
        style="width: 70%; margin-left: 15%"
        src="@/images/socials.png"
        alt=""
      />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      mobileView: true,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 900;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style scoped>
.socials {
  color: #555555;
  padding: 0 3rem 0 0;
  font-size: 17px;
  font-weight: bold;
}
.socials img {
  width: 20px;
}

.block {
  position: relative;
  color: #555555;
}
.foo {
  display: flex;
  position: relative;
  background: #eee4da;
  height: 600px;
  overflow: hidden;
  flex-direction: column;
}
.logo {
  position: relative;
  color: #ac8f78;
  letter-spacing: 2px;
  height: fit-content;
  align-self: center;
}
.wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 160px;
}
.wrapper::before {
  position: absolute;
  width: 90%;
  height: 0.5px;
  content: "";
  background: #0000003e;
  bottom: 75%;
}
.grid {
  padding: 64px 111px 1px 111px;
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  list-style-type: none;
  padding-bottom: 25px;
}
h3 {
  top: 0;
  position: relative;
  font-size: 20px;
  color: #555555;
  padding: 0 0 26px 0;
}
li {
  color: #555555;
  cursor: pointer;
  margin-bottom: 25px;
  transition: .5s;
}
li:hover {
  color: #ac8f78;
}
.about {
  color: #555555;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
}
.btns {
  display: flex;
  padding: 2rem;
  justify-content: space-between;
}
.btns img {
  width: 200px;
}
@media (max-width: 900px) {
  .wrapper::before {
    bottom: 80%;
  }
}
@media(max-width: 483px){
  .btns img{
    max-width: 150px;
  }
}
@media(max-width: 320px){
  .btns img{
    max-width: 100px;
  }
}
</style>