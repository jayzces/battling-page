<template>
    <nav>
        <div class="tab">
            <i class="icon feed-icon"></i>
        </div>
        <div class="tab active">
            <i class="icon trophy-icon"></i>
        </div>
        <div class="tab">
            <i class="icon profile-icon"></i>
        </div>
    </nav>
</template>


<script type="text/javascript">
    export default {
        name: 'AppNav'
    }
</script>


<style scoped>
    nav {
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 64px;
    }

    .tab {
        background-color: #121212;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% / 3);
    }

    .active {
        background-color: var(--main-accent-color);
    }

    .active .icon {
        opacity: 1;
    }

    .icon {
        background-repeat: no-repeat;
        background-size: cover;
        display: inline-block;
        position: relative;
        width: 32px;
        height: 32px;
        opacity: 0.7;
    }

    .feed-icon {
        background-image: url('/assets/dashboard.svg');
    }

    .trophy-icon {
        background-image: url('/assets/trophy.svg');
    }

    .profile-icon {
        background-image: url('/assets/user.svg');
    }
</style>
