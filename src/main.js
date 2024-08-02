
import { createApp } from 'vue'
import App from './App.vue'
import LaYout from '@/components/layout.vue';
import router from '@/router/index.js';




const app =  createApp(App)  ;
app.use(router);                       
//Utulisation du layout comme composant global 
app.component('LaYout',LaYout);

app.mount('#app');