<template>
    <div class="container column">
        <form-add @onAddResume="onAddResume" />
        <card-view :blocks='blocks'/>
    </div>
    <div class="container">
        <button class="btn primary mt-1 mb-2" @click='getComments'>Загрузить комментарии</button>
        <comments-list :comments='comments'/>
        <loader-spinner v-if='loading'/>
    </div>
</template>

<script>
import firebaseService from './services/FirebaseService';

import FormAdd from './components/FormAdd.vue';
import CardView from './components/CardView.vue';
import CommentsList from './components/CommentsList.vue';
import LoaderSpinner from './components/LoaderSpinner.vue';

export default {
    name: 'App',
    components: {
        FormAdd,
        CardView,
        CommentsList,
        LoaderSpinner
    },
    data: () => ({
        comments: [],
        blocks: [],
        maxBlock: 0,
        loading: false
    }),    
    methods: {
        async getComments() {
            this.loading = true;
            this.comments = await firebaseService.getComments();
            this.loading = false;         
        },
        onAddResume(block) {
            this.blocks.push({ ...block , id: this.maxBlock++});
        }
    }  
}
</script>

<style>
    .avatar {
        display: flex;
        justify-content: center;
    }

    .avatar img {
        width: 150px;
        height: auto;
        border-radius: 50%;
    }

    .mt-1 {
        margin-top: 1em;
    }

    .mt-2 {
        margin-top: 2em;
    }  
    
    .mb-1 {
        margin-bottom: 1em;
    }

    .mb-2 {
        margin-bottom: 2em;
    }     
</style>
