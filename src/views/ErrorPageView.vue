<template>
    <div class="container text-center">
            <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions">
                    <router-link to="/" class="btn btn-primary btn-lg">
                        <span class="glyphicon glyphicon-home"></span>
                        Take Me Home
                    </router-link>
                    <router-link to="/contact" class="btn btn-default btn-lg">
                        <span class="glyphicon glyphicon-envelope"></span>
                        Contact Support
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
</script>