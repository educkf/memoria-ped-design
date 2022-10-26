<script setup>

definePageMeta({
    layout: "edition",
})

useHead({
    title: 'Memória P&D Design',
    description: 'Acervo colaborativo do Congresso Brasileiro de Pesquisa e Desenvolvimento em Design - P&D Design.'
})

const route = useRoute()

const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent()
        .where({ _path: path })
        .findOne()
})

const { data: navigation } = await useAsyncData(`content-${path}-navigation`, () => {
    return queryContent()
        .where({
            layout: 'edition',
            edition: { id: route.params.slug[0] }
        }).only(
            ['title', '_path', 'layout', 'navigation']
        ).find()
})

watch(() => route.params.slug, async () => {
    const { path } = useRoute()
    const newContent = await queryContent()
        .where({ _path: path })
        .findOne()

    data.value = newContent
})

</script>

<template>
    <main v-if="data" class="max-w-4xl mx-auto flex flex-col md:flex-row px-4">
        <aside v-if="data" class="flex items-center justify-around md:block my-0 md:mt-22 md:mb-10">
            <figure class="w-40 h-auto md:h-56">
                <img :src="`/images/editions/${data.edition.logo}`" :alt="data.edition.title" class="w-full">
            </figure>

            <nav class="w-48 space-y-4 ml-2 md:ml-0">
                <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path"
                    class="block text-xl leading-tight tracking-tight px-1">
                    {{ link.navigation.title }}
                </NuxtLink>
            </nav>
        </aside>

        <div class="mt-10 md:mt-22">
            <header class="ml-4 md:ml-10 pr-20 h-48 mb-10 flex flex-col justify-center">
                <h1 class="text-2xl font-800 mb-2 leading-tight">{{ data.edition.title }}</h1>
                <p class="text-lg font-400 mb-1">{{ data.edition.location }}</p>
                <p class="text-lg font-400">{{ data.edition.year }}</p>
            </header>

            <section class="[ edition-content ] ml-4 md:ml-10 mb-48">
                <ContentRenderer :key="path" :value="data" />
            </section>
        </div>
    </main>
</template>

<style lang="postcss" scoped>

    nav a.router-link-active {
        font-weight: 700;
    }

    .edition-content {
        & :deep(h1) {
            @apply text-3xl mb-6 mt-10 font-extrabold
        }

        & :deep(h3) {
            @apply text-lg mb-1 leading-tight font-bold
        }

        & :deep(h3 ~ p) {
            @apply text-base mb-3
        }
    }

</style>
