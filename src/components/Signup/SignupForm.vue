<template>
    <form @click.prevent>
        <div class="row g-3 align-items-center">
            <h1>Signup</h1>
            <div class="col-4 d-block mx-auto my-3">
                <input
                    type="text"
                    class="form-control"
                    v-model="name"
                    placeholder="Enter your name"
                />
            </div>
        </div>

        <div class="row g-3 align-items-center">
            <div class="col-4 d-block mx-auto my-3">
                <input
                    type="text"
                    class="form-control"
                    v-model="email"
                    placeholder="Enter your email"
                />
            </div>
        </div>

        <div class="row g-3 align-items-center">
            <div class="col-4 d-block mx-auto my-3">
                <input
                    type="text"
                    class="form-control"
                    v-model="password"
                    placeholder="Enter your password"
                />
            </div>
        </div>

        <div class="row align-items-center">
            <div class="col-6 mx-auto">
                <button type="submit" class="col-4 btn btn-primary m-1">
                    Signup
                </button>
                <button
                    type="button"
                    @click="loginPage"
                    class="col-4 btn btn-primary m-1"
                >
                    Login
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SignupForm',
    data() {
        return {
            name: '',
            password: '',
            email: '',
        }
    },
    methods: {
        loginPage() {
            this.$router.push({name: 'login'})
        }
    },
}
</script>

<style>
</style>