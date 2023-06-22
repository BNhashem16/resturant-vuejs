<template>
    <form @click.prevent>
        <div class="row g-3 align-items-center">
            <h1>Signup</h1>
            <div class="col-auto d-block mx-auto">
                <input
                    type="text"
                    class="form-control"
                    name=""
                    placeholder="Enter your name"
                />
            </div>
        </div>

        <div class="row g-3 align-items-center">
            <div class="col-auto d-block mx-auto">
                <input
                    type="text"
                    class="form-control"
                    name=""
                    placeholder="Enter your email"
                />
            </div>
        </div>

        <div class="row g-3 align-items-center">
            <div class="col-auto d-block mx-auto">
                <input
                    type="text"
                    class="form-control"
                    name=""
                    placeholder="Enter your password"
                />
            </div>
        </div>

        <div class="row g-3 align-items-center">
            <div class="col-auto d-block mx-auto">
                <button type="submit" class="btn btn-primary">Signup</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SignupForm',
}
</script>

<style>
</style>