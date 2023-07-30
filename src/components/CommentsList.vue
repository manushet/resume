<template>
    <div class="card">
        <h2>Комментарии</h2>
        <ul class="list">
            <li class="list-item" v-for="comment in comments" :key="comment.id">
                <comment-item :comment='comment'/>
            </li>
        </ul>
    </div>
</template>

<script>
import CommentItem from './CommentItem.vue';

export default {
    name: 'CommentsList',
    components: {
        CommentItem,
    },
    props: {
        comments: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style scoped></style>