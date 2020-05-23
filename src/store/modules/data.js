const state = {
    noticias: [
        {id : 1 , title: 'Humerez: intermediario español tenía contacto directo con Navajas',            url: 'https://www.la-razon.com/nacional/2020/05/22/testigo-clave-dice-que-un-intermediario-espanol-tenia-contacto-directo-con-navajas/',            content: 'contenido 1' , fecha:'2020-05-01',},
        {id : 2 , title: 'Más de un Millon de dólares por comisión',             url: 'https://eldeber.com.bo/180301_tres-intermediarios-iban-a-cobrar-mas-de-un-millon-de-dolares-de-comision-por-los-respiradores',            content: 'contenido 2' ,             fecha:'2020-05-02'},
        {id : 3 , title: 'Empresa COSIN presentó oferta menor',             url: 'https://twitter.com/DetrasdelaV/status/1262841957178540039',            content: '' ,             fecha:'2020-05-19'},
    ]
}
const getters = {
    getNoticias: (state) => state.noticias
}
const actions = {
    addNoticia: function({commit},noticia){
        commit('setNoticia',noticia)
    }
}
const mutations = {
    setNoticia: (state,noticia) => state.noticias.push(noticia)
}
export default {
    state,
    getters,
    actions,
    mutations,
}