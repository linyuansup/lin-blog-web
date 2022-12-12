<template>
    <div class="container">
        <div class="left">
            <div class="title">{{ blogInfo.title }}</div>
            <v-card class="blog-info" :text="'创建时间：' + blogInfo.createTime + '，最后修改时间：' + blogInfo.lastUpdateTime"
                variant="tonal"></v-card>
            <div v-html="blogInfo.content" id="content" class="content"></div>
        </div>
        <div class="right">
            <div class="part-title">
                <span class="title">目录结构</span>
            </div>
            <div class="toc-list">
                <div v-if="tocArray.length == 0" class="no-toc">暂无目录</div>
                <div v-else v-for="item in tocArray">
                    <div class="toc-item" :style="{ 'padding-left': ((item.level - 1) * 15 + 5) + 'px' }">
                        <a :href="'#' + item.id">{{ item.title }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, nextTick } from "vue"
import { useRoute } from "vue-router"
import hljs from "highlight.js"
import "highlight.js/styles/atom-one-light.css"
const route = useRoute()
const { proxy } = getCurrentInstance()

const api = {
    "blogDetail": "blog/"
}

const blogInfo = ref([])

const getBlogDetail = async () => {
    let result = await proxy.Request({
        url: api.blogDetail + route.params.blogId,
    })
    if (!result) {
        return
    }
    blogInfo.value = result
    nextTick(() => {
        let blocks = document.querySelectorAll("pre code")
        blocks.forEach((block) => {
            hljs.highlightBlock(block)
        })
        createToc()
    })
}

getBlogDetail()

const tocArray = ref([])
const createToc = () => {
    const tocTags = ["H1", "H2", "H3", "H4", "H5"]
    let contentDom = document.querySelector("#content")
    const childNodes = contentDom.childNodes
    let index = 0
    childNodes.forEach(item => {
        let tagName = item.tagName
        if (tagName == undefined) {
            return true
        }
        if (!tocTags.includes(tagName.toUpperCase())) {
            return true
        }
        index++;
        let id = "toc" + index;
        item.setAttribute("id", id)
        tocArray.value.push({
            id: id,
            title: item.innerText,
            level: Number.parseInt(tagName.substring(1))
        })
    })
}

</script>

<style lang="scss">
.container {
    margin-top: 10px;
    display: flex;

    .left {
        flex: 1;
        background: white;
        padding: 15px;

        .content {
            line-height: 26px;
            word-break: break-all;

            img {
                width: 100%;
            }
        }

        .title {
            font-weight: bold;
            font-size: 30px;
        }

        .blog-info {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    }

    .right {
        width: 300px;
        margin-left: 10px;
        background: white;

        .part-title {
            margin-top: 15px;
            margin-left: 15px;
            font-size: 15px;
        }

        .toc-list {
            padding: 10px 5px;

            .no-toc {
                text-align: center;
                color: #5f6471;
                padding: 10px;
            }

            .toc-item {
                font-size: 14px;
                line-height: 25px;
                cursor: pointer;

                a {
                    color: black;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>