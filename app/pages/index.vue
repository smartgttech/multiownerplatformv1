<script lang="ts" setup>
import TheHeader from '~/components/layout/HomeHeader.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import ProblemSection from '~/components/home/ProblemSection.vue'
import SolutionWorkflow from '~/components/home/SolutionWorkflow.vue'
import BaseBackToTop from '~/components/ui/base/BaseBackToTop.vue'
import FeaturesGrid from '~/components/home/FeaturesGrid.vue'
import BentoShowCase from '~/components/home/BentoShowCase.vue'
import TrustIndicators from '~/components/home/TrustIndicators.vue'
import PricingEarlyAccess from '~/components/home/PricingEarlyAccess.vue'
import ComparisonTable from '~/components/home/ComparisonTable.vue'
import QuickFac from '~/components/home/QuickFac.vue'
import FinalCta from '~/components/home/FinalCta.vue'
import AudienceSection from '~/components/home/AudienceSection.vue'

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
  layout: "default" // On gère le layout nous-mêmes avec TheHeader
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

    <!-- FeaturesGrid Section -->
    <FeaturesGrid />

    <!-- <BentoShowcase Section -->
    <BentoShowCase />

    <!-- <TrustIndicator Section -->
    <TrustIndicators />
    
    <!-- <PricingEarlyAccess Section -->
    <PricingEarlyAccess />

    <!-- <Comparison Section -->
    <ComparisonTable />

    <!-- <Audience Section -->
    <AudienceSection />

    <!-- <QuickFac Section -->
    <QuickFac />

    <!-- <FinalCTA Section -->
    <FinalCta />

    <!-- BACK TO TOP -->
    <BaseBackToTop isVisible :threshold="1500"/>-->
  </div>
</template>