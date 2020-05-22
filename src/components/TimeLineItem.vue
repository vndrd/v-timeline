<template>
    <div class="container-item">
        <img v-if="imagen" :src="data.image.url" alt="qwe" width="100%" >
        <p>{{data.description}}</p>        
    </div>    
</template>
<script>
const mql = require('@microlink/mql')
export default {
    name: 'TimeLineItem',
    props: ['url'],
    data() {
        return {
            description: '',
            image: '',
            res: {},
            status : '',
            data: {}
        }
    },
    async mounted() {
        if(this.url){
                console.log("mounted : "+this.url)
                const { status, data } = await mql(this.url, {
                video: true,
                audio:true,
                palette: true,
                iframe: true,
            })
                this.status = status
                this.data = data
                await console.log({text:'from main js',status,data})
        }
    },
    computed: {
        imagen: function(){
            if(this.data.image){
                return this.data.image.url
            }
            return ''
        }
    }
}
</script>
<style lang="scss" scoped>
.container-item{
    overflow: hidden;
    border: 5px solid #aaa;
    border-radius: 10px;
    margin: 10px;
    background: #888;
}
p{
    color: #fff;
    padding: 0 10px;
    font-size: .8rem;
    text-align: left;
}
</style>