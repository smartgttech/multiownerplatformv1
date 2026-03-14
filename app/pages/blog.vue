<script lang="ts" setup>
    import { useHead } from '#app';
    import MiniHero from '~/components/layout/MiniHero.vue';

    useHead({
        title: 'Booking Land - Blog',
        meta: [
            {
                name: 'description',
                content: 'Découvrez nos articles et actualités sur Booking Land, votre plateforme de réservation en ligne pour les locations de vacances.'
            },
            {
                name: 'og:title',
                content: 'Booking Land - Blog'
            },
            {
                name: 'og:description',
                content: 'Découvrez nos articles et actualités sur Booking Land, votre plateforme de réservation en ligne pour les locations de vacances.'
            },
            {
                name: 'twitter:title',
                content: 'Booking Land - Blog'
            },
            {
                name: 'twitter:description',
                content: 'Découvrez nos articles et actualités sur Booking Land, votre plateforme de réservation en ligne pour les locations de vacances.'
            }
        ]
    });

    definePageMeta({
        layout: 'secondary'
    });
</script>

<template> 
    <MiniHero 
        title="Blog"
        description="Découvrez nos articles et actualités pour optimiser votre expérience de réservation."
        :breadcrumbs="[
            { label: 'Accueil', to: '/'},
            { label: 'Blog', to: '/blog'}
        ]"
        variant="default"
        align="left"
    />
</template>