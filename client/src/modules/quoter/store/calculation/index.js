import state from './state'
import * as mutations from './mutations'

const calculationStore = {
    namespaced: true,
    state,
    mutations
}

export default calculationStore