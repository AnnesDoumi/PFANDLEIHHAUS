// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Conditions from '../views/Conditions.vue';
import Sales from '../views/Sales.vue';
import Contact from '../views/Contact.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/conditions', component: Conditions },
    { path: '/sales', component: Sales },
    { path: '/contact', component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;