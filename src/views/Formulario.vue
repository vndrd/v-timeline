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
        <p>status: {{dt.status}}</p>
        <div class="busqueda" v-if="dt.status">
            <li><span>title:</span> {{dt.data.title}}</li>            
            <li><span>publisher:</span> {{dt.data.publisher}}</li>            
            <li><span>author:</span> {{dt.data.author}}</li>            
            <li><span>description:</span> {{dt.data.description}}</li>            
            <li><span>date:</span> {{dt.data.date}}</li>            
            <li><span>lang:</span> {{dt.data.lang}}</li>
            <li><span>url:</span> {{dt.data.url}}</li>            
            <li><span>image:</span> {{dt.data.image}}</li>            
            <li><span>logo:</span> {{dt.data.logo}}</li>            
            <li><span>audio:</span> {{dt.data.audio? 'Si':'No'}}
                <ul>
                    <li v-for="(value, name) in dt.data.audio" :key="value+name">
                        {{ name }}: {{ value }}
                    </li>
                </ul>
            </li>    
            <li><span>video:</span> {{dt.data.video? 'Si':'No'}}
                <ul>
                    <li v-for="(value, name) in dt.data.video" :key="value+name">
                        {{ name }}: {{ value }}
                    </li>
                </ul>
            </li>   
            <li><span>iframe:</span> {{dt.data.iframe? 'Si':'No'}}
                <ul>
                    <li v-for="(value, name) in dt.data.iframe" :key="value+name">
                        {{ name }}: {{ value }}
                    </li>
                </ul>
            </li>                
            
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
//👎
export default {
    name: 'Formulario',
    data(){
        return {
            form: {
                url: 'https://genius.com/Ed-sheeran-perfect-lyrics',
                isProcesing: false,
            },
            dt: {
                data: null,
                status: '',
            },
            resultado: '',
            busqueda: false,
            isProcesing: false,
        }
    },
    methods: {
        cargarUrl: async function(e){
            e.preventDefault()
            this.dt.status= false;
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
                const { status, data } = await mql(this.form.url, {
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
.busqueda li{
    padding:5px;
    margin: 2px;
    background: white;
    text-align: left;
}
.busqueda li span {
    font-weight: 800;
}
button{
    padding: 20px;
    display: inline-block;
    clear: both;
}
</style>