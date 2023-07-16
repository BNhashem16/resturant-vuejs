<template>
    <div>
        <NavbarComponentVue></NavbarComponentVue>

        <add-new-location-component></add-new-location-component>
    </div>
</template>

<script>
import AddNewLocationComponent from '@/components/Location/AddNewLocationComponent.vue'
import NavbarComponentVue from '@/components/Header/NavbarComponent.vue'

export default {
    components: {
        AddNewLocationComponent,
        NavbarComponentVue,
    },
}
</script>

<style>
</style>