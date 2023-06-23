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
                <div class="error" v-if="v$.name.$error">
                    {{ v$.name.$errors[0].$message }}
                </div>
            </div>
        </div>

        <div class="row g-3 align-items-center">
            <div class="col-4 d-block mx-auto my-3">
                <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    placeholder="Enter your email"
                />

                <div class="error" v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}
                </div>
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
                <button
                    type="submit"
                    @click="signup()"
                    class="col-4 btn btn-primary m-1"
                >
                    Signup
                </button>
                <button
                    type="button"
                    @click="redirectTo({ name: 'login' })"
                    class="col-4 btn btn-primary m-1"
                >
                    Login
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
    name: 'SignupForm',
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            name: '',
            password: '',
            email: '',
        }
    },
    validations() {
        return {
            name: { required, minLength: minLength(6) },
            email: { required, email },
        }
    },
    methods: {
        ...mapActions(['redirectTo']),
        signup() {
            this.v$.$validate()
        },
    },
}
</script>

<style>
</style>
