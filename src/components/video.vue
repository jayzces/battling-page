<template>
    <div class="video-mock">
        <img src="https://images.unsplash.com/photo-1545684685-070d2a82fd28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" alt="Elliott Matthewson's avatar" />

        <div class="views">1,234 views</div>
        <div class="player-controls">
            <div class="play-wrapper">
                <i class="play-icon">play</i>
            </div>

            <div class="progress">
                <div class="loaded">
                    <div class="played">
                        <div class="scrub"></div>
                    </div>
                </div>
            </div>

            <div class="duration">1:28 / 2:56</div>

            <div class="volume-wrapper">
                <i class="volume-icon">volume</i>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'VideoMock'
    }
</script>


<style scoped>
    .video-mock {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3;
    }

    .video-mock::before {
        content: "";
        display: block;
        padding-top: calc(100% / 16 * 9);
    }

    @media all and (min-width: 768px) {
        .video-mock::before {
            padding-top: 240px;
        }
    }

    .video-mock::after {
        content: "";
        background-image: linear-gradient(
            var(--black200),
            transparent 25%,
            transparent 75%,
            var(--black200));
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }

    img {
        background-color: #121212;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: 1;
    }

    @media all and (min-width: 768px) {
        img {
            object-fit: scale-down;
        }
    }

    .views {
        position: absolute;
        top: 20px;
        right: 15px;
        font-size: 12px;
        z-index: 2;
    }

    .duration {
        padding: 0 5px;
        font-size: 10px;
    }

    .player-controls {
        position: absolute;
        display: flex;
        align-items: center;
        left: 10px;
        right: 10px;
        bottom: 5px;
        z-index: 2;
    }

    .player-controls :not(.progress) {
        flex-shrink: 0;
    }

    .play-wrapper,
    .volume-wrapper {
        display: flex;
        padding: 5px;
    }

    .play-icon,
    .volume-icon {
        background-repeat: no-repeat;
        background-size: cover;
        display: inline-block;
        width: 15px;
        height: 15px;
        font-size: 0;
    }

    .play-icon {
        background-image: url('/assets/play.svg');
    }

    .volume-icon {
        background-image: url('/assets/volume.svg');
    }

    .progress {
        background-color: var(--black200);
        position: relative;
        margin: 0 5px;
        flex-grow: 1;
        height: 4px;
    }

    .loaded,
    .played {
        width: 70%;
        height: 100%;
    }

    .loaded {
        background-color: var(--white300);
    }

    .played {
        background-color: var(--main-accent-color);
        position: relative;
    }

    .scrub {
        background-color: white;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto 0;
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }
</style>
