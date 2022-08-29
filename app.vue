<script setup>
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
