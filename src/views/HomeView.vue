<template>
    <NavbarComponent></NavbarComponent>
    <div class="home">Home</div>
    <div class="text-end">
        <p class="text-end">welcome {{ userName }}</p>
        <router-link :to="{ name: 'profile' }">
            <button class="btn btn-info" type="button">Profile</button>
        </router-link>
    </div>

    <AddNewLocationComponent></AddNewLocationComponent>
    <UserLocationComponent
        :allLocations="listOfLocations"
    ></UserLocationComponent>
</template>

<script>
import NavbarComponent from '../components/Header/NavbarComponent'
import AddNewLocationComponent from '@/components/Location/AddNewLocationComponent'
import UserLocationComponent from '@/components/Location/UserLocationComponent'
import { mapActions } from 'vuex'
import axiosInstance from '@/axiosInstance'

export default {
    components: {
        NavbarComponent,
        AddNewLocationComponent,
        UserLocationComponent,
    },
    data() {
        return {
            userName: '',
            user_id: '',
            listOfLocations: [],
        }
    },
    async mounted() {
        let user = localStorage.getItem('user')
        if (!user) {
            this.redirectTo({ name: 'signup' })
        } else {
            this.userName = JSON.parse(user).name
            this.user_id = JSON.parse(user).id
        }
        let results = await axiosInstance.get(
            `/locations?user_id=${this.user_id}`
        )
        if (results.status == 200 && results.data.length > 0) {
            this.listOfLocations = results.data
        }
    },
    methods: {
        ...mapActions(['redirectTo']),
    },
}
</script>
