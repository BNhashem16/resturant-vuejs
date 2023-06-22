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

        <div class="row g-3 align-items-center">
            <div class="col-4 d-block mx-auto my-3">
                <button type="submit" class="btn btn-primary w-100">Signup</button>
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
    }
}
</script>

<style>
</style>