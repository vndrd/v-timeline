<template>
    <div class="container-item">
        <a :href="data.url">
            <img v-if="imagen" :src="data.image.url" alt="qwe" width="100%">
            <p>{{data.description}}</p> 
        </a>
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
        let validURL= function (str) {
            let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            return !!pattern.test(str);
        }
        if(validURL(this.url)){
            const { status, data } = await mql(this.url, {
                video: true,
                audio:true,
                palette: true,
                iframe: true,
            })
            this.status = status
            this.data = data
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
a {
    text-decoration: none;
}
</style>