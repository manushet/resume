<template>
    <div>
        <p><strong>{{ comment.name }}</strong> &lt;{{ comment.email }}&gt;</p>
        <small>{{ comment.body }}</small>
    </div>  
</template>

<script>
export default {
    name: 'CommentItem',
    props: {
        comment: {
            type: Object,
            default: () => {}
        }
    },
}
</script>

<style scoped></style>