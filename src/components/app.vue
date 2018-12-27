<template>
    <div class="app">
        <router-view></router-view>
        <AppNav></AppNav>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'App',
        components: {
            AppNav: require('./nav').default,
        }
    }
</script>


<style scoped>
    .app {
        width: 100vw;
        min-height: 100vh;
    }
</style>
