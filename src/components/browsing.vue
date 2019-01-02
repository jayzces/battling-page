<template>
    <div class="browsing main">
        <div class="search"
            :data-searching="openSearch">
            <i class="search-icon"
                v-on:click="toggleSearch"></i>
            <input type="search"
                v-model="searchText"
                placeholder="Search a Tournament or a User" />
        </div>
        <div class="tournaments-list">
            <TournamentItem
                v-for="tourney in tournaments"
                :tournament="tourney"
                :key="tourney.id"></TournamentItem>
        </div>
        <div class="search-list"
            :data-searching="openSearch"
            v-on:click="closeSearch">
            <div class="users-list" v-if="searchText">
                <UserItem
                    v-for="user in users"
                    :user="user"
                    :key="user.id"></UserItem>
            </div>
            <div class="tournaments-list" v-if="searchText">
                <TournamentItem
                    v-for="tourney in tournaments"
                    :tournament="tourney"
                    :key="tourney.id"></TournamentItem>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
    var appData = require('../data').default

    export default {
        name: 'AppMain',
        components: {
            TournamentItem: require('./tournamentItem').default,
            UserItem: require('./userItem').default
        },
        data: function () {
            return {
                tournaments: appData.tournamentsData,
                users: appData.usersData,
                openSearch: false,
                searchText: ''
            }
        },
        methods: {
            toggleSearch: function() {
                let body = document.querySelector('body')

                if (this.openSearch) {
                    body.classList.remove('body--fix')
                } else {
                    body.classList.add('body--fix')
                    let searchInput = body.querySelector('input[type="search"]')
                    searchInput.focus()
                }

                this.openSearch = !this.openSearch

            },
            closeSearch: function(e) {
                if (e.target === e.currentTarget)
                    this.toggleSearch()
            }
        }
    }
</script>


<style scoped>
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
        transition: all var(--duration) var(--timing);
    }

    [data-searching="true"] .search-icon {
        background-image: url('/assets/search_black.svg');
        left: 5px;
    }

    [type="search"] {
        background-color: transparent;
        padding: 0 0 0 30px;
        width: 100%;
        max-width: 0;
        line-height: 32px;
        border: 0;
        border-radius: 16px;
        transition: all var(--duration) var(--timing);
    }

    [data-searching="true"] [type="search"] {
        background-color: white;
        padding-left: 35px;
        padding-right: 15px;
        max-width: 100%;
    }

    .search-list {
        background-color: rgba(40, 40, 40, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: var(--nav-height);
        max-height: calc(100vh - var(--nav-height));
        overflow: auto;
        padding: 47px 0 15px;
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--duration) var(--timing);
    }

    .search-list[data-searching="true"] {
        opacity: 1;
        pointer-events: auto;
    }

    .users-list {
        padding: 15px;
        border-bottom: 1px solid var(--white300);
    }

    .search-list .tournaments-list {
        padding: 15px 15px 0;
    }
</style>
