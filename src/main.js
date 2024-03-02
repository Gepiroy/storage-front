import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//import Vue from 'vue'
//import VueQrcodeReader from "vue-qrcode-reader"

//Vue.use(VueQrcodeReader)

const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')
