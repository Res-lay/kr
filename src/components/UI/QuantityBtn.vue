<template>
  <div class = wrapper>
    <button class="btn" @click="decrease"><font-awesome-icon icon="fa-solid fa-minus" /></button>
    <span style="font-size:20px;">{{number}}</span>
    <button class="btn" @click="increase"><font-awesome-icon icon="fa-solid fa-plus" /></button>
  </div>
</template>

<script>


export default {
    data(){
        return{
            number: 0,
        }
    },
    methods:{
        decrease(){
            if (this.number == 0){ this.number = 0;}
            else{ this.number --; }
            
        },
        increase(){
            this.number ++;
        }
    }
}
</script>

<style scoped>
.wrapper{
    border-radius: 20px;
    color:#555555;
    background: #eee4da;
    height: 50px;
    display: flex;
    padding: 0 20px 0 20px;
    align-items: center;
    width: 150px;
    justify-content:space-between;
}
.btn{
    cursor: pointer;
    color: #555555;
    background: none;
    border: none;
    height: fit-content;
    width: fit-content;

}
@media (max-width:400px){
}
</style>