<template>
    <form class="card card-w30" @submit.prevent='addItem' ref='form'>
        <div class="form-control">
            <label for="type">Тип блока</label>
            <select name='type' ref='type' v-model='blockType'>
                <option value="title" selected="selected">Заголовок</option>
                <option value="subtitle">Подзаголовок</option>
                <option value="avatar">Аватар</option>
                <option value="text">Текст</option>
            </select>
        </div>
        <div class="form-control">
            <label for="value">Значение</label>
            <textarea name='text' ref='text' rows="3" v-model='blockText'></textarea>
        </div>
        <button class="btn primary" type='submit'>Добавить</button>
    </form>
</template>

<script>
export default {
    name: 'FormAdd',
    data: () => ({
        blockType: 'title',
        blockText: null
    }),
    emits: ['onAddResume'],
    methods: {
        addItem() {
            const block = {
                'type': this.blockType,
                'text': this.blockText,
            }; 
            this.blockText = "";
            this.blockType = "title";
            this.$emit('onAddResume', block);
        }
    }
}
</script>

<style scoped></style>
