<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="timeline-wrapper">
        <li v-for="(item,index) in lista" :key="item.id" class="timeline-item">
            <div class="fecha float-left">
              {{index}}
            </div>
            <div class="suceso float-right">
              {{item.title}}
              {{item.content}}
              <br>
              <div v-if="index==2">
                {{item.title}}
                {{item.content}}
              </div>
            </div>
        </li>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.float-right{
  float: right;
}
.float-left{
  float: left;
}
.timeline-item{
  background: aqua;
  display: flex;
  // alinear
  justify-content: center;
}
.fecha{
  background: white;
  padding: 10px;
  width: 20%;
  position: relative;
  
}
.fecha::after{
  position:absolute;
  right: -10px;
  width: 10px;
  height: 10px;
  background: black;
  border-radius: 10px;
  content:'';
}
.fecha::before{
  position:absolute;
  right: -6px;
  width: 2px;
  height: calc(100%);
  background: black;
  content:'';
}
.fecha::before:nth-last-child(){
  position:absolute;
  right: -6px;
  width: 2px;
  background: black;
  content:'';
}
.suceso{
  background: white;
  padding: 10px;
  width: 20%;
}
</style>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return {
      lista: [
        {id : 1 , title: 'Titulo 1', content: 'contenido 1'},
        {id : 2 , title: 'Titulo 2', content: 'contenido 2'},
        {id : 3 , title: 'Titulo 3', content: 'contenido 3'},
        {id : 4 , title: 'Titulo 4', content: 'contenido 4'},
      ]
    }
  }
}
</script>
