<template>
    <form @click.prevent>
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
import { required, email, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

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
        return {}
    },

    methods: {
        ...mapActions(['redirectTo']),
        login() {
            this.errors.$validate()
        },
    },
}
</script>

<style>
</style>