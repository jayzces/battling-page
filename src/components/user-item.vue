<template>
    <div class="user-item">
        <div class="avatar">
            <img :src="user.avatar" :alt="user.name + '\'s avatar'" />
        </div>
        <div class="details">
            <div class="name">{{ user.name }}</div>
            <div class="location">{{ user.city }}, {{ user.country }}</div>
        </div>
        <div class="buttons">
            <button class="following-btn" v-if="user.following">Following</button>
            <button class="follow-btn" v-else>Follow</button>
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
    .user-item {
        display: flex;
        align-items: center;
        opacity: 0;
        animation: showItem var(--delay) var(--timing) forwards;
    }

    .user-item:not(:first-child) {
        margin-top: 15px;
    }

    .avatar,
    .buttons {
        flex-shrink: 0;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }

    .details {
        flex-grow: 1;
        padding-left: 15px;
    }

    .name {
        font-weight: 600;
    }

    .location {
        font-size: 14px;
        opacity: 0.7;
    }

    button {
        background-color: transparent;
        padding: 0 10px;
        line-height: 30px;
        font-family: inherit;
        font-size: 14px;
        color: var(--main-accent-color);
        border-radius: 15px;
    }

    @media all and (max-width: 480px) {
        .location,
        button {
            font-size: 12px;
        }
    }

    .follow-btn {
        border: 1px solid var(--main-accent-color);
    }

    .following-btn {
        border: 0;
    }
</style>
