<template>
    <div class="open-detail">
        <main>

            <div class="video-mockup">
                <img src="https://images.unsplash.com/photo-1545684685-070d2a82fd28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
            </div>
        </main>

        <AppNav></AppNav>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'OpenDetail',
        components: {
            AppNav: require('./nav').default
        }
    }
</script>
