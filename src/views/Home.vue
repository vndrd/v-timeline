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
import axios from 'axios'
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
        {id : 1 , 
          title: 'Humerez: intermediario español tenía contacto directo con Navajas',
          url: 'https://www.la-razon.com/nacional/2020/05/22/testigo-clave-dice-que-un-intermediario-espanol-tenia-contacto-directo-con-navajas/',
          content: 'contenido 1' , fecha:'2020-05-01',},
        {id : 2 , title: 'Más de un Millon de dólares por comisión', 
          content: 'contenido 2' , 
          url: 'https://eldeber.com.bo/180301_tres-intermediarios-iban-a-cobrar-mas-de-un-millon-de-dolares-de-comision-por-los-respiradores',
          fecha:'2020-05-02'},
        {id : 3 , title: 'Titulo 3', content: 'contenido 3' , fecha:'2020-05-03'},
        {id : 4 , title: 'Titulo 4', content: 'contenido 4' , fecha:'2020-05-04'},
      ]
    }
  },
  created(){
    console.log("from created ")
     axios.defaults.headers = {
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Credentials': true
    }

    // axios.get(
    // 'https://www.la-razon.com/nacional/2020/05/22/testigo-clave-dice-que-un-intermediario-espanol-tenia-contacto-directo-con-navajas/'

    // )
    //     .then(response => console.log(response))
    //     .catch( error => console.log({text:'error',error}))
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
