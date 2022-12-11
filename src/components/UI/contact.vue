<template>
  <div class="main">
    
    <img class='image' src="@/images/contact.png" alt="">
    
    <div class="cards">
        <contact-card class="contact-card" :title="mas[0]"></contact-card>
        <contact-card class="contact-card" :title="mas[1]"></contact-card>
        <contact-card class="contact-card" :title="mas[2]"></contact-card>
        <contact-card class="contact-card" :title="mas[3]"></contact-card>
    </div>
  </div>
</template>

<script>
import ContactCard from './ContactCard.vue';

export default {
components:{
    ContactCard,
},
data(){
    return{
        mas:[
            {name:"Call Us", desc:" 8 (977) 231 65 47"},
            {name:"Adress", desc:"Russia, Moscow, Avenue Vernandskogo 78, b.48"},
            {name:"Support", desc:"support@latyshev.pro"},
            {name:"Partners department", desc:"partners@latyshev.pro"},
        ]

        
    }
}
}
</script>

<style scoped>
.main{
    margin-top: 100px;
    padding:0 40px 0 40px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.image{
    max-width: 1300px;
    max-height: 466px;
    padding:0 20px 0 20px;
}
.cards{
    display:flex;
    flex-wrap: wrap;
    margin-top:50px;
    justify-content: space-between;
    align-content: center;
}
.contact-card{
    margin-left: 20px;
    margin-top: 20px;
}

@media (max-width:900px) {
    .cards{
        /* margin-left: 50px; */
        justify-content: center;
    }
    .contact-card{
        margin-top: 10px;
    }
}
@media (max-width:900px) {
    .cards{
        /* margin-left: 50px; */
        justify-content: center;
    }
    .contact-card{
        margin-top: 10px;
    }
}
@media (max-width:750px) {
    .contact-card{
        margin-left: 0;;
    }
}
</style>