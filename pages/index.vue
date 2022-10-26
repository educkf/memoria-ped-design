<script setup>

definePageMeta({
    layout: "home",
})

useHead({
    title: 'Memória P&D Design',
    description: 'Acervo colaborativo do Congresso Brasileiro de Pesquisa e Desenvolvimento em Design - P&D Design.'
})

</script>

<template>
    <main class="w-screen h-screen flex justify-center items-center bg-cover lg:bg-contain">
        <div class="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="w-full flex justify-center md:block md:w-auto md:-mt-10 md:mr-10">
                <app-navigation class="mb-20" />
            </div>
            <section class="w-full md:h-[90vh]">
                <home-brasil class="w-full md:h-[90vh]" />
            </section>
        </div>
    </main>
</template>

<style scoped lang="postcss">
main {
    background: url('/images/bg.jpg') repeat-x top left;
}

nav a {
    font-weight: 500;
}

nav a.router-link-active {
    background-image: url('/images/separator.png');
    font-weight: 700;
}
</style>
