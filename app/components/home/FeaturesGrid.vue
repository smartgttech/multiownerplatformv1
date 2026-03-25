<script lang="ts" setup>
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseBadge from '~/components/ui/base/BaseBadge.vue'

const features = [
  {
    icon: '🎯',
    title: 'Négociation de créneaux',
    description: 'Proposez, contre-proposez, trouvez le bon moment ensemble. Plus de créneaux imposés.',
    highlight: true,
    color: 'amber'
  },
  {
    icon: '🏢',
    title: 'Multi-organisations',
    description: 'Architecture pensée pour les structures avec plusieurs membres et services.',
    highlight: false,
    color: 'blue'
  },
  {
    icon: '👥',
    title: 'Gestion des rôles',
    description: 'Admin, Manager, Opérateur : chacun ses permissions et son périmètre d\'action.',
    highlight: false,
    color: 'purple'
  },
  {
    icon: '📅',
    title: 'Disponibilités flexibles',
    description: 'Définissez des plages de référence, mais acceptez les créneaux alternatifs.',
    highlight: false,
    color: 'green'
  },
  {
    icon: '💬',
    title: 'Messagerie intégrée',
    description: 'Échangez directement dans la plateforme sans multiplier les canaux.',
    highlight: false,
    color: 'pink'
  },
  {
    icon: '📊',
    title: 'Dashboard complet',
    description: 'Vision consolidée de toutes vos réservations, en cours et à venir.',
    highlight: false,
    color: 'indigo'
  },
  {
    icon: '🔔',
    title: 'Notifications temps réel',
    description: 'Email et notifications push pour ne jamais manquer une demande ou une mise à jour.',
    highlight: false,
    color: 'orange'
  },
  {
    icon: '⚡',
    title: 'API ouverte',
    description: 'Intégrez Booking Land avec vos outils existants (CRM, calendriers, facturation).',
    highlight: false,
    color: 'cyan'
  }
]

const colorClasses: Record<string, { border: string, bg: string, text: string }> = {
  amber: { border: 'border-amber-300', bg: 'bg-amber-50', text: 'text-amber-600' },
  blue: { border: 'border-blue-200', bg: 'bg-blue-50', text: 'text-blue-600' },
  purple: { border: 'border-purple-200', bg: 'bg-purple-50', text: 'text-purple-600' },
  green: { border: 'border-green-200', bg: 'bg-green-50', text: 'text-green-600' },
  pink: { border: 'border-pink-200', bg: 'bg-pink-50', text: 'text-pink-600' },
  indigo: { border: 'border-indigo-200', bg: 'bg-indigo-50', text: 'text-indigo-600' },
  orange: { border: 'border-orange-200', bg: 'bg-orange-50', text: 'text-orange-600' },
  cyan: { border: 'border-cyan-200', bg: 'bg-cyan-50', text: 'text-cyan-600' }
}
</script>

<template>
  <BaseSection spacing="xl" class="bg-white">
    <div class="max-w-6xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-16">
        <BaseBadge variant="primary" styleType="subtle" class="mb-4">Fonctionnalités</BaseBadge>
        <h2 class="text-4xl lg:text-5xl font-black text-neutral-900 mb-6">
          Tout ce dont vous avez besoin
        </h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Une plateforme complète pensée pour les organisations modernes qui veulent 
          simplifier leurs réservations sans sacrifier la flexibilité.
        </p>
      </div>

      <!-- Grid features -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="index"
          :class="[
            'group relative bg-white rounded-2xl p-6 border-2 transition-all duration-300',
            feature.highlight 
              ? 'border-amber-300 shadow-xl shadow-amber-500/10 lg:col-span-2 lg:row-span-2' 
              : `${colorClasses[feature.color].border} hover:shadow-xl hover:-translate-y-1`
          ]"
        >
          <!-- Badge highlight -->
          <div v-if="feature.highlight" class="absolute -top-3 -right-3">
            <BaseBadge variant="warning" size="sm" pulse>
              🔥 Killer Feature
            </BaseBadge>
          </div>

          <!-- Icon -->
          <div 
            :class="[
              'mb-4 rounded-xl p-3 inline-flex',
              colorClasses[feature.color].bg,
              feature.highlight ? 'text-6xl' : 'text-5xl'
            ]"
          >
            {{ feature.icon }}
          </div>

          <!-- Title -->
          <h3 
            :class="[
              'font-bold mb-3',
              colorClasses[feature.color].text,
              feature.highlight ? 'text-2xl' : 'text-xl'
            ]"
          >
            {{ feature.title }}
          </h3>

          <!-- Description -->
          <p 
            :class="[
              'text-neutral-600 leading-relaxed',
              feature.highlight ? 'text-base' : 'text-sm'
            ]"
          >
            {{ feature.description }}
          </p>

          <!-- Extra info pour highlight -->
          <div v-if="feature.highlight" class="mt-6 pt-6 border-t-2 border-amber-200">
            <p class="text-sm text-amber-700 font-medium">
              ✨ Ce qui nous différencie vraiment de tous les outils existants
            </p>
          </div>
        </div>
      </div>

      <!-- Footer note -->
      <div class="mt-16 text-center">
        <div class="inline-block bg-neutral-50 rounded-2xl px-8 py-4 border-2 border-neutral-100">
          <p class="text-neutral-600">
            <strong class="text-neutral-900">Et ce n'est que le début.</strong> 
            D'autres fonctionnalités sont prévues pour la version commerciale.
          </p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>