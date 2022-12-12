<template>
    <div class="top">
        <div class="top-nav">
            <router-link to="/" class="logo">linBlog</router-link>
            <v-btn size="large" to="/blog" prepend-icon="mdi-file-document-multiple-outline" variant="text">博客</v-btn>
            <v-btn size="large" to="/category" prepend-icon="mdi-shape-outline" variant="text">分类</v-btn>
            <v-btn size="large" @click="toGithub" prepend-icon="mdi-github" variant="text">Github</v-btn>
            <v-btn size="large" @click="toBilibili" prepend-icon="mdi-television-classic"
                variant="text">Bilibili</v-btn>
        </div>
    </div>
    <div class="body-container">
        <router-view />
    </div>
    <div class="footer">
        <div>测试阶段，仅用于网站设计课程结课</div>
        <div>请勿用于其他用途</div>
    </div>
</template>

<script setup>
const toBilibili = () => {
    window.open("https://space.bilibili.com/273891297")
}
const toGithub = () => {
    window.open("https://github.com/linyuansup")
}
</script>
