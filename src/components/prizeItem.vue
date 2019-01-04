<template>
    <div class="prize">
        <div class="progressive replace"
            :data-href="prize.image">
            <img class="preview"
                :src="prize.preview"
                :alt="prize.title + ' prize image'" />
        </div>

        <div class="overlay">
            <div class="place">{{ prize.place }} Place</div>
            <div class="title">{{ prize.title }}</div>
        </div>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'PrizeItem',
        props: ['prize']
    }
</script>


<style scoped>
    .prize {
        position: relative;
    }

    .prize:nth-child(n + 1):last-child {
        grid-column: 1 / 3;
        grid-row: 1fr;
    }

    .prize > * {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .overlay {
        background-color: rgba(40, 40, 40, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    .place {
        font-size: 12px;
    }

    .title {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 16px;
    }
</style>
