<template>
    <div class="formulario">
        <h1>Formulario mql</h1>
        <form>
            <label for="">Url</label>
            <input type="text" v-model="form.url">
            <span>Ej: http://... or https://...</span>
            <button type="submit" @click="cargarUrl">Cargar url</button>
        </form>
        <p v-if="resultado">{{resultado}}</p>
        <div class="busqueda" v-if="busqueda">

        </div>
        <div v-if="isProcesing">
            Procesando
        </div>
        <div v-else>
            No procesa Nada
        </div>
    </div>    
</template>
<script>
const mql = require('@microlink/mql')

export default {
    name: 'Formulario',
    data(){
        return {
            form: {
                url: '1',
                isProcesing: false,
            },
            dt: {
                data: null,
                status: '',
            },
            resultado: '',
            busqueda: false,
        }
    },
    methods: {
        cargarUrl: async function(e){
            e.preventDefault()
            let isValidURL= function (str) {
                let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
                return !!pattern.test(str);
            }
            if( isValidURL(this.form.url)){
                this.resultado = 'Url-String Válido'
                this.busqueda = true
                this.isProcesing = true;
                const { status, data } = await mql(this.url, {
                    video: true,
                    audio:true,
                    palette: true,
                    iframe: true,
                })
                this.isProcesing = false;
                console.log({data,title: data.title})
                this.dt.status = status
                this.dt.data = data
            }else {
                this.resultado = 'Url-String NO Válido'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
h1 {
    // background: teal; //colorDivs
    display: inline-block;
}
form{
    display: block;
}
.formulario {
    width: 500px;
    // background: chocolate; //colorDivs
    display: inline-block;
}
label {
    font-size: 2rem;
    display: block;
}
form span{
    display: block;
    margin-bottom: 10px;
}
input {
    margin: 10px;
    width: calc(90%);
    padding: 10px;
    text-align: center;
    display: block;
}
.busqueda {
    width: 100%;
    background: yellow; //colorDivs
}
button{
    padding: 20px;
    display: inline-block;
    clear: both;
}
</style>