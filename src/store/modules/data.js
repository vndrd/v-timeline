const state = {
    noticias: [
        {id : 1 , title: 'Humerez: intermediario español tenía contacto directo con Navajas', content: 'contenido 1', fecha:'2020-05-23',
            url: 'https://www.la-razon.com/nacional/2020/05/22/testigo-clave-dice-que-un-intermediario-espanol-tenia-contacto-directo-con-navajas/',},
        {id : 2 , title: 'Más de un Millon de dólares por comisión', content: '', fecha:'2020-05-23',
            url: 'https://eldeber.com.bo/180301_tres-intermediarios-iban-a-cobrar-mas-de-un-millon-de-dolares-de-comision-por-los-respiradores',},
        {id : 3 , title: 'Empresa COSIN presentó oferta menor', content: '', fecha:'2020-05-19',
            url: 'https://twitter.com/DetrasdelaV/status/1262841957178540039',},
        {id : 4 , title: 'BID anuncia la compra de ventiladores', content: '', fecha:'2020-05-14',
            url: 'https://www.iadb.org/es/noticias/bid-financia-la-compra-de-170-ventiladores-de-emergencia-para-bolivia'},
        {id : 5 , title: '', content: '', fecha:'2020-05-15',
            url: 'https://www.la-razon.com/sociedad/2020/05/15/intensivistas-dicen-que-respirados-comprados-no-son-aptos-para-pacientes-criticos-covid-19/'},
        {id : 6 , title: 'Min. Salud anuncia llegada de respiradores', content: '', fecha:'2020-05-14',
            url: 'https://www.minsalud.gob.bo/4166-170-respiradores-llegaron-al-pais-para-atencion-contra-el-covid-19'},
        {id : 7 , title: '', content: '', fecha:'2020-05-14',
            url: 'https://www.opinion.com.bo/articulo/pais/anez-entrega-primeros-170-respiradores-500-anunciados-abril/20200514223822767725.html'},
        {id : 8 , title: 'Ministro de Salud, Marcelo Navajas, admite que equipos son sólo para emergencias.', content: '', fecha:'2020-05-15',
            url: 'https://eldeber.com.bo/179346_los-respiradores-que-compro-el-gobierno-no-son-aptos-para-terapia-intensiva'},
        {id : 9 , title: 'Embajador de Ciencia y Tecnología anuncia 500 respiradores', content: '', fecha:'2020-04-01',
            url: 'https://www.facebook.com/jeanineanezc/videos/mohammed-mostajo-radji-nuestro-embajador-de-ciencia-tecnolog%C3%ADa-e-innovaci%C3%B3n-nos-/527139861552483/'},        
        {id : 10 , title: '', content: '', fecha:'2020-05-24',
            url: 'https://www.la-razon.com/nacional/2020/05/24/envian-a-la-carcel-al-exministro-navajas-por-el-caso-de-los-respiradores/'},        
        {id : 11 , title: 'Min. Navajas: Respiradores "Sirven para terapia intensiva" ', content: '', fecha:'2020-05-15',
            url: 'https://www.minsalud.gob.bo/4169-ministro-de-salud-aclara-caracteristicas-de-los-respiradores-espanoles-adquiridos-por-el-gobierno-para-salvar-vidas'},                    
        {id : 12 , title: '', content: '', fecha:'2020-05-16',
            url: 'https://exitonoticias.com.bo/index.php/2020/05/16/tras-criticas-ministro-mostajo-aclaro-que-respiradores-seran-utilizados-en-transporte-de-enfermos-y-en-terapia-intermedia/'},                    
        {id : 13 , title: 'El presidente de la Sociedad Boliviana de Medicina Crítica y Terapia Intensiva de Santa Cruz, José Luis Prieto, anunció que no utilizarán los respiradores españoles', content: '', fecha:'2020-05-16',
            url: 'https://erbol.com.bo/nacional/gobierno-y-m%C3%A9dicos-suben-la-pol%C3%A9mica-por-la-calidad-de-los-respiradores-espa%C3%B1oles'},                    


            
            
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