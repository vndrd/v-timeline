<template>
<div class="timeline-wrapper">
    <transition-group name="tg-timeline" tag="div">
      <li v-for="(item,index) in lista" v-bind:key="index" class="timeline-item">
          <div class="fecha float-left">
          </div>
          <div class="suceso">
              <div class="card">
                <div class="card-header">
                    May, 2
                </div>
                <div class="card-body">
                    <TimeLineItem :url="item.url" />
                </div>
              </div>
          </div>
      </li>
    </transition-group>
</div>    
</template>
<script>
import TimeLineItem from '@/components/Alternativa/TimeLineItem'

export default {
    name: 'TimeLine',
    props: ['lista'],
    components: {
      TimeLineItem
    },
    methods:{ 
      
    },
    computed: {
    listaOrdenadaComputed: function(){
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
  transform: translateX(100px) scaleY(0);

}
.tg-timeline-enter-active{
  transition: 1s all ease-in-out;
}
.tg-timeline-enter-to{
  // background: blue;
  opacity: 1;
  transform: translateX(0px) scaleY(1);
  
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
.time-line-wrapper {
  display: flex;
  justify-content: center;
}
li.timeline-item{  
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
//   background: yellow;
   margin-bottom: 10px;
  width: 80%;
  // alinear
  justify-content: center;
}
.suceso{
  // background: #449;
  padding: 10px;
  width: 30%;
  z-index: 7;
  position:relative;
}
.suceso::after{
    content: '';
    width: 250px;
    height: 140px;
    transform: translateX(60px);
    background: #c4c4c4;
    z-index: -1;
    position: absolute;
    top:0;
    left: 0;
}
.fecha{
  color: #aaa;
  font-weight: 800;
  background: white;
  padding: 10px;
  width: 30%;
  position: relative;
  
}
.card{
  margin-left: 40px;
  background: #c4c4c4;
  min-height: 100px;
}
.card-header::after{
/* trinagulo */
  content:'';
  z-index: 9999;
  position: absolute;
  left: 0;
  top:0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid transparent;
  border-right: 25px solid #484;
  transform: translateX(-60px);
}
.card-header {
  position:relative;
  width: 100px;
  min-height: 20px;
  color: #fff;
  padding:10px;
  background: #484;
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
  transform: translateX(8px);
  width: 25px;
  height: 25px;
  z-index: 9999;
  background: #c4c4c4;
  border-radius: 25px;
  content:'';
}
.fecha::before{
  /* linea */
  position:absolute;
  z-index: 9999;
  right: 0;
  width: 6px;
  transform: translateY(15px);  
  height: calc(100%);
  background: #c4c4c4;
  content:'';
}
.timeline-item:last-child .fecha::before{
  /* linea */
  position:absolute;
  z-index: 9999;
  right: 0;
  width: 4px;
  transform: translateY(15px);  
  height: calc(60%);
  background: #8446;
  content:'';
}
</style>