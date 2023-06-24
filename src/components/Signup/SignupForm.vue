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
// import axios from 'axios'
import axiosInstance from '@/axiosInstance'

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
    mounted() {
        let user = localStorage.getItem('user')
        if (user) {
            this.redirectTo({ name: 'home' })
        }
    },

    methods: {
        ...mapActions(['redirectTo']),
        async signup() {
            this.v$.$validate()
            if (!this.v$.$error) {
                let result = await axiosInstance.post('/users', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })
                if (result.status == 201) {
                    localStorage.setItem('user', JSON.stringify(result.data))
                    this.redirectTo({ name: 'home' })
                } else {
                    console.log('error')
                }
                // .then((response) => {
                //     console.log('success')
                // })
                // .catch((error) => {
                //     // Handle the error
                // })
            }
        },
    },
}
</script>

<style>
</style>
