<script setup>

definePageMeta({
    layout: "home",
})

</script>

<template>
    <main class="w-screen h-screen flex justify-center items-center">
        <div class="w-full max-w-5xl mx-auto flex justify-between items-center">
            <nav class="-mt-10 mr-10">
                <app-navigation />
            </nav>
            <section class="w-full h-[90vh]">
                <home-brasil class="w-full h-[90vh]" />
            </section>
        </div>
    </main>
</template>

<style scoped lang="postcss">

main {
    background: url('/images/bg.jpg') repeat-x top left;
    background-size: contain;
}

nav a {
    font-weight: 500;
}

nav a.router-link-active {
    background-image: url('/images/separator.png');
    font-weight: 700;
}
</style>
