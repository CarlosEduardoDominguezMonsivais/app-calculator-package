import { createStore } from "vuex"
import calculationStore from './calculation'

export default createStore({
    modules: {
        calculation: calculationStore
    }
})

