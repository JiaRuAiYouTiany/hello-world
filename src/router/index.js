import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/HelloWorld';
import Foo from '../components/Foo';
import Bar from '../components/Bar';
import User from '../components/User';
import Profile from '../components/Profile';
import Posts from '../components/Posts';
const routes = [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/user/:id', component: User, children: [
        {
            path: 'profile',
            component: Profile
        },
        {
            path: 'posts',
            component: Posts
        }
    ] }
]
var router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;