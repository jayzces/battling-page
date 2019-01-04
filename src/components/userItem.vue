<template>
    <div class="user">
        <div class="progressive replace"
            :data-href="user.avatar">
            <img class="preview"
                :src="user.preview"
                :alt="user.name + '\'s avatar'" />
        </div>
        <div class="details">
            <div class="name">{{ user.name }}</div>
            <div class="location">{{ user.city }}, {{ user.country }}</div>
        </div>
        <div class="buttons">
            <button class="following-btn"
                v-if="user.following"
                v-on:click="user.following = !user.following">Following</button>
            <button class="follow-btn"
                v-else
                v-on:click="user.following = !user.following">Follow</button>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'UserItem',
        props: ['user']
    }
</script>


<style scoped>
    .user {
        display: flex;
        align-items: center;
        opacity: 0;
        animation: showItem var(--duration) var(--timing) forwards;
    }

    .user:not(:first-child) {
        margin-top: 15px;
    }

    .buttons {
        flex-shrink: 0;
    }

    .progressive {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .details {
        flex-grow: 1;
        padding-left: 15px;
    }

    .name {
        font-weight: 600;
    }

    .location {
        font-size: 12px;
        opacity: 0.7;
    }

    button {
        background-color: transparent;
        padding: 0 10px;
        line-height: 30px;
        text-transform: uppercase;
        font-size: 12px;
        color: var(--main-accent-color);
        border-radius: 15px;
        border: 1px solid transparent;
    }

    .follow-btn {
        border-color: var(--main-accent-color);
    }
</style>
