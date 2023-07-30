<template>
    <div class="card card-w70">
        <h1 v-if='titleContent'>{{ titleContent }}</h1>
        <div class="avatar" v-if='avatarContent'>
            <img :src="avatarContent">
        </div>
        <template v-for='item in textBlocks' :key='item.id'>
            <h2 v-if='item.type === "subtitle"'>{{ item.text }}</h2>
            <p v-if='item.type === "text"'>{{ item.text }}</p>
        </template>     
        <h3 v-if="blocks.length === 0">Добавьте первый блок, чтобы увидеть результат</h3>     
    </div>  
</template>

<script>
export default {
    name: 'CardView',
    props: {
        blocks: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        titleContent() {
            const block = this.blocks.find(item => item.type === 'title');
            return block ? block.text : null
        },
        avatarContent() {
            const block = this.blocks.find(item => item.type === 'avatar');
            return block ? block.text : null
        },
        textBlocks() {
            const textBlocks = this.blocks.filter(item => (item.type === 'subtitle' || item.type === 'text'));
            return textBlocks.length > 0 ? textBlocks : [];
        },
    }
}
</script>

<style scoped></style>