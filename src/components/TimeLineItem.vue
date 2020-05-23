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
    overflow: hidden;
    border: 5px solid #aaa;
    border-radius: 10px;
    margin: 10px;
    background: #888;
}
.container-img img {
    width: 100%;
}
.container-img {
    max-height: 150px;
    overflow: hidden;
    position:relative;
}
.container-img::after{
    content: attr(data-publiser);
    font-size: .9rem;
    width: 100%;
    height: 20px;
    position:absolute;
    bottom: 0;
    left:0;
    padding-left: 10px ;
    padding-right: 10px ;
    color: white;
    background: rgba($color: #333, $alpha: .8) ;
    z-index: 99999;
    overflow: hidden;
    text-overflow: ellipsis; 
     white-space: nowrap; 
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
a:hover{
    opacity: .8;
}
</style>