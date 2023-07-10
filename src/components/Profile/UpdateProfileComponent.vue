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
                <div class="error" v-if="v$.name.$error">
                    {{ v$.name.$errors[0].$message }}
                </div>
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

                <div class="error" v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}
                </div>
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

                <div class="error" v-if="v$.password.$error">
                    {{ v$.password.$errors[0].$message }}
                </div>
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
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import axiosInstance from '@/axiosInstance'
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions(['redirectTo']),
        async updateProfileNow() {
            this.v$.$validate()
            if (!this.v$.$error) {
                console.log('valid')
                let result = await axiosInstance.put(`users/${this.id}`, {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })
                if (result.status == 200) {
                    localStorage.setItem('user', JSON.stringify(result.data))
                    this.redirectTo({name: 'profile'})
                } else {

                }
            } else {
                console.log('not valid')
            }
        },
    },
    data() {
        return {
            v$: useValidate(),
            id: '',
            name: '',
            email: '',
            password: '',
        }
    },
    validations() {
        return {
            name: { required },
            email: { required, email },
            password: { required },
        }
    },
    mounted() {
        let user = localStorage.getItem('user')
        if (user) {
            this.id = JSON.parse(user).id
            this.name = JSON.parse(user).name
            this.email = JSON.parse(user).email
            this.password = JSON.parse(user).password
        }
    },
}
</script>

<style>
</style>