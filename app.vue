<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

import '~/assets/scss/default.scss'

// import '@unocss/reset/tailwind.css'
// import '~/assets/scss/app.scss'

// const locale = ref(zhCn)
const systemInfo = await useSystemState().getSystemInfo()

const { locale: lo } = useI18n()

const locale = computed(() => {
    return lo.value === 'en' ? en : zhCn
})

useHead({
    title: systemInfo.value?.title,
    meta: [
        { name: 'description', content: systemInfo.value?.description },
        { name: 'keywords', content: systemInfo.value?.keyword },
    ],
    link: [
        { rel: 'icon', href: systemInfo.value?.icon },
    ],
    // bodyAttrs: {
    //     class: 'test',
    // },
    // script: [{ innerHTML: 'console.log(\'Hello world\')' }],
})
</script>

<template>
    <el-config-provider :locale="locale">
        <VitePwaManifest />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </el-config-provider>
</template>

<style lang="scss">
html,
body,
#__nuxt {
    height: 100vh;
    margin: 0;
    padding: 0;
    // background: $bgColor;
}

html.dark {
    background: #333;
    color: white;
}
</style>
