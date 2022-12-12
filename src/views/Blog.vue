<template>
    <div class="container">
        <div class="left">
            <div v-for="item in blogList">
                <BlogItem :tag="item.tag" :blogId="item.blogId" :cover="item.cover" :title="item.title"
                    :summary="item.summary" :time="item.createTime">
                </BlogItem>
            </div>
        </div>
    </div>
</template>

<script setup>

import { getCurrentInstance, ref } from "vue"
import BlogItem from "../components/BlogItem.vue";
const { proxy } = getCurrentInstance();
const blogList = ref([]);
const api = {
    "loadBlogList": "blog",
    "loadCategoryList": "category"
}
const loadDataList = async () => {
    let result = await proxy.Request({
        url: api.loadBlogList
    })
    if (!result) {
        return;
    }
    blogList.value = result.data;
}
const categoryList = ref([]);
const loadCategoryList = async () => {
    let result = await proxy.Request({
        url: api.loadCategoryList,
        params: {
            pageSize: 1
        }
    })
    if (!result) {
        return;
    }
    categoryList.value = result.data;
}

loadDataList();
loadCategoryList();

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
