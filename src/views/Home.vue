<template>
  <div class="home">
    <div class="img-cont">
      <!-- <img alt="Vue logo" src="../assets/timeline.svg"> -->
      <h1>Timeline</h1>
    </div>
    <TimeLine :lista="lista"/>
  </div>
</template>
<style lang="scss" scoped>
.img-cont{
  width: 200px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
img{
  width: 100%;
  transform: rotate(135deg);
}

</style>

<script>
// @ is an alias to /src

import TimeLine from '@/components/TimeLine'
export default {
  name: 'Home',
  components: {
    TimeLine
  },
  data(){
    return {
      lista: [
        {id : 1 , title: 'Titulo 1', content: 'contenido 1' , fecha:'01.05.20'},
        {id : 2 , title: 'Titulo 2', content: 'contenido 2' , fecha:'02.05.20'},
        {id : 3 , title: 'Titulo 3', content: 'contenido 3' , fecha:'03.05.20'},
        {id : 4 , title: 'Titulo 4', content: 'contenido 4' , fecha:'04.05.20'},
      ]
    }
  }
}
</script>
