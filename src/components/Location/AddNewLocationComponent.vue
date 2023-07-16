<template>
    <div>
        <h1>Create Location</h1>

        <form @click.prevent>
            <div class="row align-items-center">
                <div class="col-4 my-3">
                    <input
                        type="text"
                        class="form-control"
                        v-model="state.name"
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
                        v-model="state.phone"
                        placeholder="Enter your phone"
                    />
                </div>

                <div class="error" v-if="v$.phone.$error">
                    {{ v$.phone.$errors[0].$message }}
                </div>
            </div>

            <div class="row g-3 align-items-center">
                <div class="col-4 my-3">
                    <input
                        type="text"
                        class="form-control"
                        v-model="state.address"
                        placeholder="Enter your address"
                    />
                    <div class="error" v-if="v$.address.$error">
                        {{ v$.address.$errors[0].$message }}
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-4 my-3">
                    <button
                        type="submit"
                        @click="addLocation()"
                        class="col-4 btn btn-primary m-1"
                    >
                        Add New Location
                    </button>
                    <button
                        type="submit"
                        @click="redirectTo({ name: 'home' })"
                        class="col-4 btn btn-warning m-1"
                    >
                        Go To Home
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import { mapActions } from 'vuex'
import axiosInstance from '@/axiosInstance'
import Swal from 'sweetalert2'

export default {
    setup() {
        const state = reactive({
            name: '',
            phone: '',
            address: '',
        })
        const rules = computed(() => {
            return {
                name: { required, minLength: minLength(10) },
                phone: { required, minLength: minLength(10) },
                address: { required, minLength: minLength(10) },
            }
        })
        const v$ = useVuelidate(rules, state)
        return {
            state,
            v$,
        }
    },
    mounted() {
        let user = localStorage.getItem('user')
        if (user) {
            this.user_id = JSON.parse(user).id
        } else {
            this.redirectTo({ name: 'home' })
        }
    },
    data() {
        return {
            user_id: '',
        }
    },
    methods: {
        ...mapActions(['redirectTo']),
        async addLocation() {
            this.v$.$validate()
            if (!this.v$.$error) {
                let results = await axiosInstance.post('locations', {
                    user_id: this.user_id,
                    name: this.state.name,
                    phone: this.state.phone,
                    address: this.state.address,
                })
                if (results.status == 201) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                    setTimeout(() => {
                        this.state.name = ''
                        this.state.phone = ''
                        this.state.address = ''
                   
                    }, 2000)
                    this.redirectTo({ name: 'home' })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Cool',
                    })
                }
            } else {
                // show error in validation
            }
        },
    },
}
</script>

<style>
</style>