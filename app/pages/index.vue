<script lang="ts" setup>
import TheHeader from '~/components/layout/HomeHeader.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import ProblemSection from '~/components/home/ProblemSection.vue'
import SolutionWorkflow from '~/components/home/SolutionWorkflow.vue'
import BaseBackToTop from '~/components/ui/base/BaseBackToTop.vue'

useHead({
  title: 'Booking Land - Réinventez vos réservations',
  meta: [
    { 
      name: 'description', 
      content: 'La première plateforme de réservation avec négociation de créneaux. Proposez, négociez, confirmez. Simple et flexible.' 
    }
  ]
})

definePageMeta({
  layout: false // On gère le layout nous-mêmes avec TheHeader
})
</script>

<template>
  <div>
    <!-- Hero Section avec Header intégré -->
    <div class="relative">
      <TheHeader />
      <HeroSection />
    </div>

    <!-- Problem Section -->
    <ProblemSection />

    <!-- Solution/Workflow Section -->
    <SolutionWorkflow />

    <!-- TODO: Autres sections à ajouter -->
    <!-- <FeaturesGrid /> -->
    <!-- <BentoShowcase /> -->
    <!-- <AudienceSection /> -->
    <!-- <PricingEarlyAccess /> -->
    <!-- <QuickFAQ /> -->
    <!-- <FinalCTA /> -->

    <!-- BACK TO TOP -->
    <BaseBackToTop isVisible :threshold="1500"/>-->
  </div>
</template>