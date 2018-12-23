<template>
    <div class="tournament">
        <img :src="tournament.image" alt="image" />
        <div class="overlay">
            <div class="title">{{ tournament.title }}</div>
            <p>{{ tournament.description }}</p>
            <div class="timer-container">
                <i class="timer-icon"></i>
                <div class="timer">
                    <span class="days">03</span>
                    <span class="hours">23</span>
                    <span class="mins">59</span>
                    <span class="secs">59</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'TournamentItem',
        props: ['tournament']
    }
</script>


<style scoped>
    .tournament {
        position: relative;
        height: calc((100vh - 64px) / 4);
        opacity: 0;
        animation: showItem var(--delay) var(--timing) forwards;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
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
        font-size: 14px;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: calc(2 * 1.4 * 14px);
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .timer-container {
        display: flex;
        align-items: center;
        margin-top: 5px;
    }

    .timer-icon {
        background: url('/assets/timer.svg') no-repeat;
        background-size: cover;
        display: inline-block;
        width: 20px;
        height: 20px;
    }

    .timer {
        margin-left: 5px;
        font-size: 14px;
    }

    .timer span:not(:last-child) {
        padding-right: 3px;
    }

    .timer span::after {
        display: inline;
        font-size: 12px;
    }

    .days::after {
        content: 'D';
    }

    .hours::after {
        content: 'H';
    }

    .mins::after {
        content: 'M';
    }

    .secs::after {
        content: 'S';
    }

    @media all and (max-width: 480px) {
        p {
            font-size: 12px;
            max-height: calc(2 * 1.4 * 12px);
        }

        .timer {
            font-size: 14px;
        }

        .timer span::after {
            font-size: 12px;
        }
    }
</style>
