<template>
    <NavbarComponent></NavbarComponent>
    <div class="home">Home</div>
</template>

<script>
import NavbarComponent from '../components/Header/NavbarComponent'
import { mapActions } from 'vuex'
export default {
    components: { NavbarComponent },

    mounted() {
        let user = localStorage.getItem('user')
        if (! user) {
            this.redirectTo({ name: 'signup' })
        }
    },
    methods: {
        ...mapActions(['redirectTo'])
    }
}
</script>
