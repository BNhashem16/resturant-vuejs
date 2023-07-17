<template>
    <div>
        <NavbarComponent></NavbarComponent>
        <h1>Delete Location # {{ id }}</h1>
        <!-- form to make sure user wants to delete location -->
        <form @submit.prevent="deleteLocation">
            <h1>Are you sure you want to delete this location?</h1>
            <!-- show location data -->
            {{ name }} <br />
            {{ phone }} <br />
            {{ address }} <br />

            <button type="submit" class="btn btn-danger mx-3">Yes</button>
            <button
                class="btn btn-primary"
                @click.prevent="redirectTo({ name: 'home' })"
            >
                No
            </button>
        </form>
    </div>
</template>

<script>
import NavbarComponent from '@/components/Header/NavbarComponent.vue'
import { mapActions } from 'vuex'
import axiosInstance from '@/axiosInstance'
import Swal from 'sweetalert2'

export default {
    components: {
        NavbarComponent,
    },
    data() {
        return {
            name: '',
            phone: '',
            address: '',
            id: '',
            user_id: '',
        }
    },
    methods: {
        ...mapActions(['redirectTo']),
        async deleteLocation() {
            await axiosInstance
                .delete(`/locations/${this.id}?user_id=${this.user_id}`)
                .then((response) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Location Deleted Successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                    setTimeout(() => {
                        this.redirectTo({ name: 'home' })
                    }, 1500)
                })
                .catch((error) => {
                    console.log(error)
                    this.redirectTo({ name: 'home' })
                })
        },
    },

    async mounted() {
        let location_id = this.$route.params.location_id

        let user = localStorage.getItem('user')
        if (user) {
            this.id = location_id
            this.user_id = JSON.parse(user).id
        } else {
            this.redirectTo({ name: 'home' })
        }

        await axiosInstance
            .get(`/locations?id=${this.id}&user_id=${this.user_id}`)
            .then((response) => {
                this.name = response.data[0].name
                this.phone = response.data[0].phone
                this.address = response.data[0].address
            })
            .catch((error) => {
                console.log(error)
            })
    },
}
</script>


<style>
</style>