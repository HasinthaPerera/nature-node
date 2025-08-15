import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Issues from './components/Issues.vue';
import Solutions from './components/Solutions.vue';
import Community from './components/Community.vue';
import Feedback from './components/Feedback.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/issues', component: Issues },
        { path: '/solutions', component: Solutions },
        { path: '/community', component: Community },
        { path: '/feedback', component: Feedback }
    ]
});

const app = createApp({});
app.use(router);
app.mount('#app');
