<script setup>
const { navigation, page } = useContent()
const route = useRoute()

const currentEditionNavigation = computed(() => {
    const editions = navigation.value.find(item => item._path === '/edicoes')
    const currEdition = editions.children.find(item => route.path.includes(item._path))
    return currEdition
})

</script>

<template>
    <div class="max-w-4xl mx-auto flex px-4">
        <aside class="mt-22 mb-10">
            <figure class="w-40 h-56">
                <img :src="`/assets/images/editions/${page.edition.logo}`" :alt="page.edition.title" class="w-full">
            </figure>

            <nav class="w-48">
                <NuxtLink v-for="link of currentEditionNavigation.children" :key="link._path" :to="link._path"
                    class="block text-xl leading-tight tracking-tight mb-4 px-1">
                    {{ link.title }}
                </NuxtLink>
            </nav>
        </aside>

        <div class="mt-22">
            <header class="ml-10 pr-20 h-48 mb-10 flex flex-col justify-center">
                <h1 class="text-2xl font-800 mb-2 leading-tight">{{ page.edition.title }}</h1>
                <p class="text-lg font-400 mb-1">{{ page.edition.location }}</p>
                <p class="text-lg font-400">{{ page.edition.year }}</p>
            </header>

            <section class="edition-content ml-10 mb-48">
                <ContentDoc />
            </section>
        </div>
    </div>
</template>


<style lang="postcss" scoped>

    nav a.router-link-active {
        font-weight: 700;
    }

</style>

<style lang="postcss">
    .edition-content > div {
        *:first-child {
            @apply mt-0;
        }

        p {
            @apply text-lg leading-relaxed mb-4;
        }
    }
</style>
