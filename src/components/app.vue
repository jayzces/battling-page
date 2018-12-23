<template>
    <div class="app">
        <AppMain></AppMain>
        <AppNav></AppNav>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'App',
        components: {
            AppNav: require('./nav.vue').default,
            AppMain: require('./main.vue').default
        }
    }
</script>


<style scoped>
    .app {
        display: flex;
        flex-direction: column;
        width: 100vw;
        min-height: 100vh;
    }
</style>
