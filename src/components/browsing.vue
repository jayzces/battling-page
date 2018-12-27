<template>
    <div class="browsing">
        <AppMain></AppMain>
        <AppNav></AppNav>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'Browsing',
        components: {
            AppNav: require('./nav').default,
            AppMain: require('./main').default
        }
    }
</script>
