<template>
    <form @click.prevent>
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
                    Login
                </button>
                <button
                    type="button"
                    @click="redirectTo({ name: 'signup' })"
                    class="col-4 btn btn-primary m-1"
                >
                    Signup
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            name: '',
            password: '',
            email: '',
        }
    },

    methods: {
        ...mapActions(['redirectTo']),
    },
}
</script>

<style>
</style>