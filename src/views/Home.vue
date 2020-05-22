<template>
  <div class="home">
    <div class="img-cont">
      <!-- <img alt="Vue logo" src="../assets/timeline.svg"> -->
      <h1>Timeline</h1>
    </div>
    <TimeLine :lista="listaOrdenada"/>
    <Form :lista="lista"/>
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
import Form from '@/components/Form'
export default {
  name: 'Home',
  components: {
    Form,
    TimeLine,
  },
  data(){
    return {
      lista: [
        {id : 1 , title: 'Titulo 1', content: 'contenido 1' , fecha:'2020-05-01'},
        {id : 2 , title: 'Titulo 2', content: 'contenido 2' , fecha:'2020-05-02'},
        {id : 3 , title: 'Titulo 3', content: 'contenido 3' , fecha:'2020-05-03'},
        {id : 4 , title: 'Titulo 4', content: 'contenido 4' , fecha:'2020-05-04'},
      ]
    }
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
