<template>
    <div class="container">
        <div class="left">
            <div v-for="item in blogList">
                <BlogItem :cover="item.cover" :title="item.title" :summary="item.summary" :time="item.createTime"
                    :tag="item.tag" :blogId="item.blogId">
                </BlogItem>
            </div>
        </div>
    </div>
</template>

<script setup>

import { getCurrentInstance, ref } from "vue"
import BlogItem from "../components/BlogItem.vue";
import { useRoute } from "vue-router"
const { proxy } = getCurrentInstance();
const blogList = ref([]);
const route = useRoute()
const api = {
    "loadBlogList": "blog",
}
const loadDataList = async () => {
    let result = await proxy.Request({
        url: api.loadBlogList,
        param: {
            "category": route.params.categoryId
        }
    })
    if (!result) {
        return;
    }
    blogList.value = result.data;
}

loadDataList();

</script>

<style lang="scss">
.container {
    margin-top: 10px;
    display: flex;

    .left {
        flex: 1;
        background: white;
        padding: 15px;
    }

    .right {
        width: 300px;
        margin-left: 10px;
        background: white;
    }
}
</style>
