<template>
    <h1>Profile</h1>

    <form @click.prevent>
        <div class="row align-items-center">
            <div class="col-4 my-3">
                <input
                    type="text"
                    class="form-control"
                    v-model="name"
                    placeholder="Enter your name"
                />
            </div>
        </div>

        <div class="row g-3 align-items-center">
            <div class="col-4 my-3">
                <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    placeholder="Enter your email"
                />
            </div>
        </div>

        <div class="row g-3 align-items-center">
            <div class="col-4 my-3">
                <input
                    type="text"
                    class="form-control"
                    v-model="password"
                    placeholder="Enter your password"
                />
            </div>
        </div>

        <div class="row align-items-center">
            <div class="col-4 my-3">
                <button
                    type="submit"
                    @click="updateProfileNow()"
                    class="col-4 btn btn-primary m-1"
                >
                    Update
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    methods: {
        updateProfile() {},
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    mounted() {
        let user = localStorage.getItem('user')
        if (user) {
            this.name = JSON.parse(user).name
            this.email = JSON.parse(user).email
            this.password = JSON.parse(user).password
        }
    },
}
</script>

<style>
</style>