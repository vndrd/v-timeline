<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="timeline-wrapper">
        <li v-for="(item,index) in lista" :key="item.id" class="timeline-item">
            <div class="fecha float-left">
              <span style="display:none">{{index}}</span>
              {{item.fecha}}
            </div>
            <div class="suceso">
              <div class="card">
                <div class="card-header">
                  {{item.title}}
                </div>
                <div class="card-body">
                  {{item.content}}
                </div>
              </div>
              <br>
            </div>
        </li>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.float-right{
  float: right;
  text-align: left;
}
.float-left{
  float: left;
  text-align: right;
  padding-left: 100px;
  background: #aaa;
}
.timeline-item{
  
  display: flex;
  position: relative;
  // alinear
  justify-content: center;
}
.suceso{
  // background: #449;
  margin-bottom: 20px;
  padding: 10px;
  width: 20%;
}
.fecha{
  color: #aaa;
  font-weight: 800;
  background: white;
  padding: 10px;
  width: 20%;
  position: relative;
  
}
.card{
  margin-left: 20px;
  background: white;
  min-height: 100px;
}
.card-header::after{
  content:'';
  z-index: 9999;
  position: absolute;
  left: 0;
  top:0;
  border-left: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-top: 25px solid #844;
  transform: translateX(-20px);
}
.card-header {
  position:relative;
  color: #fff;
  padding:10px;
  background: #844;
}

.card-body {
  background: #ddd;
  min-height: 80px;
}



.fecha::after{
  position:absolute;
  right: -10px;
  width: 10px;
  height: 10px;
  background: #844;
  border: #a66 1px solid;
  border-radius: 10px;
  content:'';
}
.fecha::before{
  position:absolute;
  z-index: 9999;
  right: -5px;
  width: 4px;
  height: calc(100%);
  background: #8446;
  content:'';
}
.fecha::before:nth-last-child(){
  position:absolute;
  right: -6px;
  width: 2px;
  background: black;
  content:'';
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
        {id : 1 , title: 'Titulo 1', content: 'contenido 1' , fecha:'01-05-19'},
        {id : 2 , title: 'Titulo 2', content: 'contenido 2' , fecha:'02-05-19'},
        {id : 3 , title: 'Titulo 3', content: 'contenido 3' , fecha:'03-05-19'},
        {id : 4 , title: 'Titulo 4', content: 'contenido 4' , fecha:'04-05-19'},
      ]
    }
  }
}
</script>
