import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './router'
import VueNumberInput from '@chenfengyuan/vue-number-input';

createApp(App)
.use(VueSweetalert2)
.use(router)
.component(VueNumberInput.name, VueNumberInput)
.mount('#app')
