<template>
    <form @click.prevent>
        <div class="row g-3 align-items-center">
            <div
                class="col-4 mx-auto error-container"
                v-if="errors_backend !== ''"
            >
                {{ errors_backend }}
            </div>
        </div>
        <div class="row g-3 align-items-center">
            <div class="col-4 d-block mx-auto my-3">
                <input
                    type="text"
                    class="form-control"
                    v-model="state.email"
                    placeholder="Enter your email"
                />
                <div class="error" v-if="errors.email.$error">
                    {{ errors.email.$errors[0].$message }}
                </div>
            </div>
        </div>

        <div class="row g-3 align-items-center">
            <div class="col-4 d-block mx-auto my-3">
                <input
                    type="text"
                    class="form-control"
                    v-model="state.password"
                    placeholder="Enter your password"
                />
            </div>
        </div>

        <div class="row align-items-center">
            <div class="col-6 mx-auto">
                <button
                    type="submit"
                    @click="login()"
                    class="col-4 btn btn-primary m-1"
                >
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

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import axiosInstance from '@/axiosInstance'
export default {
    setup() {
        const state = reactive({
            email: '',
            password: '',
        })
        const rules = computed(() => {
            return {
                email: {
                    required,
                },
                password: { required },
            }
        })
        const errors = useVuelidate(rules, state)
        return { state, errors }
    },
    data() {
        return {
            errors_backend: '',
        }
    },
    mounted() {
        let user = localStorage.getItem('user')
        if (user) {
            this.redirectTo({ name: 'signup' })
        }
    },

    methods: {
        ...mapActions(['redirectTo']),
        async login() {
            this.errors.$validate()

            if (!this.errors.$error) {
                let result = await axiosInstance.get(
                    `users?email=${this.state.email}&password=${this.state.password}`
                )
                if (result.status == 200 && result.data.length > 0) {
                    localStorage.setItem('user', JSON.stringify(result.data[0]))
                    this.redirectTo({name: 'home'})
                } else {
                    this.errors_backend = 'user not found'
                }
            }
        },
    },
}
</script>

<style>
</style>