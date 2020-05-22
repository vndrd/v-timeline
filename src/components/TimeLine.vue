<template>
<div class="timeline-wrapper">
    <transition-group name="tg-timeline" key="cpsa" tag="div">
      <li v-for="(item,index) in listaOrdenada" v-bind:key="index" class="timeline-item">
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
                  <TimeLineItem :url="item.url" />
              </div>
              </div>
              <br>
          </div>
      </li>
    </transition-group>
</div>    
</template>
<script>
import TimeLineItem from '@/components/TimeLineItem'

export default {
    name: 'TimeLine',
    props: ['lista'],
    components: {
      TimeLineItem
    },
    computed: {
    listaOrdenada: function(){
      let res = this.lista
      return res.sort((a,b)=> {
        let fechaA = new Date(a.fecha)
        let fechaB = new Date(b.fecha)
        return fechaA.getTime() > fechaB.getTime() ? 1 : -1
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.tg-timeline-enter{
  // background: red;
  opacity: 0;
  transform: translateX(100px);
}
.tg-timeline-enter-active{
  transition: 1s all ease-in-out;
}
.tg-timeline-enter-to{
  // background: blue;
  opacity: 1;
  transform: translateX(0px);
}
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

/*timeline*/

.fecha::after{
  /* circulo */
  position:absolute;
  right: 0;
  transform: translateX(6px);
  width: 10px;
  height: 10px;
  z-index: 9999;
  background: #844;
  border: #fff 3px solid;
  border-radius: 10px;
  content:'';
}
.fecha::before{
  /* linea */
  position:absolute;
  z-index: 9999;
  right: 0;
  width: 4px;
  transform: translateY(15px);
  
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