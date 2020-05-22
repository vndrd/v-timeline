<template>
<div class="form-container">
    <form @submit="submitForm">
        <label for="">Titulo</label>
        <input type="text" name="title"
            v-model="title">    
        <br>
        <label for="">Contenido</label>
        <br>
        <textarea name="content"
            v-model="content" id="" cols="30" rows="10"></textarea>
        <br>
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
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault()
            let obj = {
                title: this.title,
                content: this.content,
                fecha: this.fecha,
            }
            console.log({text: 'objeitiot',obj})
            this.lista.push(obj)
        }
    }
}
</script>
<style lang="scss" scoped>
.form-container {
    position: fixed;
    bottom: 0;
}
</style>