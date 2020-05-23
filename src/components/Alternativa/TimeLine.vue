<template>
<div class="timeline-wrapper">
    <transition-group name="tg-timeline" tag="div">
      <li v-for="(item,index) in lista" v-bind:key="index" class="timeline-item">
          <div class="derecha suceso" v-if="index%2==0">
              <div class="fecha">
                  {{item.fecha}}
              </div>
          </div>
          <div class="izquierda suceso" v-if="index%2==1">
              <div class="fecha">
                    {{item.fecha}}
              </div>
          </div>
      </li>
    </transition-group>
</div>    
</template>
<script>
// <div class="suceso">
//               <div class="card">
//                 <div class="card-header">May, 2</div>
//                 <div class="card-body">
//                     <TimeLineItem :url="item.url" />
//                 </div>
//               </div>
//           </div>
// import TimeLineItem from '@/components/Alternativa/TimeLineItem'
export default {
    name: 'TimeLine',
    props: ['lista'],
    components: {
    //   TimeLineItem
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
.fecha {
    background: #484;
    color: white;
    width: 150px;
    height: 20px;
}
.suceso {
    margin:10px;
    display: flex;
    background: #c4c4c4;
    width: 250px;
}
.derecha{
    float: right;
    
    position:relative;
    justify-content: start;
}
li.timeline-item::before{
    position: absolute;
    content: '';
    width: 5px;
    height: calc(100%);
    left: calc(50%);
    top:0;
    transform: translateX(-3px) translateY(15px);
    background: #c4c4c4;
}    
li.timeline-item::after{
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    left: calc(50%);
    transform: translateX(-10px) translateY(10px);
    top:0;
    background: #c4c4c4;
    border-radius: 10px;
}
.izquierda{
    float: left;
    position:relative;
    justify-content: end;
}
.derecha::after{
    left: 0;
    transform: translateX(-30px);
}
.izquierda::after{
    right: 0;
    transform: translateX(30px) rotate(180deg);
}
.derecha::after , .izquierda::after{
    content: '';
    position: absolute;
    width:0px;
    height: 0px;
    top:0;
    border-right: #484 solid 10px;
    border-top: transparent solid 10px;
    border-bottom: transparent solid 10px;
    border-left: transparent solid 10px;
}
li.timeline-item{
    position: relative;
    height: 40px;
    list-style-type: none;
    width: 600px;
    background: #e5e5e5;    
    margin-bottom: 10px;
}
.timeline-wrapper{
    display: flex;
    justify-content: center;
    background: blue;
}
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
// .float-right{
//   float: right;
//   text-align: left;
// }
// .float-left{
//   float: left;
//   text-align: right;
//   padding-left: 100px;
//   background: #aaa;
// }
// .time-line-wrapper {
//   display: flex;
//   justify-content: center;
// }
// li.timeline-item{  
//   margin-left: auto;
//   margin-right: auto;
//   display: flex;
//   position: relative;
// //   background: yellow;
//    margin-bottom: 10px;
//   width: 80%;
//   // alinear
//   justify-content: center;
// }
// .suceso{
//   // background: #449;
//   padding: 10px;
//   width: 30%;
//   z-index: 7;
//   position:relative;
// }
// .suceso::after{
//     content: '';
//     width: 250px;
//     height: 140px;
//     transform: translateX(60px);
//     background: #c4c4c4;
//     z-index: -1;
//     position: absolute;
//     top:0;
//     left: 0;
// }
// .fecha{
//   color: #aaa;
//   font-weight: 800;
//   background: white;
//   padding: 10px;
//   width: 30%;
//   position: relative;
  
// }
// .card{
//   margin-left: 40px;
//   background: #c4c4c4;
//   min-height: 100px;
// }
// .card-header::after{
// /* trinagulo */
//   content:'';
//   z-index: 9999;
//   position: absolute;
//   left: 0;
//   top:0;
//   border-top: 15px solid transparent;
//   border-bottom: 15px solid transparent;
//   border-left: 25px solid transparent;
//   border-right: 25px solid #484;
//   transform: translateX(-60px);
// }
// .card-header {
//   position:relative;
//   width: 100px;
//   min-height: 20px;
//   color: #fff;
//   padding:10px;
//   background: #484;
// }

// .card-body {
//   background: #ddd;
//   min-height: 80px;
// }

// /*timeline*/

// .fecha::after{
//   /* circulo */
//   position:absolute;
//   right: 0;
//   transform: translateX(8px);
//   width: 25px;
//   height: 25px;
//   z-index: 9999;
//   background: #c4c4c4;
//   border-radius: 25px;
//   content:'';
// }
// .fecha::before{
//   /* linea */
//   position:absolute;
//   z-index: 9999;
//   right: 0;
//   width: 6px;
//   transform: translateY(15px);  
//   height: calc(100%);
//   background: #c4c4c4;
//   content:'';
// }
// .timeline-item:last-child .fecha::before{
//   /* linea */
//   position:absolute;
//   z-index: 9999;
//   right: 0;
//   width: 4px;
//   transform: translateY(15px);  
//   height: calc(60%);
//   background: #8446;
//   content:'';
// }
</style>