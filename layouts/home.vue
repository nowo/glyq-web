<script lang="ts" setup>

</script>

<template>
    <main class="main-box">
        <LayoutHomeHeader />
        <LayoutHomeBanner />
        <slot />
        <LayoutHomeFooter />
    </main>
</template>

<style lang="scss" scoped>
.main-box {
    width: 100%;
    min-width: 1200px;
}
</style>
