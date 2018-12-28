<template>
    <div class="voting-mechanics">
        <div class="chart">
            <div class="legend">
                <div class="row channelfix">ChannelFix
                    <div class="percentage">{{ channelfix }}%</div>
                </div>
                <div class="row public-voting">Public Voting
                    <div class="percentage">30%</div>
                </div>
                <div class="row total">Total
                    <div class="percentage">100%</div>
                </div>
            </div>
            <div class="pie" :data-percent="channelfix">
                <div class="cover"></div>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'MechanicsTab',
        data: function() {
            return {
                channelfix: 60
            }
        },
        methods: {
            computePublicVoting: function() {
                let publicVoting = document.querySelector('.public-voting .percentage')
                publicVoting.innerHTML = `${100 - this.channelfix}%`
            },
            generateChart: function() {
                let pie = document.querySelector('.pie')
                let cover = pie.querySelector('.cover')
                let leftSlice = this.channelfix
                let rotateValue = 0

                if (leftSlice > 50) {
                    leftSlice -= 50
                    pie.classList.add('reverse')
                }

                rotateValue = (leftSlice / 100) * 360
                cover.style.transform = `rotate(${rotateValue}deg)`
            }
        },
        mounted: function() {
            this.computePublicVoting()
            this.generateChart()
        }
    }
</script>


<style scoped>

    .voting-mechanics {
        padding-bottom: 15px;
    }

    .chart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 0 15px;
        max-width: 480px;
    }

    .percentage {
        font-weight: 600;
        font-size: 16px;
    }

    .channelfix {
        color: var(--main-accent-color);
    }

    .public-voting {
        margin-top: 10px;
        color: var(--sub-accent-color);
    }

    .total {
        margin-top: 10px;
    }

    .pie {
        background-color: var(--main-accent-color);
        background-image: linear-gradient(
            to right,
            transparent 50%,
            var(--sub-accent-color) 0);
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .cover {
        background-color: inherit;
        display: block;
        margin-left: 50%;
        height: 100%;
        border-radius: 0 100% 100% 0 / 50%;
        transform-origin: left;
    }

    .reverse .cover {
        background-color: var(--sub-accent-color);
    }
</style>
