<template>
    <div>
        <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
        >
            Add New Location
        </button>

        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Add New Restaurant
                        </h1>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <form @click="prevent">
                            <div class="mb-3">
                                <label class="col-form-label">Name:</label>
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
                            <div class="mb-3">
                                <label class="col-form-label"
                                    >Phone Number:</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="state.phone"
                                    placeholder="Enter your phone"
                                />
                                <div class="error" v-if="v$.phone.$error">
                                    {{ v$.phone.$errors[0].$message }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="col-form-label">Address:</label>
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
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            @click="addLocation()"
                            class="btn btn-primary"
                        >
                            Add Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
                    this.redirectTo({ name: 'home' })
                    setTimeout(() => {
                        this.state.name = ''
                            this.state.phone = ''
                            this.state.address = ''
                            this.v$.name.$errors[0].$message = ''
                            this.v$.phone.$errors[0].$message = ''
                            this.v$.address.$errors[0].$message = ''
                    }, 2000)
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