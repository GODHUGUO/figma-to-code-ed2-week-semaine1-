import { createRouter,createWebHistory } from "vue-router";
import LaYout from '@/components/layout.vue'; 





const routes =[
    {
   
    path:'/',
      component:LaYout,
    children:[
     {path: '',component:()=>import('@/components/home.vue')},
   
      
    ],
   
    },
   
   
    ];
    
   
    const router = createRouter ({
        history : createWebHistory(),
        routes,
    });
    export default router