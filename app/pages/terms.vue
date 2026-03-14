<script lang="ts" setup>
    import { useHead } from '#app';
    import MiniHero from '~/components/layout/MiniHero.vue';

    useHead({
        title: 'Booking Land - Conditions Générales d\'Utilisation',
        meta: [
            {
                name: 'description',
                content: 'Découvrez les conditions générales d\'utilisation de Booking Land, votre plateforme de réservation en ligne pour les locations de vacances.'
            },
            {
                name: 'og:title',
                content: 'Booking Land - Conditions Générales d\'Utilisation'
            },
            {
                name: 'og:description',
                content: 'Découvrez les conditions générales d\'utilisation de Booking Land, votre plateforme de réservation en ligne pour les locations de vacances.'
            },
            {
                name: 'twitter:title',
                content: 'Booking Land - Conditions Générales d\'Utilisation'
            },
            {
                name: 'twitter:description',
                content: 'Découvrez les conditions générales d\'utilisation de Booking Land, votre plateforme de réservation en ligne pour les locations de vacances.'
            }
        ]
    });

    definePageMeta({
        layout: 'secondary'
    });
</script>

<template> 
    <MiniHero 
        title="Conditions Générales d'Utilisation"
        description="Découvrez les conditions générales d'utilisation de Booking Land, votre plateforme de réservation en ligne pour les locations de vacances."
        :breadcrumbs="[
            { label: 'Accueil', to: '/'},
            { label: 'Conditions Générales d\'Utilisation', to: '/terms'}
        ]"
        variant="default"
        align="left"
    />
</template>