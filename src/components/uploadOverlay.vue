<template>
    <div class="upload-overlay" v-show="showUploadOverlay">
        <i class="close-icon" v-on:click="closeOverlay">&times;</i>

        <div class="disclaimer-and-input" v-show="showDisclaimer">
            <form>
                <input type="file" accept="video/*" v-on:change="openNextForm" />
            </form>

            <div class="disclaimer">
                By uploading a video to this tournament, you are agreeing to our <a href="">terms and conditions</a>, <a href="">rules and regulations</a>, and that you are the rightful owner of the video. Tap the <span>camera button</span> again to begin.
            </div>
        </div>

        <div class="upload-form" v-show="showUploadForm">
            <form v-on:submit.prevent>
                <div class="field entry-title">
                    <div class="header">
                        <label>Name your Entry *</label>
                        <div class="char-count"
                            v-text="(titleCharLimit - text.length)"></div>
                    </div>

                    <input type="text"
                        :maxlength="titleCharLimit"
                        v-model="text"
                        required />
                </div>

                <div class="field contact-number">
                    <div class="header">
                        <label>Contact Number</label>
                    </div>
                    <input type="number" />
                </div>

                <div class="progress-bar processing">
                    <div class="progress"></div>
                </div>

                <button class="submit-btn"
                    :class="{ disabled: !text }"
                    v-on:click="closeOverlay">Submit Entry</button>
            </form>
        </div>
    </div>
</template>


<script type="text/javascript">
    import Eventbus from '../eventbus'

    export default {
        name: 'UploadOverlay',
        data: function() {
            return {
                showUploadOverlay: false,
                showDisclaimer: false,
                showUploadForm: false,
                titleCharLimit: 140,
                text: ''
            }
        },
        methods: {
            closeOverlay: function() {
                this.showUploadOverlay = false
                this.showDisclaimer = false
                this.showUploadForm = false
                Eventbus.$emit('resetUploadClickCount')

                document.querySelector('body').classList.remove('body--fix')
            },
            openNextForm: function() {
                this.showDisclaimer = false
                this.showUploadForm = true
                let progressbar = document.querySelector('.progress-bar')
                let animationDuration = 5000
                let animationDelay = 2000

                // set animationDuration
                let progress = progressbar.querySelector('.progress')
                progress.style.animationDuration = `${animationDuration}ms`

                setTimeout(function() {
                    progressbar.classList.remove('processing')
                    progressbar.classList.add('complete')
                }, animationDuration)

                // hide progress bar and show submit button
                setTimeout(function() {
                    progressbar.style.opacity = 0
                    let submitButton = document.querySelector('.submit-btn')
                    submitButton.style.visibility = 'visible'
                }, (animationDuration + animationDelay))
            }
        },
        mounted: function() {
            let component = this
            Eventbus.$on('openUploadOverlay', function(clickCount) {
                if (clickCount == 1) {
                    let body = document.querySelector('body')

                    if (component.showUploadOverlay)
                        body.classList.remove('body--fix')
                    else
                        body.classList.add('body--fix')

                    component.showUploadOverlay = true
                    component.showDisclaimer = true
                } else if (clickCount > 1) {
                    let inputFile = document.querySelector('[type="file"]')
                    inputFile.click()
                }
            })
        }
    }
</script>


<style scoped>
    .upload-overlay {
        background-color: var(--black150);
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: var(--nav-height);
        padding: 15px 15px 30px;
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
    }

    .disclaimer-and-input {
        margin-top: auto;
        font-size: 12px;
        color: var(--white200);
    }

    .disclaimer-and-input form {
        opacity: 0;
        visibility: hidden;
    }

    a {
        text-decoration: none;
    }

    span {
        color: var(--sub-accent-color);
    }

    .upload-form {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .upload-form form {
        position: relative;
        width: 100%;
    }

    .contact-number {
        margin-top: 10px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 7px 15px;
    }

    .header label {
        color: var(--white200);
    }

    .char-count {
        color: var(--white300);
    }

    [type="text"],
    [type="number"] {
        padding: 0 15px;
        width: calc(100% - 30px);
        line-height: 32px;
        border: 0;
        border-radius: 16px;
    }

    .progress-bar {
        width: 100%;
        opacity: 1;
        transition: opacity var(--duration) var(--timing);
    }

    .progress {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -24px;
        width: 50%;
        height: 10px;
        border-radius: 8px;
        animation: uploadProgress 5s linear forwards;
    }

    .progress::after {
        display: block;
        position: absolute;
        bottom: -20px;
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: var(--white300);
    }

    .processing .progress::after {
        content: "Processing...";
    }

    .complete .progress::after {
        content: "Upload Complete";
    }

    @keyframes uploadProgress {
        from {
            background-color: var(--main-accent-color);
            width: 0;
        }
        to {
            background-color: #6DB63B;
            width: 100%;
        }
    }

    .submit-btn {
        background-color: transparent;
        position: absolute;
        padding: 0;
        bottom: calc(-48px - 10px);
        width: 100%;
        line-height: 48px;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 16px;
        color: var(--main-accent-color);
        border: 0;
        visibility: hidden;
        opacity: 1;
        transition: opacity var(--duration) var(--timing);
    }

    .disabled {
        opacity: 0.5;
        pointer-events: none;
    }
</style>
