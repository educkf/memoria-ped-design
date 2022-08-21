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
    <div>
        <header>
            cabecalho
        </header>

        <div>
            <nav>
                <NuxtLink v-for="navigation in currentEditionNavigation.children" :key="navigation._path"
                    :to="navigation._path">
                    {{ navigation.title}}
                </NuxtLink>
            </nav>

            <section>
                <slot />
            </section>
        </div>

        <pre>{{ currentEditionNavigation }}</pre>
    </div>
</template>
