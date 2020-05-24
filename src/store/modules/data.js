const state = {
    noticias: [
        {id : 1 , title: 'Humerez: intermediario español tenía contacto directo con Navajas', content: 'contenido 1', fecha:'2020-05-01',
            url: 'https://www.la-razon.com/nacional/2020/05/22/testigo-clave-dice-que-un-intermediario-espanol-tenia-contacto-directo-con-navajas/',},
        {id : 2 , title: 'Más de un Millon de dólares por comisión', content: 'contenido 2', fecha:'2020-05-02',
            url: 'https://eldeber.com.bo/180301_tres-intermediarios-iban-a-cobrar-mas-de-un-millon-de-dolares-de-comision-por-los-respiradores',},
        {id : 3 , title: 'Empresa COSIN presentó oferta menor', content: '', fecha:'2020-05-19',
            url: 'https://twitter.com/DetrasdelaV/status/1262841957178540039',},
        {id : 4 , title: 'BID anuncia la compra de ventiladores', content: '', fecha:'2020-05-14',
            url: 'https://www.iadb.org/es/noticias/bid-financia-la-compra-de-170-ventiladores-de-emergencia-para-bolivia'},
        {id : 5 , title: 'Intensivisstas: Respiradores no son aptos', content: '', fecha:'2020-05-15',
            url: 'https://www.la-razon.com/sociedad/2020/05/15/intensivistas-dicen-que-respirados-comprados-no-son-aptos-para-pacientes-criticos-covid-19/'},

        
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