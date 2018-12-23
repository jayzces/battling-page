<template>
    <div class="main">
        <div class="search"
            v-bind:data-searching="openSearch">
            <i class="search-icon"
                v-on:click="toggleSearch"></i>
            <input type="text"
                v-model="searchText"
                placeholder="Search a Tournament" />
        </div>
        <div class="tournaments-list">
            <TournamentItem
                v-for="tourney in tournaments"
                v-bind:tournament="tourney"
                v-bind:key="tourney.id"></TournamentItem>
        </div>
        <div class="search-list"
            v-bind:data-searching="openSearch">
            <div class="tournaments-list" v-if="searchText">
                <TournamentItem
                    v-for="tourney in tournaments"
                    v-bind:tournament="tourney"
                    v-bind:key="tourney.id"></TournamentItem>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'AppMain',
        components: {
            TournamentItem: require('./tournament-item.vue').default
        },
        data () {
            return {
                tournaments: require('../data.js').default,
                openSearch: false,
                searchText: ''
            }
        },
        methods: {
            toggleSearch: function() {
                this.openSearch = !this.openSearch
            }
        }
    }
</script>


<style scoped>
    .main {
        position: relative;
        flex-grow: 1;
        overflow: auto;
        max-height: calc(100vh - 64px);
    }

    .search {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: fixed;
        top: 15px;
        left: 15px;
        right: 15px;
        z-index: 2;
        pointer-events: none;
    }

    .search * {
        pointer-events: auto;
    }

    .search-icon {
        background: url('/assets/search_white.svg') no-repeat;
        background-size: cover;
        display: inline-block;
        position: absolute;
        top: 0;
        left: calc(100% - 25px);
        bottom: 0;
        margin: auto 0;
        width: 20px;
        height: 20px;
        transition: all var(--delay) var(--timing);
    }

    [data-searching="true"] .search-icon {
        background-image: url('/assets/search_black.svg');
        left: 5px;
    }

    [type="text"] {
        background-color: transparent;
        padding: 0 0 0 30px;
        width: 100%;
        max-width: 0;
        line-height: 32px;
        font-family: inherit;
        font-size: inherit;
        border: 0;
        border-radius: 16px;
        transition: all var(--delay) var(--timing);
    }

    [data-searching="true"] [type="text"] {
        background-color: white;
        max-width: 100%;
    }

    .search-list {
        background-color: rgba(40, 40, 40, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 64px;
        max-height: calc(100vh - 64px);
        overflow: auto;
        padding: 62px 15px 15px;
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--delay) var(--timing);
    }

    .search-list[data-searching="true"] {
        opacity: 1;
        pointer-events: auto;
    }
</style>
