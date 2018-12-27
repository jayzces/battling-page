<template>
    <div class="comments">
        <form v-on:submit.prevent>
            <textarea rows="4" placeholder="Write a comment"></textarea>
            <div class="comments-btn">
                <button class="post-btn">Post</button>
            </div>
        </form>

        <div class="comments-list">
            <commentItem
                v-for="comment in comments"
                v-bind:comment="comment"
                v-bind:key="comment.id"></CommentItem>
        </div>
    </div>
</template>


<script type="text/javascript">
    var appData = require('../data').default

    export default {
        name: 'CommentsTab',
        components: {
            CommentItem: require('./commentItem').default
        },
        data: function() {
            return {
                comments: appData.commentsData
            }
        }
    }
</script>


<style scoped>
    form {
        padding: 0 15px;
    }

    textarea {
        padding: 10px;
        width: calc(100% - 20px);
        font-family: inherit;
        font-size: inherit;
        resize: none;
        border: 0;
        border-radius: 5px;
    }

    .comments-btn {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
    }

    button {
        background-color: transparent;
        margin-left: auto;
        padding: 0 10px;
        line-height: 30px;
        text-transform: uppercase;
        font-family: inherit;
        font-size: inherit;
        color: var(--main-accent-color);
        border-radius: 15px;
        border: 1px solid transparent;
    }

    .comments-list {
        margin-top: 15px;
    }
</style>
