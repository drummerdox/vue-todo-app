import Vue from 'vue';
import router from 'vue-router';
import Home from '@/views/Home';

Vue.use(router);

export default new router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        }
    ]
})
