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
    <div class="max-w-2xl mx-auto px-4">
        <header>
            <figure>
                <img :src="`/assets/images/editions/${page.edition.logo}`" alt="">
            </figure>

            <div>
                <h1>{{ page.edition.title }}</h1>
                <p>{{ page.edition.location }}</p>
                <p>{{ page.edition.year }}</p>
            </div>
        </header>

        <div>
            <nav>
                <NuxtLink v-for="link of currentEditionNavigation.children" :key="link._path" :to="link._path"
                    class="block text-xl leading-tight tracking-tight my-2 px-1">
                    {{ link.title }}
                </NuxtLink>
            </nav>

            <section>
                <ContentDoc />
            </section>
        </div>

        <pre>{{ page }}</pre>
    </div>
</template>
