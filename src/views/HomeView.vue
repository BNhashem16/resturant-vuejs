<template>
    <div class="home">Home</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'HomeView',

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
