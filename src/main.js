import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import FormField from './components/FormField.vue'

//import Vue from 'vue'
//import VueQrcodeReader from "vue-qrcode-reader"

//Vue.use(VueQrcodeReader)

const app = createApp(App)

app.component('form-field', FormField)

app.use(createPinia())
app.use(router)

app.mount('#app')
