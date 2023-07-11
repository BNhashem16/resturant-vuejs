<template>
    <div class="container">
        <NavbarComponent></NavbarComponent>
        <UpdateProfileComponent></UpdateProfileComponent>
    </div>
</template>

<script>
import NavbarComponent from '../components/Header/NavbarComponent'
import UpdateProfileComponent from '@/components/Profile/UpdateProfileComponent.vue'

export default {
    components: {
        NavbarComponent,
        UpdateProfileComponent,
    },
}
</script>

<style>
</style>