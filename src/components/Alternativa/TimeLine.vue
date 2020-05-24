<template>
<div class="timeline-wrapper">
    <transition-group name="tg-timeline" tag="div">
      <li v-for="(item,index) in listaOrdenadaComputed" v-bind:key="index" class="timeline-item">
          <div :class="index%2==0? 'derecha':'izquierda'" class="suceso" >
              <div class="circulo"></div>
              <div class="fecha">
                  {{mesString(item.fecha)}}
              </div>
              <div class="titulo">
                  
              </div>
              <div class="contenido">
                  <TimeLineItem :url="item.url" :title="item.title" />
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
        mesString(date){
            let dateArr = date.split('-'),
                mes = dateArr[1],
                dia = parseInt( dateArr[2] )
            switch (mes) {
                case '01':
                    return `ENE, ${dia}`;
                case '02':
                    return `FEB, ${dia}`;
                case '03':
                    return `MAR, ${dia}`;
                case '04':
                    return `ABR, ${dia}`;                                        
                case '05':
                    return `MAY, ${dia}`;                    
                case '06':
                    return `JUN, ${dia}`;
                case '07':
                    return `JUL, ${dia}`;
                case '08':
                    return `AGO, ${dia}`;
                case '09':
                    return `SEP, ${dia}`;                                        
                case '10':
                    return `OCT, ${dia}`;                    
                case '11':
                    return `NOV, ${dia}`;                                        
                case '12':
                    return `DIC, ${dia}`;                    
                default:
                    return '';
            }
        }
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
.contenido {
    margin-top: 40px;
    clear: both;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0rem 0rem 2rem 0rem #bbb;
    overflow: hidden;
}
.fecha {
    padding:5px;
    background: #484;
    color: white;
    width: 100px;
    height: 20px;
    font-weight: 800;
    font-size: 1.2rem;
}   
.izquierda .titulo, .izquierda .fecha{
    float: right;
}
.derecha .titulo, .derecha .fecha{
    float: left;
}
.suceso {
    margin:10px;
    // ba   ckground: #c4c4c4;
    width: calc(45%);
}
.derecha .circulo{
    left:0;
    transform: translateX(-50px);
}
.izquierda .circulo{
    right:0;
    transform: translateX(50px);
}
.circulo {
//circulo
    position: absolute;
    width: 20px;
    height: 20px;
    // transform: translateX(-10px) translateY(10px);
    top:0;
    background: #c4c4c4;
    border-radius: 10px;
}
.derecha{
    float: right;
    position:relative;
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
    //triangulo der-IZQ
    right: 0;
    transform: translateX(30px) rotate(180deg);
}
.derecha::after , .izquierda::after{
    //triangulo
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
    width: 1000px;
    // background: #e5e5e5;    
    margin-bottom: 10px;
}
.timeline-wrapper{
    display: flex;
    justify-content: center;
    // background: blue;
    position: relative;
}
.timeline-wrapper::after{
    //linea
    position: absolute;
    content: '';
    width: 5px;
    height: calc(80%);
    left: calc(50%);
    top:0;
    transform: translateX(-3px) translateY(20px);
    background: #c4c4c4;
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
</style>