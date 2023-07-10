<template>
    <div class="container">
        <NavbarComponent></NavbarComponent>
        <ProfileFormComponent></ProfileFormComponent>
    </div>
</template>

<script>
import NavbarComponent from '../components/Header/NavbarComponent'
import ProfileFormComponent from '@/components/Profile/ProfileFormComponent.vue'


export default {
    components: {
    NavbarComponent,
        ProfileFormComponent,
    },
}
</script>

<style>
</style>