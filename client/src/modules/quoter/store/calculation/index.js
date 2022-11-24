import state from './state'
import * as mutations from './mutations'
import VuexPersistence from 'vuex-persist'

const calculationStore = {
    namespaced: true,
    state,
    mutations,
    plugins: [
        new VuexPersistence({
            key: 'vuex',
            storage: window.sessionStorage
        }).plugin
    ]
}

export default calculationStore