<script setup>
const { data: navigation } = await useAsyncData(`content-editions`, () => {
    return queryContent()
        .where({
            layout: 'edition',
        }).only(
            ['title', '_path', 'layout', 'navigation', 'edition']
        ).find()
})

const editionsNav = computed(() => {
    const editions = navigation.value.reduce((total, item) => {
        if (item?.edition?.id)
            return total.find(added => added.edition.id === item.edition.id)
                ? total
                : [...total, item]
        else return total
    }, [])

    return [...editions].sort(
        (a, b) => Number(b.edition.year) - Number(a.edition.year)
    )
})
</script>

<template>
    <div class="w-full flex relative">
        <nav
            class="[ edition-menu ] pl-6 pr-3 pt-20 border-r border-r-brown-light min-w-64 w-1/4 h-screen overflow-auto sticky top-0">
            <NuxtLink v-for="link of editionsNav" :key="link._path" :to="link._path"
                class="flex text-xl leading-tight tracking-tight mb-4 px-1"
            >
                <div class="text-base ml-2">
                    <p class="font-bold">{{ link.edition.location }}</p>
                    <p>{{ link.edition.year }}</p>
                </div>
            </NuxtLink>
        </nav>
        <div class="w-full grow">
            <NuxtPage />
        </div>
    </div>
</template>

<style lang="postcss">
    .edition-content > div {
        *:first-child {
            @apply mt-0;
        }

        p {
            @apply text-lg leading-relaxed mb-4;
        }
    }

    .edition-menu .router-link-active {
        @apply text-brown-default
    }
</style>
