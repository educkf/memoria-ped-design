<script setup>
</script>

<template>
    <div class="max-w-4xl mx-auto flex px-4">
        <div class="mt-8 md:mt-22">
            <section class="page-content mb-48">
                <NuxtPage />
            </section>
        </div>
    </div>
</template>

<style lang="postcss">
    .page-content > div {
        *:first-child {
            @apply mt-0;
        }

        h1 {
            @apply text-4xl font-700 mb-4;
        }

        p {
            @apply text-lg leading-relaxed mb-4;
        }
    }
</style>
