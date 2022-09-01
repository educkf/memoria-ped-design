<script setup>

definePageMeta({
    layout: "edition",
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
    <main v-if="data" class="max-w-4xl mx-auto flex px-4">
        <aside v-if="data" class="mt-22 mb-10">
            <figure class="w-40 h-56">
                <img :src="`/images/editions/${data.edition.logo}`" :alt="data.edition.title" class="w-full">
            </figure>

            <nav class="w-48">
                <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path"
                    class="block text-xl leading-tight tracking-tight mb-4 px-1">
                    {{ link.navigation.title }}
                </NuxtLink>
            </nav>
        </aside>

        <div class="mt-22">
            <header class="ml-10 pr-20 h-48 mb-10 flex flex-col justify-center">
                <h1 class="text-2xl font-800 mb-2 leading-tight">{{ data.edition.title }}</h1>
                <p class="text-lg font-400 mb-1">{{ data.edition.location }}</p>
                <p class="text-lg font-400">{{ data.edition.year }}</p>
            </header>

            <section class="edition-content ml-10 mb-48">
                <ContentRenderer :key="path" :value="data" />
            </section>
        </div>
    </main>
</template>

<style lang="postcss" scoped>

    nav a.router-link-active {
        font-weight: 700;
    }

</style>
