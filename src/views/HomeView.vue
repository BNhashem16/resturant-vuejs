<template>
    <NavbarComponent></NavbarComponent>
    <div class="home">Home</div>
    <p class="text-end">welcome {{ userName }}</p>
    <router-link :to="{name: 'profile'}">
        <button class="btn btn-info" type="button">Profile</button>
    </router-link>
</template>

<script>
import NavbarComponent from '../components/Header/NavbarComponent'
import { mapActions } from 'vuex'
export default {
    components: { NavbarComponent },
    data() {
        return {
            userName: '',
        }
    },
    mounted() {
        let user = localStorage.getItem('user')
        if (!user) {
            this.redirectTo({ name: 'signup' })
        } else {
            this.userName = JSON.parse(user).name
        }
    },
    methods: {
        ...mapActions(['redirectTo']),
    },
}
</script>
