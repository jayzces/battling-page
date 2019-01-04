<template>
    <router-link class="tournament progressive replace"
        :to="{ name: pageLink }"
        :data-href="tournament.image">
        <img class="preview"
            :src="tournament.preview"
            :alt="tournament.title + ' tournament image'" />
        <div class="overlay">
            <div class="title">{{ tournament.title }}</div>
            <p>{{ tournament.description }}</p>
            <div class="timer-container">
                <i class="timer-icon">timer</i>
                <div class="timer">
                    <span class="days">03</span>
                    <span class="hours">23</span>
                    <span class="mins">59</span>
                    <span class="secs">59</span>
                </div>
            </div>
        </div>
    </router-link>
</template>


<script type="text/javascript">
    export default {
        name: 'TournamentItem',
        props: ['tournament'],
        data: function() {
            return {
                pageLink: ''
            }
        },
        mounted: function() {
            if (this.tournament.id % 2)
                this.pageLink = 'BattlingCommentsTab'
            else
                this.pageLink = 'OpenCommentsTab'
        }
    }
</script>


<style scoped>
    .tournament {
        display: block;
        position: relative;
        min-height: 140px;
        height: calc((100vh - var(--nav-height)) / 4);
        color: inherit;
        opacity: 0;
        animation: showItem var(--duration) var(--timing) forwards;
    }

    .progressive {
    }

    .overlay {
        background-color: rgba(40, 40, 40, 0.5);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        z-index: 1;
    }

    .title,
    p,
    .timer-container {
        max-width: 75%;
    }

    .title {
        text-overflow: ellipsis;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
    }

    p {
        margin: 0;
        font-size: 12px;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: calc(2 * 1.4 * 12px);
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .timer-container {
        margin-top: 5px;
    }
</style>
