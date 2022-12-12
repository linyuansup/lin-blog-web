<template>
    <v-card class="mx-auto" max-width="1350">
        <v-img class="align-end text-white" height="200" :src=cover cover>
            <v-card-title>{{ props.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
            {{ props.time }}
        </v-card-subtitle>

        <v-card-text>
            <div class="typeText">分类：{{ props.tag }}</div>

            <div>{{ props.summary }}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="orange" :to="'/blog/' + props.blogId">
                详情
            </v-btn>

            <v-btn color="orange" :to="'/category/' + props.blogId">
                更多分类内容
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
const props = defineProps({
    cover: String,
    title: String,
    time: String,
    summary: String,
    tag: String,
    blogId: String
})
var cover = "http://127.0.0.1:8000" + props.cover
console.log(cover);
</script>

<style lang="scss">
.typeText {
    color: #ddd;
    padding-bottom: 10px;
}

.mx-auto {
    margin: 15px;
}
</style>