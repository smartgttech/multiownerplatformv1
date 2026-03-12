<script lang="ts" setup>
    import { useHead } from '#app';
    import MiniHero from '~/components/layout/MiniHero.vue';

    useHead({
        title: 'Booking Land - Politique de Confidentialité',
        meta: [
            {
                name: 'description',
                content: 'Consultez la politique de confidentialité de Booking Land. Découvrez comment nous protégeons vos données personnelles sur notre plateforme de réservation.'
            },
            {
                name: 'og:title',
                content: 'Booking Land - Politique de Confidentialité'
            },
            {
                name: 'og:description',
                content: 'Consultez la politique de confidentialité de Booking Land. Découvrez comment nous protégeons vos données personnelles sur notre plateforme de réservation.'
            },
            {
                name: 'twitter:title',
                content: 'Booking Land - Politique de Confidentialité'
            },
            {
                name: 'twitter:description',
                content: 'Consultez la politique de confidentialité de Booking Land. Découvrez comment nous protégeons vos données personnelles sur notre plateforme de réservation.'
            }
        ]
    });

    definePageMeta({
        layout: 'secondary'
    });
</script>

<template> 
    <MiniHero 
        title="Politique de Confidentialité"
        description="Consultez la politique de confidentialité de Booking Land. Découvrez comment nous protégeons vos données personnelles sur notre plateforme de réservation."
        :breadcrumbs="[
            { label: 'Accueil', to: '/'},
            { label: 'Politique de Confidentialité', to: '/privacy'}
        ]"
        variant="default"
        align="left"
    />
</template>