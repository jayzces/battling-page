<template>
    <div class="entry progressive replace"
        :data-href="entry.video_img">
        <img class="preview"
            :src="entry.video_preview"
            :alt="entry.title + '\s image'" />

        <div class="user">
            <div class="progressive replace"
                :data-href="entry.avatar">
                <img class="preview"
                :src="entry.avatar_preview"
                :alt="entry.name + '\'s avatar'" />
            </div>

            <div class="details">
                <div class="title">{{ entry.title }}</div>
                <div class="name">{{ entry.name }}</div>
            </div>
        </div>

        <div class="actions">
            <i class="volume-icon">volume</i>
            <i class="share-icon">share</i>
            <span class="vote-btn">+ 1</span>
        </div>

        <div class="overlay">
            <div class="vote">
                <div class="vote-trigger"
                    v-if="!entry.voted"
                    v-on:click="entry.voted = !entry.voted">+ 1
                    <div class="caption">Vote</div>
                </div>
                <div class="timer-container"
                    v-else>
                    <div class="timer">
                        <span class="days">00</span>
                        <span class="hours">23</span>
                    </div>
                    <i class="hourglass-icon"></i>
                    <div class="timer">
                        <span class="mins">59</span>
                        <span class="secs">59</span>
                    </div>

                    <div class="undo-vote"
                        v-on:click="entry.voted = !entry.voted">
                        <i class="close-icon">&times;</i>
                    </div>
                </div>
            </div>
            <div class="supervote">
                <div class="vote-trigger">+ 2
                    <div class="caption">Super Vote</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'EntryItem',
        props: ['entry']
    }
</script>


<style scoped>
    .entry {
        position: relative;
    }

    .entry::before {
        content: "";
        display: block;
        position: absolute;
        background-image: linear-gradient(
            var(--black200),
            transparent 25%,
            transparent 75%,
            var(--black200));
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .entry > img {
        background-color: var(--black100);
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .user {
        display: flex;
        position: absolute;
        top: 15px;
        left: 15px;
    }

    .user .progressive {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    .details {
        padding-left: 10px;
        font-size: 12px;
    }

    .name {
        color: var(--white200);
    }

    .actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 15px;
        right: 15px;
        bottom: 10px;
        opacity: 0.7;
    }

    .volume-icon,
    .share-icon {
        background-repeat: no-repeat;
        background-size: cover;
        display: inline-block;
        width: 15px;
        height: 15px;
        font-size: 0;
    }

    .volume-icon {
        background-image: url('/assets/volume.svg');
    }

    .share-icon {
        background-image: url('/assets/share.svg');
    }

    .vote-btn {
        display: inline-block;
        font-weight: 700;
        font-size: 16px;
    }

    .overlay {
        background-color: var(--black200);
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--duration) var(--timing);
    }

    [data-voting] .overlay {
        opacity: 1;
        pointer-events: auto;
    }

    .vote,
    .supervote {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
    }

    .vote-trigger {
        font-weight: 800;
        font-size: 36px;
        color: var(--main-accent-color);
    }

    .caption {
        margin-top: -5px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        font-size: 12px;
        color: var(--white200);
    }

    .timer-container {
        position: relative;
        flex-direction: column;
    }

    .hourglass-icon {
        background-image: url('/assets/hourglass1.svg');
        background-repeat: no-repeat;
        background-size: cover;
        display: inline-block;
        margin: 10px 0;
        width: 40px;
        height: 40px;
        animation: hourglass 4s var(--timing) infinite;
    }

    @keyframes hourglass {
        0% {
            background-image: url('/assets/hourglass1.svg');
            transform: rotate(0deg);
        }

        25% {
            background-image: url('/assets/hourglass2.svg');
            transform: rotate(0deg);
        }

        50% {
            background-image: url('/assets/hourglass3.svg');
            transform: rotate(0deg);
        }

        75%,
        100% {
            background-image: url('/assets/hourglass3.svg');
            transform: rotate(180deg);
        }
    }

    .undo-vote {
        position: absolute;
        top: 0;
        right: -32px;
        bottom: 0;
        margin: auto 0;
        height: max-content;
    }

    .close-icon {
        display: inline-block;
        text-align: center;
        line-height: 32px;
        width: 32px;
        font-style: inherit;
        font-size: 24px;
        color: white;
    }
</style>
