<template>
    <div class="container-item">
        <a :href="data.url">
            <div class="container-img" :data-publiser="data.publisher">
                <img v-if="imagen" :src="data.image.url" alt="qwe">
            </div>
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
    border-radius: 0 0 10px 10px;
    background: #888;
}
.container-img img {
    width: 100%;
    float: left;
}
.container-img {
    width: 120px;
    
    float: left;
}
p{
    width: 140px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(80px) translateY(-39px);
    color: #fff;
    background: #888;
    padding: 10px;
    font-size: .8rem;
    text-align: left;
}
a {
    text-decoration: none;
    position:relative;
}
a:hover{
    opacity: .8;
}
</style>