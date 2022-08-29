import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-windicss'
    ],

    css: [
        '@/assets/windi.css',
    ],

    postcss: {
        plugins: {
            'postcss-nested': {},
        },
    }
})
