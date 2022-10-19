<script setup>
const { data } = await useAsyncData(`content-navigation`, () => {
    return queryContent().where({ layout: 'default', navigation: { $ne: false } }).only(['title', '_path', 'layout', 'navigation']).find()
})
</script>

<template>
    <div class="w-36 flex flex-col ">
        <app-logo />

        <nav class="flex flex-col my-10">
            <NuxtLink v-for="link of data" :key="link._path" :to="link._path"
                class="block text-xl leading-tight tracking-tight my-2 px-1">
                {{ link.navigation.title }}
            </NuxtLink>

            <!-- <pre>{{ data }}</pre> -->
        </nav>

        <div class="separator"></div>
    </div>
</template>

<style scoped>

    nav a {
        font-weight: 500;
    }

    nav a.router-link-active {
        background-image: url('/images/separator.png');
        font-weight: 700;
    }

</style>
