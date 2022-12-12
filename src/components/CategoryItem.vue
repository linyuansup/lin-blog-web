<template>
    <v-container fluid>
        <v-card :to="'/category/' + props.title">
            <v-img :src="cover" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px"
                cover>
                <v-card-title class="text-white" v-text="title"></v-card-title>
            </v-img>
        </v-card>
    </v-container>
</template>

<script setup>
const props = defineProps({
    title: String,
    cover: String
})

var cover = "http://127.0.0.1:8000" + props.cover

</script>