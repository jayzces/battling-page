<template>
    <div class="app">
        <ul class="hidden">
            <li>
                <router-link :to="{ name: 'Browsing' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'CommentsTab' }">Open Detail</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'App'
    }
</script>


<style scoped>
    .app {
        width: 100vw;
        min-height: 100vh;
    }
</style>
