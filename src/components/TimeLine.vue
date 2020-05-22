<template>
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
</template>
<script>
export default {
    name: 'TimeLine',
    props: ['lista'],
}
</script>
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

/*timeline*/

.fecha::after{
  position:absolute;
  right: 0;
  transform: translateX(4px);
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
  right: 0;
  width: 4px;
  transform: translateY(15px);
  height: calc(90%);
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