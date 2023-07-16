import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import ProfileView from '../views/ProfileView.vue'
import UpdateProfileView from '../views/UpdateProfileView.vue'
import LocationsCreateView from '../views/LocationsCreateView.vue'
import ErrorPageView from '../views/ErrorPageView.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/sign-up',
        name: 'signup',
        component: Signup,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
    },
    {
        path: '/update-profile',
        name: 'updateProfile',
        component: UpdateProfileView,
    },
    {
        path: '/locations',
        name: 'locations.store',
        component: LocationsCreateView,
    },
    // stay at the bottom
    {
        path: '/:catchAll(.*)',
        name: 'ErrorPage',
        component: ErrorPageView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to, from, next) => {
    if (to.params.pageTitle !== undefined) {
        document.title = `${to.params.pageTitle} | ${process.env.VUE_APP_TITLE}`    
  
    } else {
        if (to.name == null) {
            document.title = process.env.VUE_APP_TITLE
        } else {
            document.title = `${to.name} | ${process.env.VUE_APP_TITLE}`
        }
    }
    next()
})

export default router
