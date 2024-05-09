<!-- 关于我们 -->
<script lang="ts" setup>
const { $lang } = useNuxtApp()
const { data: about } = await useCustomFetch<IAboutInfoResponse>('/api/page/about', {
    params: {
        type: 1,
    },
})

definePageMeta({
    layout: 'home',
})
</script>

<template>
    <LayoutContent>
        <div>
            <img :src="about?.img"
                 alt=""
            >
            <div class="py10px"
                 v-html="$lang(about?.content, about?.content_en)"
            />
        </div>
    </LayoutContent>
</template>

<style lang="scss" scoped></style>
