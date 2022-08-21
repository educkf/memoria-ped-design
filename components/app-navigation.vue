<script setup>

</script>

<template>
    <aside class="h-screen w-1/5 min-w-64 py-20 pl-20 pr-10 flex justify-end">
        <div class="w-36 flex flex-col ">
            <app-logo />

            <nav class="flex flex-col my-10">
                <ContentNavigation v-slot="{ navigation }">
                    <NuxtLink
                        v-for="link of navigation"
                        :key="link._path"
                        :to="link._path"
                        class="block text-xl leading-tight tracking-tight my-2 px-1"
                    >
                        {{ link.title }}
                    </NuxtLink>
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

    nav a {
        font-weight: 500;
    }

    nav a.router-link-active {
        background-image: url('/assets/images/separator.png');
        font-weight: 700;
    }

</style>
