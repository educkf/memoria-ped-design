<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
})


definePageMeta({
    layout: "edition",
})

useHead({
    title: 'Memória P&D Design',
    description: 'Acervo colaborativo do Congresso Brasileiro de Pesquisa e Desenvolvimento em Design - P&D Design.'
})
</script>

<template>
    <main>
        <div class="[ page-content ] max-w-4xl mt-22 mx-auto flex px-4">
            <ContentRenderer :value="data" />
        </div>
    </main>
</template>

<style lang="postcss" scoped>

    .page-content {
        & :deep(h1) {
            @apply text-4xl mb-6 font-extrabold
        }

        & :deep(h2) {
            @apply text-3xl
        }
    }

</style>
