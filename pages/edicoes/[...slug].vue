<script setup>
definePageMeta({
    layout: "edition",
});

const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
    <main>
        /edicao/[...slug].vue
        <div>
            <ContentRenderer :value="data" />
        </div>
    </main>
</template>
