<script setup>

const { page } = useContent()
useContentHead(page)

</script>

<template>
    <div class="flex">
        <app-navigation />

        <div class="w-full">
            <NuxtLayout>
                <NuxtPage class="prose text-left" />
            </NuxtLayout>
        </div>
    </div>
</template>

<style>

    .separator {
        width: 100%;
        height: 10px;
        background-image: url('/assets/images/separator.png');
        background-size: cover;
    }

</style>
