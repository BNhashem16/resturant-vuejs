<template>
    <ul id="nav">
        <router-link
            :to="{ name: 'home', params: { page_title: 'Home' } }"
            exact
        >
            <a href="">Home</a>
        </router-link>
        <a @click="logout()">Logout</a>
    </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions(['redirectTo']),
        logout() {
            localStorage.clear()
            this.redirectTo({ name: 'login' })
        },
    },
}
</script>

<style lang="scss" scoped>
$fontColor: darkcyan;
$navColor: #525a5a;
ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-bottom: 50px;
    a {
        text-decoration: none;
        font-weight: bold;
        color: $fontColor;
        padding: 10px;
    }
}
a.router-link-exact-active a,
ul,
a:hover {
    color: $navColor;
    box-shadow: 0 0 10px $navColor;
}
</style>