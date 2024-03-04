import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: () => import('@/views/Menu.vue')
    },
    {
        path: '/Book',
        name: 'Book',
        component: () => import('@/views/Book.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
}) 

export default router