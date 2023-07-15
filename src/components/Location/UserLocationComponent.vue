<template>
    <table class="table caption-top" v-if="allLocations.length > 0">
        <caption>
            List of Locations ({{
                allLocations.length
            }})
        </caption>

        <thead class="table-dark">
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Number</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(location, key) in allLocations" :key="key">
                <td>{{ location.name }}</td>
                <td>{{ location.phone }}</td>
                <td>{{ location.address }}</td>
                <td>{{ location.address }}</td>
                <td>Delete | Update </td>
            </tr>
        </tbody>
    </table>
    <div v-else class="alert alert-warning">No Locations Added yet</div>
</template>

<script>
export default {
    props: ['allLocations'],
}
</script>

<style>
</style>