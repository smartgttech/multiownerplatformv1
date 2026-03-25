<script lang="ts" setup>
import { ref } from 'vue'
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseButton from '~/components/ui/base/BaseButton.vue'
import BaseInput from '~/components/ui/base/BaseInput.vue'
import BaseBadge from '~/components/ui/base/BaseBadge.vue'

// Form state
const formData = ref({
  name: '',
  email: '',
  organizationType: '',
  organizationName: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const organizationTypes = [
  { value: 'formation', label: '🎓 Formation' },
  { value: 'consulting', label: '💼 Consulting' },
  { value: 'coaching', label: '🧘 Coaching' },
  { value: 'sante', label: '🏥 Santé' },
  { value: 'creatif', label: '🎨 Créatif' },
  { value: 'autre', label: '✨ Autre' }
]

const benefits = [
  'Accès gratuit pendant toute la phase MVP',
  'Influence directe sur le développement du produit',
  'Support prioritaire de l\'équipe',
  'Conditions préférentielles au lancement commercial',
  'Badge "Partenaire Fondateur" sur votre profil',
  'Zéro engagement, vous pouvez partir à tout moment'
]

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simuler l'envoi (à remplacer par vraie API)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    isSuccess.value = true
    isSubmitting.value = false
    
    // Reset après 5 secondes
    setTimeout(() => {
      isSuccess.value = false
      formData.value = {
        name: '',
        email: '',
        organizationType: '',
        organizationName: ''
      }
    }, 5000)
  } catch (error) {
    isSubmitting.value = false
    console.error('Erreur soumission:', error)
  }
}
</script>

<template>
  <BaseSection spacing="xl" class="bg-white relative overflow-hidden">
    <!-- Background decorative -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px]"></div>
    
    <div class="max-w-5xl mx-auto relative z-10">
      
      <!-- Header -->
      <div class="text-center mb-12">
        <BaseBadge variant="warning" size="lg" pulse class="mb-4">
          🚀 Places limitées
        </BaseBadge>
        <h2 class="text-4xl lg:text-6xl font-black text-neutral-900 mb-6">
          Devenez organisation <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
            pilote
          </span>
        </h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Rejoignez les pionniers qui construisent avec nous la première plateforme 
          de réservation avec négociation de créneaux.
        </p>
      </div>

      <!-- Main Card -->
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
        
        <!-- Left: Benefits -->
        <div class="space-y-8">
          <!-- Pricing -->
          <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
            <div class="flex items-baseline gap-3 mb-4">
              <span class="text-6xl font-black text-neutral-900">0€</span>
              <span class="text-neutral-600">/</span>
              <span class="text-xl text-neutral-700 font-medium">pendant le MVP</span>
            </div>
            <p class="text-amber-800 font-medium mb-4">
              Accès 100% gratuit jusqu'au lancement commercial
            </p>
            <div class="flex items-center gap-2 text-sm text-amber-700">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Lancement prévu Q2-Q3 2025</span>
            </div>
          </div>

          <!-- Benefits list -->
          <div>
            <h3 class="text-2xl font-bold text-neutral-900 mb-6">
              Ce que vous obtenez :
            </h3>
            <ul class="space-y-4">
              <li
                v-for="(benefit, index) in benefits"
                :key="index"
                class="flex items-start gap-3"
              >
                <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-neutral-700 leading-relaxed">{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <!-- Trust badge -->
          <div class="bg-neutral-50 rounded-xl p-6 border-2 border-neutral-100">
            <div class="flex items-start gap-3">
              <div class="text-3xl">🔒</div>
              <div>
                <p class="font-bold text-neutral-900 mb-1">100% sans risque</p>
                <p class="text-sm text-neutral-600 leading-relaxed">
                  Aucune carte bancaire requise. Aucun engagement. 
                  Vous testez, vous donnez votre avis, c'est tout.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 lg:p-10 text-white shadow-2xl">
          <div v-if="!isSuccess">
            <h3 class="text-2xl font-black mb-2">Rejoignez l'aventure</h3>
            <p class="text-neutral-400 mb-8">
              Remplissez ce formulaire et on vous recontacte très vite
            </p>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Nom -->
              <BaseInput
                v-model="formData.name"
                label="Votre nom"
                placeholder="Jean Dupont"
                required
                full-width
                class="bg-neutral-800 border-neutral-700 text-white"
              />

              <!-- Email -->
              <BaseInput
                v-model="formData.email"
                label="Email professionnel"
                type="email"
                placeholder="jean@organisation.com"
                required
                full-width
                class="bg-neutral-800 border-neutral-700 text-white"
              />

              <!-- Type d'organisation -->
              <div>
                <label class="block text-sm font-bold text-neutral-300 mb-3 uppercase tracking-widest">
                  Type d'organisation
                </label>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    v-for="type in organizationTypes"
                    :key="type.value"
                    type="button"
                    @click="formData.organizationType = type.value"
                    :class="[
                      'px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all',
                      formData.organizationType === type.value
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                        : 'border-neutral-700 bg-neutral-800/50 text-neutral-400 hover:border-neutral-600'
                    ]"
                  >
                    {{ type.label }}
                  </button>
                </div>
              </div>

              <!-- Nom organisation -->
              <BaseInput
                v-model="formData.organizationName"
                label="Nom de l'organisation"
                placeholder="Ma Super Organisation"
                required
                full-width
                class="bg-neutral-800 border-neutral-700 text-white"
              />

              <!-- Submit -->
              <BaseButton
                type="submit"
                variant="secondary"
                size="lg"
                full-width
                :loading="isSubmitting"
                class="h-14 text-lg"
              >
                <span v-if="!isSubmitting">Rejoindre les pionniers 🚀</span>
                <span v-else>Envoi en cours...</span>
              </BaseButton>

              <!-- Privacy note -->
              <p class="text-xs text-neutral-500 text-center">
                En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe. 
                Vos données ne seront jamais vendues.
              </p>
            </form>
          </div>

          <!-- Success state -->
          <div v-else class="text-center py-8">
            <div class="text-7xl mb-6">🎉</div>
            <h3 class="text-3xl font-black mb-4">Bienvenue à bord !</h3>
            <p class="text-neutral-300 text-lg mb-6">
              Merci de rejoindre les organisations pionnières. 
              On vous contacte sous 48h avec les prochaines étapes.
            </p>
            <BaseBadge variant="success" size="lg">
              ✅ Demande enregistrée
            </BaseBadge>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center p-6 bg-neutral-50 rounded-2xl border-2 border-neutral-100">
          <div class="text-4xl font-black text-neutral-900 mb-2">Q2 2025</div>
          <p class="text-neutral-600 font-medium">Lancement prévu</p>
        </div>
        <div class="text-center p-6 bg-neutral-50 rounded-2xl border-2 border-neutral-100">
          <div class="text-4xl font-black text-neutral-900 mb-2">100%</div>
          <p class="text-neutral-600 font-medium">Gratuit en MVP</p>
        </div>
        <div class="text-center p-6 bg-neutral-50 rounded-2xl border-2 border-neutral-100">
          <div class="text-4xl font-black text-neutral-900 mb-2">0</div>
          <p class="text-neutral-600 font-medium">Engagement requis</p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>