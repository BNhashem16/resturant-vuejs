<template>
    <NavbarComponent></NavbarComponent>
    <div class="home">Home</div>
    <div class="text-end">
            <p class="text-end">welcome {{ userName }}</p>
    <router-link :to="{name: 'profile'}">
        <button class="btn btn-info" type="button">Profile</button>
    </router-link>
    </div>

    <AddNewLocationComponent></AddNewLocationComponent>
    
</template>

<script>
import NavbarComponent from '../components/Header/NavbarComponent'
import AddNewLocationComponent from '@/components/Location/AddNewLocationComponent'
import { mapActions } from 'vuex'
export default {
    components: {
        NavbarComponent,
        AddNewLocationComponent
    },
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
