<template>
    <nav>
        <div class="tab">
            <i class="icon feed-icon">Feed</i>
        </div>

        <div class="tab button"
            v-if="this.$route.meta.upload"
            v-on:click="emitGlobalClickEvent">
            <i class="icon upload-icon">Upload</i>
        </div>
        <div class="tab active"
            v-else>
            <i class="icon trophy-icon">Tournaments</i>
        </div>

        <div class="tab">
            <i class="icon profile-icon">Profile</i>
        </div>
    </nav>
</template>


<script type="text/javascript">
    import Eventbus from '../eventbus'

    export default {
        name: 'AppNav',
        data: function () {
            return {
                clickCount: 0
            }
        },
        methods: {
            emitGlobalClickEvent: function() {
                this.clickCount++
                Eventbus.$emit('openUploadOverlay', this.clickCount)
            }
        },
        mounted: function() {
            let component = this
            Eventbus.$on('resetUploadClickCount', function() {
                component.clickCount = 0
            })
        }
    }
</script>


<style scoped>
    nav {
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: var(--nav-height);
        z-index: 10;
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

    .button {
        position: relative;
        background-color: var(--sub-accent-color);
    }

    .button::before {
        content: "";
        background-color: inherit;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 92px;
        height: 92px;
        border-radius: 50%;
    }

    .active .icon,
    .button .icon {
        opacity: 1;
    }

    .icon {
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
        position: relative;
        width: 32px;
        height: 32px;
        font-size: 0;
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

    .upload-icon {
        background-image: url('/assets/camera.svg');
    }
</style>
