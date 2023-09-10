import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"

import '@/assets/main.css'
import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
