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
                                <label
                                    class="col-form-label"
                                    >Name:</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div class="mb-3">
                                    <label
                                    class="col-form-label"
                                    >Phone Number:</label
                                >
                               <input
                                    type="text"
                                    class="form-control"
                                    v-model="phone"
                                    placeholder="Enter your phone"
                                />
                            </div>
                            <div class="mb-3">
                                    <label
                                    class="col-form-label"
                                    >Address:</label
                                >
                               <input
                                    type="text"
                                    class="form-control"
                                    v-model="address"
                                    placeholder="Enter your address"
                                />
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
                        <button type="button" class="btn btn-primary">
                            Add Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            phone: '',
            email: '',
        }
    }
}
</script>

<style>
</style>