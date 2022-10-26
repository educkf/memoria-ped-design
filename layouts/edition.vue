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
        (a, b) => Number(a.edition.year) - Number(b.edition.year)
    )
})
</script>

<template>
    <div class="w-full flex flex-col md:flex-row relative">
        <nav
            class="[ edition-menu ] pt-4 md:pl-6 md:pr-3 py-4 md:py-20 border-r border-r-brown-light
                w-full md:min-w-64 md:w-1/4 md:h-screen overflow-x-auto overflow-y-hidden md:overflow-y-auto md:overflow-x-hidden md:sticky top-0
                flex flex-nowrap md:block
            ">
            <NuxtLink
                v-for="link of editionsNav"
                :key="link._path"
                :to="link.edition.status === 'OK' ? link._path : null"
                class="min-w-[120px] w-[120px] md:w-full bg-gray-100 md:bg-transparent mx-2 rounded-md flex items-center text-xl leading-tight tracking-tight md:mb-6 px-1"
                :class="link.edition.status === 'Pending' ? 'opacity-50' : ''"
            >
                <div class="text-base ml-2">
                    <p class="font-bold">{{ link.edition.location }}</p>
                    <p>{{ link.edition.year }}</p>
                    <p v-if="link.edition.status === 'Pending'" class="italic text-xs">Em breve</p>
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

    .edition-menu {
        scrollbar-width: auto;
        scrollbar-color: rgb(218, 172, 129) #ebebeb;
    }

    /* Chrome, Edge, and Safari */
    .edition-menu::-webkit-scrollbar {
        width: 6px;
    }

    .edition-menu::-webkit-scrollbar-track {
        background: #ebebeb;
    }

    .edition-menu::-webkit-scrollbar-thumb {
        background-color: rgb(218, 172, 129);
        border-radius: 0px;
        border: 0px solid #ffffff;
    }
</style>
