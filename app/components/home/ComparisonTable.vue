<script lang="ts" setup>
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseBadge from '~/components/ui/base/BaseBadge.vue'

const criteria = [
  {
    name: 'Négociation de créneaux',
    description: 'Proposition/contre-proposition de créneaux',
    bookingLand: true,
    calendly: false,
    doodle: false,
    importance: 'high'
  },
  {
    name: 'Multi-organisations',
    description: 'Architecture native pour structures avec équipes',
    bookingLand: true,
    calendly: 'partial',
    doodle: false,
    importance: 'high'
  },
  {
    name: 'Gestion des rôles',
    description: 'Admin, Manager, Opérateur avec permissions',
    bookingLand: true,
    calendly: 'partial',
    doodle: false,
    importance: 'medium'
  },
  {
    name: 'Workflow flexible',
    description: 'Acceptation, refus, contre-proposition',
    bookingLand: true,
    calendly: false,
    doodle: 'partial',
    importance: 'high'
  },
  {
    name: 'Vision marketplace',
    description: 'Découverte d\'organisations et services',
    bookingLand: true,
    calendly: false,
    doodle: false,
    importance: 'medium'
  },
  {
    name: 'Intégration calendriers',
    description: 'Google Calendar, Outlook, iCal',
    bookingLand: 'coming',
    calendly: true,
    doodle: true,
    importance: 'medium'
  }
]

const getIcon = (value: boolean | 'partial' | 'coming') => {
  if (value === true) return { icon: '✅', color: 'text-green-600', label: 'Oui' }
  if (value === 'partial') return { icon: '⚠️', color: 'text-amber-600', label: 'Partiel' }
  if (value === 'coming') return { icon: '🔜', color: 'text-blue-600', label: 'Bientôt' }
  return { icon: '❌', color: 'text-red-400', label: 'Non' }
}
</script>

<template>
  <BaseSection spacing="xl" variant="gray">
    <div class="max-w-6xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-16">
        <BaseBadge variant="primary" styleType="subtle" class="mb-4">Comparaison</BaseBadge>
        <h2 class="text-4xl lg:text-5xl font-black text-neutral-900 mb-6">
          Pourquoi choisir Booking Land ?
        </h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Nous ne sommes pas juste "un autre outil de réservation". 
          Voici ce qui nous rend uniques.
        </p>
      </div>

      <!-- Comparison Table - Desktop -->
      <div class="hidden lg:block">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-neutral-100">
          <!-- Header -->
          <div class="grid grid-cols-5 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-6">
            <div class="col-span-2 font-bold text-lg">Critère</div>
            <div class="text-center">
              <div class="inline-block">
                <div class="font-black text-xl mb-1 text-amber-400">Booking Land</div>
                <BaseBadge variant="warning" size="sm" class="bg-amber-500 text-white border-none">
                  Nous
                </BaseBadge>
              </div>
            </div>
            <div class="text-center font-bold">Calendly</div>
            <div class="text-center font-bold">Doodle</div>
          </div>

          <!-- Rows -->
          <div class="divide-y divide-neutral-100">
            <div
              v-for="(criterion, index) in criteria"
              :key="index"
              :class="[
                'grid grid-cols-5 p-6 hover:bg-neutral-50 transition-colors',
                criterion.importance === 'high' ? 'bg-amber-50/30' : ''
              ]"
            >
              <!-- Critère -->
              <div class="col-span-2">
                <div class="flex items-start gap-3">
                  <div
                    v-if="criterion.importance === 'high'"
                    class="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"
                  ></div>
                  <div>
                    <p class="font-bold text-neutral-900 mb-1">{{ criterion.name }}</p>
                    <p class="text-sm text-neutral-600">{{ criterion.description }}</p>
                  </div>
                </div>
              </div>

              <!-- Booking Land -->
              <div class="text-center">
                <div :class="['text-3xl', getIcon(criterion.bookingLand).color]">
                  {{ getIcon(criterion.bookingLand).icon }}
                </div>
              </div>

              <!-- Calendly -->
              <div class="text-center">
                <div :class="['text-3xl', getIcon(criterion.calendly).color]">
                  {{ getIcon(criterion.calendly).icon }}
                </div>
              </div>

              <!-- Doodle -->
              <div class="text-center">
                <div :class="['text-3xl', getIcon(criterion.doodle).color]">
                  {{ getIcon(criterion.doodle).icon }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Comparison Cards - Mobile -->
      <div class="lg:hidden space-y-6">
        <div
          v-for="(criterion, index) in criteria"
          :key="index"
          :class="[
            'bg-white rounded-2xl p-6 border-2',
            criterion.importance === 'high' ? 'border-amber-300' : 'border-neutral-100'
          ]"
        >
          <div class="mb-4">
            <div class="flex items-start gap-2 mb-2">
              <div
                v-if="criterion.importance === 'high'"
                class="w-2 h-2 bg-amber-500 rounded-full mt-2"
              ></div>
              <h3 class="font-bold text-neutral-900">{{ criterion.name }}</h3>
            </div>
            <p class="text-sm text-neutral-600">{{ criterion.description }}</p>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <!-- Booking Land -->
            <div class="text-center">
              <p class="text-xs font-bold text-neutral-700 mb-2">Booking Land</p>
              <div :class="['text-3xl', getIcon(criterion.bookingLand).color]">
                {{ getIcon(criterion.bookingLand).icon }}
              </div>
            </div>

            <!-- Calendly -->
            <div class="text-center">
              <p class="text-xs font-bold text-neutral-700 mb-2">Calendly</p>
              <div :class="['text-3xl', getIcon(criterion.calendly).color]">
                {{ getIcon(criterion.calendly).icon }}
              </div>
            </div>

            <!-- Doodle -->
            <div class="text-center">
              <p class="text-xs font-bold text-neutral-700 mb-2">Doodle</p>
              <div :class="['text-3xl', getIcon(criterion.doodle).color]">
                {{ getIcon(criterion.doodle).icon }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="mt-8 flex flex-wrap justify-center gap-6 text-sm">
        <div class="flex items-center gap-2">
          <span class="text-2xl">✅</span>
          <span class="text-neutral-700">Disponible</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-2xl">⚠️</span>
          <span class="text-neutral-700">Partiel/Limité</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-2xl">🔜</span>
          <span class="text-neutral-700">Bientôt disponible</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-2xl">❌</span>
          <span class="text-neutral-700">Non disponible</span>
        </div>
      </div>

      <!-- Footer note -->
      <div class="mt-12 text-center">
        <div class="inline-block bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl px-8 py-6 border-2 border-amber-200 max-w-3xl">
          <p class="text-amber-900 font-medium">
            <strong>💡 Notre différence clé :</strong> La négociation de créneaux. 
            C'est ce qui fait de Booking Land bien plus qu'un simple outil de réservation.
          </p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>