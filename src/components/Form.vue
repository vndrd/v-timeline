<template>
<div class="form-container">
    <form @submit="submitForm">
        <label for="">Fecha</label>
            <input type="date" name="fecha" v-model="fecha">    
        <label for="">Titulo</label>
            <input type="text" name="title" v-model="title">    
        <label for="">Url</label>
            <input type="text" name="url" v-model="url">    
        <label for="">Contenido</label>
            <textarea name="content"
            v-model="content" id="" cols="30" rows="5"></textarea>
        <button type="submit">Agregar</button>
    </form>    
</div>    
</template>
<script>
export default {
    name: 'Form',
    props: ['lista'],
    data(){
        return {
            title: '',
            content: '',
            fecha: '20.05.2020',
            url: '',
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault()
            let obj = {
                title: this.title,
                content: this.content,
                fecha: this.fecha,
                url: this.url,
            }
            this.lista.push(obj)
        }
    }
}
</script>
<style lang="scss" scoped>
.form-container {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 10px;
    padding: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 1rem 1rem 0.1rem rgba($color: #111, $alpha: .2);
}
label {
    padding: 5px;
    color: white;
    background: rgba($color: #448, $alpha: 1) ;
    display: block;
}
input {
    padding: 5px;
    display: block;
    width: 95%;
    margin:10px 0;
}
textarea {
    margin: 10px;
    width: 100% !important;
    transform: translateX(-12px) scale(.98);
}
button {
    color: rgba($color: #448, $alpha: .8) ;
    
    font-weight: 800;   
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    box-shadow: 0 0 0 0.2rem rgba($color: #448, $alpha: .8);
}
button:hover,button:focus,button:active{
    outline: none !important;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .5);;
}
</style>