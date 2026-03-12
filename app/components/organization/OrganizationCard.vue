<script lang="ts" setup>
import { computed } from 'vue'
import BaseCard from '../ui/base/BaseCard.vue'
import BaseBadge from '../ui/base/BaseBadge.vue'

/**
 * OrganizationCard - Carte d'organisation pour le catalogue
 * 
 * Utilise BaseCard comme wrapper et affiche les données d'une organisation
 * 
 * @example
 * <OrganizationCard :organization="org" />
 */

// ============================================
// TYPES & INTERFACES
// ============================================
interface Service {
  id: number
  name: string
  duration?: string
  price?: string
}

interface Organization {
  id: number
  slug: string
  name: string
  description: string
  logo?: string
  category: string
  location: string
  verified?: boolean
  rating?: number
  reviewCount?: number
  services: Service[]
}

interface Props {
  /** Données de l'organisation */
  organization: Organization
  /** Nombre max de services affichés */
  maxServices?: number
  /** Afficher l'image */
  showImage?: boolean
}

// ============================================
// PROPS & DEFAULTS
// ============================================
const props = withDefaults(defineProps<Props>(), {
  maxServices: 3,
  showImage: true
})

// ============================================
// COMPUTED
// ============================================

// Services à afficher (limité)
const displayedServices = computed(() => {
  return props.organization.services.slice(0, props.maxServices)
})

// Nombre de services restants
const remainingServices = computed(() => {
  return Math.max(0, props.organization.services.length - props.maxServices)
})

// ============================================
// METHODS
// ============================================

// Navigation vers le profil de l'organisation
const goToOrganization = () => {
  navigateTo(`/organizations/${props.organization.slug}`)
}
</script>

<template>
  <BaseCard 
    hoverable 
    clickable
    @click="goToOrganization"
    class="h-full"
  >
    <!-- Image / Logo -->
    <template v-if="showImage && organization.logo" #image>
      <img 
        :src="organization.logo" 
        :alt="organization.name"
        class="w-full h-48 object-cover"
      />
    </template>

    <!-- Header : Nom + Badges -->
    <template #header>
      <div class="flex items-start justify-between gap-3">
        <div class="flex-1 min-w-0">
          <!-- Nom de l'organisation -->
          <h3 class="text-xl font-bold text-neutral-900 mb-1 truncate">
            {{ organization.name }}
          </h3>
          
          <!-- Localisation + Note -->
          <div class="flex items-center gap-2 text-sm text-neutral-600 flex-wrap">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ organization.location }}
            </span>
            
            <span v-if="organization.rating" class="flex items-center gap-1">
              <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {{ organization.rating }}
              <span v-if="organization.reviewCount" class="text-neutral-400">
                ({{ organization.reviewCount }})
              </span>
            </span>
          </div>
        </div>

        <!-- Badge vérifié -->
        <BaseBadge 
          v-if="organization.verified" 
          variant="success" 
          size="sm"
          class="flex-shrink-0"
        >
          <template #icon-left>
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </template>
          Vérifié
        </BaseBadge>
      </div>
    </template>

    <!-- Body : Description + Catégorie + Services -->
    <template #body>
      <!-- Description -->
      <p class="text-neutral-600 text-sm mb-4 line-clamp-2">
        {{ organization.description }}
      </p>

      <!-- Catégorie -->
      <div class="mb-4">
        <BaseBadge variant="primary" size="sm">
          {{ organization.category }}
        </BaseBadge>
      </div>

      <!-- Services cliquables (avec @click.stop) -->
      <div v-if="displayedServices.length > 0" class="space-y-2">
        <p class="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
          Services disponibles
        </p>
        
        <NuxtLink
          v-for="service in displayedServices"
          :key="service.id"
          :to="`/book/${organization.slug}/${service.id}`"
          @click.stop
          class="flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-primary-300 hover:bg-primary-50 transition-all group"
        >
          <div class="flex-1 min-w-0">
            <p class="font-medium text-sm text-neutral-900 group-hover:text-primary-600 truncate">
              {{ service.name }}
            </p>
            <p v-if="service.duration || service.price" class="text-xs text-neutral-500">
              <span v-if="service.duration">{{ service.duration }}</span>
              <span v-if="service.duration && service.price"> · </span>
              <span v-if="service.price">{{ service.price }}</span>
            </p>
          </div>
          
          <!-- Icône flèche (apparaît au hover) -->
          <svg 
            class="w-4 h-4 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>
    </template>

    <!-- Footer : Lien "Voir tout" -->
    <template #footer>
      <NuxtLink
        :to="`/organizations/${organization.slug}`"
        @click.stop
        class="text-primary-600 text-sm font-medium hover:text-primary-700 inline-flex items-center gap-1 transition-colors"
      >
        <span v-if="remainingServices > 0">
          Voir {{ remainingServices }} autre{{ remainingServices > 1 ? 's' : '' }} service{{ remainingServices > 1 ? 's' : '' }}
        </span>
        <span v-else>
          Voir tous les détails
        </span>
        
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </NuxtLink>
    </template>
  </BaseCard>
</template>

<style scoped>
/* Limite le texte à 2 lignes */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>