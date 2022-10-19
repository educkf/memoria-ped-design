<script setup>
const route = useRoute()

const loading = ref(null)
const nuxtApp = useNuxtApp()

nuxtApp.hook("page:start", () => {
    loading.value.start()
})

nuxtApp.hook("page:finish", () => {
    loading.value.finish()
    window.scrollTo(0, 0)
})
</script>

<template>
    <div class="flex">
        <app-loading ref="loading" />

        <app-navigation-sidebar v-if="route.path !== '/'" />

        <div class="w-full">
            <NuxtLayout>
                <NuxtPage class="prose text-left" />
            </NuxtLayout>
        </div>
    </div>
</template>

<style>
    @import '/fonts/manrope/manrope.css';

    html {
        font-family: 'Manrope', sans-serif !important;
        overflow: visible;
    }

    .separator {
        width: 100%;
        height: 10px;
        background-image: url('/images/separator.png');
        background-size: cover;
    }

</style>
