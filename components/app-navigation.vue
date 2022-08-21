<script setup>

</script>

<template>
    <aside class="h-screen py-20 pl-20 pr-10">
        <div class="w-32 flex flex-col ">
            <app-logo />

            <nav class="flex flex-col">
                <ContentNavigation v-slot="{ navigation }">
                    <NuxtLink v-for="link of navigation"
                        :key="link._path"
                        :to="link._path"
                    >{{ link.title }}</NuxtLink>
                </ContentNavigation>
            </nav>

            <div class="separator"></div>
        </div>
    </aside>
</template>

<style scoped>

    aside {
        background: url('/assets/images/bg.jpg') no-repeat top left;
        background-size: cover;
    }

</style>
