<template>
    <div class="match-overlay" v-show="openOverlay">
        <i class="close-icon" v-on:click="closeOverlay">&times;</i>

        <div class="match" :data-status="status">
            <EntryItem class="top-entry"
                :data-voting="votingTop"
                :entry="match.top"></EntryItem>
            <EntryItem class="bottom-entry"
                :data-voting="votingBottom"
                :entry="match.bottom"></EntryItem>
        </div>
    </div>
</template>


<script type="text/javascript">
    import Eventbus from '../eventbus'
    var appData = require('../data').default

    export default {
        name: 'MatchOverlay',
        components: {
            EntryItem: require('./entryItem').default
        },
        data: function() {
            return {
                openOverlay: false,
                status: '',
                votingTop: false,
                votingBottom: false,
                match: appData.matchData[0]
            }
        },
        methods: {
            toggleBodyFix: function() {
                let body = document.querySelector('body')
                if (this.openOverlay) body.classList.add('body--fix')
                else body.classList.remove('body--fix')
            },
            closeOverlay: function() {
                this.openOverlay = false
                this.toggleBodyFix()
            },
            enableSwipeActions: function() {
                let component = this,
                    touchArea = document.querySelector('.match'),
                    initX, initY, distX, distY,
                    threshold = 50,
                    restraint = 100

                touchArea.addEventListener('touchstart', function(e) {
                    let touchItem = e.changedTouches[0]
                    initX = touchItem.pageX
                    initY = touchItem.pageY
                })

                touchArea.addEventListener('touchend', function(e) {
                    let touchItem = e.changedTouches[0]
                    distX = touchItem.pageX - initX
                    distY = touchItem.pageY - initY

                    let absDistX = Math.abs(distX)
                    let absDistY = Math.abs(distY)

                    // threshold to register a swipe
                    if (absDistX >= threshold || absDistY >= threshold) {
                        if (absDistX > absDistY) {
                            if (distX < 0) {
                                console.log('Previous Match')
                            } else if (distX > 0) {
                                console.log('Next Match')
                            }
                        } else {
                            if (!component.votingTop &&
                                !component.votingBottom) {
                                component.status = 'voting'
                                if (distY < 0) {
                                    console.log('Voting Bottom Entry')
                                    component.votingBottom = true
                                    component.votingTop = false
                                } else if (distY > 0) {
                                    console.log('Voting Top Entry')
                                    component.votingTop = true
                                    component.votingBottom = false
                                }
                            } else if (component.votingTop &&
                                !component.votingBottom) {
                                if (distY < 0) {
                                    console.log('Resetting Top Entry')
                                    component.status = 'resetTop'
                                    component.votingTop = false
                                }
                            } else if (!component.votingTop &&
                                component.votingBottom) {
                                if (distY > 0) {
                                    console.log('Resetting Bottom Entry')
                                    component.status = 'resetBottom'
                                    component.votingBottom = false
                                }
                            }
                        }
                    }
                })
            }
        },
        mounted: function() {
            let component = this
            Eventbus.$on('toggleMatchOverlay', function() {
                component.openOverlay = !component.openOverlay
                component.toggleBodyFix()
            })

            this.enableSwipeActions()
        }
    }
</script>


<style scoped>
    .match-overlay {
        background-color: var(--black150);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: var(--nav-height);
        z-index: 4;
    }

    .close-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        text-align: center;
        line-height: 32px;
        width: 32px;
        font-style: inherit;
        font-size: 24px;
        color: white;
        z-index: 3;
    }

    .match {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
    }

    .entry {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 50%;
        transition-duration: 200ms;
        transition-timing-function: var(--timing);
    }

    .top-entry {
        /* background-color: var(--main-accent-color); */
        transition-property: top;
        top: 0;
    }

    [data-status="voting"] .top-entry {
        top: 25%;
    }

    .bottom-entry {
        /* background-color: var(--sub-accent-color); */
        transition-property: bottom;
        bottom: 0;
    }

    [data-status="voting"] .bottom-entry {
        bottom: 25%;
    }

    [data-voting],
    [data-status="resetTop"] .top-entry,
    [data-status="resetBottom"] .bottom-entry {
        z-index: 2;
    }
</style>
