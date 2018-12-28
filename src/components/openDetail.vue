<template>
    <div class="open-detail main">
        <router-link :to="{ name: 'Browsing' }" class="back-wrapper">
            <i class="back-icon">Back</i>
        </router-link>

        <VideoMock></VideoMock>

        <div class="creator">
            <div class="user">
                <img src="https://images.unsplash.com/photo-1505962758314-85bfe836a5b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />

                <div class="details">
                    <div class="title">Tournament Creator</div>
                    <div class="name">Elliott Matthewson</div>
                    <div class="location">Vienna, Austria</div>
                </div>
            </div>

            <div class="buttons">
                <button class="follow-btn"
                    v-if="!following"
                    v-on:click="following = !following">Follow</button>
                <button class="following-btn"
                    v-else
                    v-on:click="following = !following">Following</button>
            </div>
        </div>

        <div class="description">
            <div class="section-title">Description</div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div class="timer-and-prize">
            <div class="timer-container">
                <i class="timer-icon">timer</i>
                <div class="timer">
                    <span class="days">03</span>
                    <span class="hours">23</span>
                    <span class="mins">59</span>
                    <span class="secs">59</span>
                </div>
            </div>

            <div class="tournament-prize">
                Prizes: <span>$ 250.00</span>
            </div>
        </div>

        <div class="prizes">
            <PrizeItem
                v-for="prize in prizes"
                :prize="prize"
                :key="prize.id"
            ></PrizeItem>
        </div>

        <div class="tabs">
            <!-- <div class="tabs-item active"
                v-on:click="openTab">Comments</div>
            <div class="tabs-item"
                v-on:click="openTab">Official Rules</div>
            <div class="tabs-item"
                v-on:click="openTab">Voting Mechanics</div> -->
            <router-link
                :to="{ name: 'CommentsTab' }"
                class="tabs-item">Comments</router-link>
            <router-link
                :to="{ name: 'RulesTab' }"
                class="tabs-item">Official Rules</router-link>
            <router-link
                :to="{ name: 'MechanicsTab' }"
                class="tabs-item">Voting Mechanics</router-link>
        </div>

        <div class="tab-contents">
            <router-view></router-view>
        </div>
    </div>
</template>


<script type="text/javascript">
    var appData = require('../data').default

    export default {
        name: 'OpenDetail',
        components: {
            VideoMock: require('./video').default,
            PrizeItem: require('./prizeItem').default
        },
        data: function() {
            return {
                following: false,
                prizes: appData.prizesData
            }
        }
    }
</script>


<style scoped>
    .main {
        padding-top: calc(100% / 16 * 9);
    }

    .back-wrapper {
        position: fixed;
        display: flex;
        top: 15px;
        left: 15px;
        z-index: 4;
    }

    .back-icon {
        background: url('/assets/back.svg') no-repeat;
        background-size: cover;
        display: inline-block;
        width: 20px;
        height: 20px;
        font-size: 0;
    }

    .creator {
        padding: 10px 15px 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .user {
        display: flex;
        align-items: center;
    }

    .user img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        object-position: center;
        flex-shrink: 0;
        border-radius: 50%;
    }

    .details {
        padding-left: 10px;
    }

    .details .title {
        font-size: 10px;
        opacity: 0.4;
    }

    .details .name {
        font-weight: 600;
    }

    .details .location {
        font-size: 12px;
        opacity: 0.7;
    }

    button {
        background-color: transparent;
        padding: 0 10px;
        line-height: 30px;
        text-transform: uppercase;
        font-family: inherit;
        font-size: 12px;
        color: var(--main-accent-color);
        border-radius: 15px;
        border: 1px solid transparent;
    }

    .follow-btn {
        border-color: var(--main-accent-color);
    }

    .description {
        padding: 5px 15px 0;
    }

    .section-title {
        font-size: 12px;
        opacity: 0.7;
    }

    p {
        margin: 5px 0 0;
        font-size: 12px;
    }

    .timer-and-prize {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
    }

    .tournament-prize {
        font-weight: 600;
        font-size: inherit;
        color: var(--white200);
    }

    .tournament-prize span {
        font-weight: 700;
        color: var(--main-accent-color);
    }

    .prizes {
        display: grid;
        grid-gap: 0;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 80px 80px;
    }

    .tabs {
        display: flex;
        align-items: center;
        width: 100%;
        overflow-x: auto;
    }

    .tabs-item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        padding: 0 15px;
        height: 48px;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        font-weight: 600;
        color: var(--white200);
        border-bottom: 2px solid rgba(255, 255, 255, 0.10);
    }

    .tabs-item.router-link-exact-active {
        color: var(--main-accent-color);
        border-bottom-color: var(--main-accent-color);
    }

    .tab-contents {
        padding-top: 15px;
    }
</style>
