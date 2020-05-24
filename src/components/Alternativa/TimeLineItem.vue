<template>
    <div class="container-item">
        <a :href="data.url">
            <div class="container-img" >
                <img v-if="imagen" :src="data.image.url">
                <p>
                    {{data.description}}
                </p> 
            </div>
        </a>
    </div>    
</template>
<script>
const mql = require('@microlink/mql')
export default {
    name: 'TimeLineItem',
    props: ['url','index'],
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
        console.log({...this.index})
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
        indexComputed: function() { return this.index},
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
    background: #aaa;
}
.container-img img {
    width: 100%;
}
.container-img {
    display: block;
    width: auto;
    position:relative;
    overflow: hidden;
}
p{
    background: rgba($color: #000000, $alpha: .9);
    position:absolute;
    bottom: -15px;
    color: white;
    padding: 15px 15px;
    text-align: justify;
    width: auto;
    font-size: 1.1rem;
}
a {
    color: none;
    text-decoration: none;
}
a:hover{
    opacity: .8;
    p {
        transition: 1s all ease-in-out;
        transform: translateY(40px);
    }
}
</style>