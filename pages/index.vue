<script setup lang="ts">
definePageMeta({
    layout: 'home',
})

const { data } = await useCustomFetch<IIndexResponse>('/api/v1/system/info')
console.log(data.value)
</script>

<template>
    <div class="min-h300px">
        <Suspense>
            <ClientOnly>
                <HomeMain />
            </ClientOnly>
            <template #fallback>
                <div class="min-h500px">
                    <span animate-pulse>Loading...</span>
                </div>
            </template>
        </Suspense>
        <!-- <InputEntry />
    <div class="a">
      {{ name }}
      <span>-123456</span>
    </div> -->
    </div>
</template>

<style  lang="scss" scoped></style>
