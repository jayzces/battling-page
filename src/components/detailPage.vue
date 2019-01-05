<template>
    <div class="open-detail main">
        <router-link :to="{ name: 'Browsing' }" class="back-wrapper">
            <i class="back-icon">Back</i>
        </router-link>

        <VideoMock></VideoMock>

        <div class="creator">
            <div class="user">
                <div class="avatar">
                    <v-lazy-image
                        src="https://images.unsplash.com/photo-1505962758314-85bfe836a5b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80"
                        src-placeholder="/previews/creator0.jpg"
                        alt="Elliott Matthewson's avatar" />
                </div>

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

        <div class="battling-buttons"
            v-if="battling">
            <button class="matches-btn"
                v-on:click="emitGlobalClickEvent">View Matches</button>
            <button class="brackets-btn">View Brackets</button>
        </div>

        <div class="prizes">
            <PrizeItem
                v-for="prize in prizes"
                :prize="prize"
                :key="prize.id"
            ></PrizeItem>
        </div>

        <div class="tabs" :class="{ sticky: stickyNav}">
            <div class="tabs-wrap">
                <div class="tabs-list"
                    v-if="!battling">
                    <router-link
                    :to="{ name: 'OpenCommentsTab' }"
                    class="tabs-item">Comments</router-link>
                    <router-link
                    :to="{ name: 'OpenRulesTab' }"
                    class="tabs-item">Official Rules</router-link>
                    <router-link
                    :to="{ name: 'OpenMechanicsTab' }"
                    class="tabs-item">Voting Mechanics</router-link>
                </div>
                <div class="tabs-list"
                    v-else>
                    <router-link
                    :to="{ name: 'BattlingCommentsTab' }"
                    class="tabs-item">Comments</router-link>
                    <router-link
                    :to="{ name: 'BattlingRulesTab' }"
                    class="tabs-item">Official Rules</router-link>
                    <router-link
                    :to="{ name: 'BattlingMechanicsTab' }"
                    class="tabs-item">Voting Mechanics</router-link>
                </div>
            </div>
        </div>

        <div class="tab-contents">
            <router-view></router-view>
        </div>

        <UploadOverlay v-if="this.$route.meta.upload"></UploadOverlay>

        <MatchOverlay v-if="battling"></MatchOverlay>
    </div>
</template>


<script type="text/javascript">
    import Eventbus from '../eventbus'
    var appData = require('../data').default

    export default {
        name: 'DetailPage',
        components: {
            VideoMock: require('./video').default,
            PrizeItem: require('./prizeItem').default,
            UploadOverlay: require('./uploadOverlay').default,
            MatchOverlay: require('./matchOverlay').default
        },
        props: ['battling'],
        data: function() {
            return {
                following: false,
                prizes: appData.prizesData,
                stickyNav: false
            }
        },
        methods: {
            makeTabsSticky: function() {
                let tabs = document.querySelector('.tabs')
                let video = document.querySelector('.video-mock')

                window.addEventListener('scroll', () => {
                    let tabsPos = Math.floor(tabs.getBoundingClientRect().top)
                    if (tabsPos <= video.offsetHeight) {
                        this.stickyNav = true
                        let tabsWrap = tabs.querySelector('.tabs-wrap')
                        tabsWrap.style.top = `${video.offsetHeight}px`
                    } else {
                        this.stickyNav = false
                    }
                })
            },
            emitGlobalClickEvent: function() {
                Eventbus.$emit('toggleMatchOverlay')
            }
        },
        mounted: function() {
            this.makeTabsSticky()
        }
    }
</script>


<style scoped>
    .main {
        padding-top: calc(100% / 16 * 9);
        padding-bottom: calc(var(--nav-height) + 15px);
    }

    @media all and (min-width: 768px) {
        .main {
            padding-top: 240px;
        }
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

    .avatar {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
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
        text-transform: uppercase;
        color: var(--main-accent-color);
        border-radius: 20px;
        border: 1px solid transparent;
    }

    .buttons button {
        padding: 0 10px;
        line-height: 30px;
        font-size: 12px;
    }

    .battling-buttons button {
        padding: 0;
        width: calc(50% - 5px);
        line-height: 40px;
        font-weight: 600;
    }

    .follow-btn {
        border-color: var(--main-accent-color);
    }

    .matches-btn {
        background-color: var(--main-accent-color);
        color: var(--black100);
    }

    .brackets-btn {
        border-color: var(--main-accent-color);
    }

    .battling-buttons {
        display: flex;
        justify-content: space-between;
        padding: 0 15px 15px;
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

    .sticky {
        height: 50px;
    }

    .tabs-wrap {
        background-color: var(--black100);
        position: static;
        width: 100%;
        overflow-x: auto;
    }

    .sticky .tabs-wrap {
        position: fixed;
        left: 0;
        right: 0;
        z-index: 2;
        box-shadow: 0 0 5px var(--black200);
    }

    .tabs-list {
        display: flex;
        justify-content: center;
        align-items: center;
        width: max-content;
        min-width: 100%;
        border-bottom: 2px solid rgba(255, 255, 255, 0.10);
    }

    .tabs-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin-bottom: -2px;
        padding: 0 15px;
        height: 48px;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        font-weight: 600;
        color: var(--white200);
        border-bottom: 2px solid transparent;
    }

    .tabs-item.router-link-exact-active {
        color: var(--main-accent-color);
        border-bottom-color: var(--main-accent-color);
    }

    .tab-contents {
        padding-top: 15px;
    }
</style>
