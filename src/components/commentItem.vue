<template>
    <div class="comment">
        <div class="progressive replace"
            :data-href="comment.avatar">
            <img class="preview"
                :src="comment.avatar"
                :alt="comment.username + '\'s avatar'"  />
        </div>

        <div class="details">
            <div class="text-and-options">
                <p>
                    <span class="name">{{ comment.username }}</span>
                    {{ comment.message }}
                </p>

                <div class="options-wrapper">
                    <i class="options-icon">Options</i>
                </div>
            </div>

            <div class="time-and-actions">
                <div>
                    <div class="time">{{ comment.time }}</div>
                    <button class="reply-btn">Reply</button>
                </div>
                <div>
                    <button class="upvote-btn"
                        :class="{ active: comment.upvote }"
                        v-on:click="triggerUpvote">
                        <i class="upvote-icon">Upvote</i> {{ comment.total_upvotes }}
                    </button>
                    <button class="downvote-btn"
                        :class="{ active: comment.downvote }"
                        v-on:click="triggerDownvote">
                        <i class="downvote-icon">Downvote</i> {{ comment.total_downvotes }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
    export default {
        name: 'CommentItem',
        props: ['comment'],
        methods: {
            triggerUpvote: function() {
                let comment = this.comment

                if (comment.downvote) {
                    comment.downvote = !comment.downvote
                    comment.total_downvotes -= 1
                }

                if (comment.upvote) comment.total_upvotes -= 1
                else comment.total_upvotes += 1

                comment.upvote = !comment.upvote
            },
            triggerDownvote: function() {
                let comment = this.comment

                if (comment.upvote) {
                    comment.upvote = !comment.upvote
                    comment.total_upvotes -= 1
                }

                if (comment.downvote) comment.total_downvotes -= 1
                else comment.total_downvotes += 1

                comment.downvote = !comment.downvote
            }
        }
    }
</script>


<style scoped>
    .comment {
        display: flex;
        padding: 15px 5px 5px 15px;
        border-top: 1px solid var(--white300);
    }

    .comment .progressive {
        width: 35px;
        height: 35px;
        flex-shrink: 0;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .details {
        padding-left: 10px;
    }

    .text-and-options {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    p {
        margin: 0;
        max-width: 85%;
    }

    .name {
        font-weight: 600;
        color: var(--main-accent-color);
    }

    .options-wrapper {
        padding: 10px;
        flex-shrink: 0;
    }

    .options-icon {
        position: relative;
        font-size: 0;
    }

    .options-icon::before,
    .options-icon::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .options-icon,
    .options-icon::before,
    .options-icon::after {
        background-color: var(--white300);
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
    }

    .options-icon::before {
        top: -8px;
    }

    .options-icon::after {
        bottom: -8px;
    }

    .time-and-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
        padding-right: 10px;
    }

    .time-and-actions > * {
        display: flex;
        align-items: center;
    }

    .time {
        font-size: 12px;
        opacity: 0.4;
    }

    button {
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: 0;
    }

    .reply-btn {
        margin-left: 10px;
        padding: 5px 10px;
        opacity: 0.7;
    }

    .upvote-btn,
    .downvote-btn {
        color: var(--white200);
    }

    .downvote-btn {
        margin-left: 10px;
    }

    .upvote-icon,
    .downvote-icon {
        background-repeat: no-repeat;
        background-size: cover;
        display: inline-block;
        margin-right: 3px;
        width: 18px;
        height: 18px;
        font-size: 0;
        opacity: 0.7;
    }

    .upvote-icon {
        background-image: url('/assets/upvote.svg');
        vertical-align: text-top;
    }

    .active .upvote-icon {
        background-image: url('/assets/upvote_clicked.svg');
        opacity: 1;
    }

    .downvote-icon {
        background-image: url('/assets/downvote.svg');
        vertical-align: middle;
    }

    .active .downvote-icon {
        background-image: url('/assets/downvote_clicked.svg');
        opacity: 1;
    }
</style>
