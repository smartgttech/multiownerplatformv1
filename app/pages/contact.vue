<script lang="ts" setup>
import { ref } from 'vue'
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseCard from '~/components/ui/base/BaseCard.vue'
import BaseButton from '~/components/ui/base/BaseButton.vue'
import BaseInput from '~/components/ui/base/BaseInput.vue'
import BaseTextarea from '~/components/ui/base/BaseTextarea.vue'
import BaseBadge from '~/components/ui/base/BaseBadge.vue'

useHead({
  title: 'Nous contacter - Booking Land'
})

definePageMeta({
  layout: 'secondary'
})

// ============================================
// STATE
// ============================================
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  type: 'general'
})
 
const isSubmitting = ref(false)
const isSuccess = ref(false)
const isError = ref(false)
 
// ============================================
// METHODS
// ============================================
const submitForm = async () => {
  isSubmitting.value = true
  isError.value = false
  
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    isSubmitting.value = false
    isSuccess.value = true
    
    setTimeout(() => {
      isSuccess.value = false
      formData.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'general'
      }
    }, 5000)
  } catch (error) {
    isSubmitting.value = false
    isError.value = true
  }
}
 
// ============================================
// DATA
// ============================================
const contactTypes = [
  { value: 'general', label: 'Question', icon: '✨' },
  { value: 'support', label: 'Support', icon: '🛠️' },
  { value: 'partnership', label: 'Partenaire', icon: '🤝' },
  { value: 'demo', label: 'Démo', icon: '🚀' }
]
</script>

<template>
  <div class="overflow-hidden bg-white min-h-screen">
    
    <!-- ========================================== -->
    <!-- HERO (Tailles optimisées) -->
    <!-- ========================================== -->
    <BaseSection spacing="lg" class="relative">
      <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      
      <div class="max-w-4xl">
        <BaseBadge variant="primary" styleType="outline" class="mb-4">Contactez l'équipe</BaseBadge>
        
        <!-- ✅ Titre réduit : text-5xl → text-6xl (au lieu de text-8xl) -->
        <h1 class="text-5xl md:text-6xl font-black text-neutral-900 leading-tight mb-6">
          Parlons de votre <br/>
          <span class="text-blue-600">futur projet.</span>
        </h1>
        
        <!-- ✅ Description réduite : text-2xl → text-xl -->
        <p class="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed">
          Que vous soyez une organisation ou un expert, nous sommes là pour fluidifier vos échanges.
        </p>
      </div>
    </BaseSection>

    <!-- ========================================== -->
    <!-- BENTO GRID (Hauteurs optimisées) -->
    <!-- ========================================== -->
    <BaseSection spacing="lg" width="wide">
      <!-- ✅ Hauteur réduite : 300px → 240px, responsive sur mobile -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[240px]">
        
        <!-- Chat en direct (8 cols) -->
        <div class="md:col-span-8 group relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-neutral-900 min-h-[200px] md:min-h-0">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-60 transition-all duration-700 bg-gradient-to-br from-blue-600/40 to-transparent blur-3xl"></div>
          
          <!-- ✅ Padding réduit : p-10 → p-6 md:p-8 -->
          <div class="relative h-full p-6 md:p-8 flex flex-col justify-between z-10 text-white">
            <!-- ✅ Icône réduite : text-5xl → text-4xl -->
            <div class="text-4xl">💬</div>
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <!-- ✅ Titre réduit : text-3xl → text-2xl -->
                <h3 class="text-2xl font-bold mb-2">Chat en direct</h3>
                <p class="text-neutral-400 text-sm">Réponse en moins de 5 min.</p>
              </div>
              <BaseButton variant="secondary" size="md" class="w-full sm:w-auto">Lancer</BaseButton>
            </div>
          </div>
        </div>

        <!-- Démo (4 cols) -->
        <div class="md:col-span-4 group relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-amber-500 text-neutral-950 min-h-[200px] md:min-h-0">
          <div class="relative h-full p-6 md:p-8 flex flex-col justify-between z-10">
            <div class="text-4xl group-hover:scale-110 transition-transform duration-500">📅</div>
            <div>
              <BaseBadge variant="primary" class="bg-black text-white border-none mb-3" pulse>Live</BaseBadge>
              <h3 class="text-2xl font-black mb-2">Démo</h3>
              <p class="text-neutral-900/60 mb-4 font-medium text-sm">Session de 30min.</p>
              <BaseButton variant="primary" class="bg-black text-white w-full" size="sm">Réserver</BaseButton>
            </div>
          </div>
        </div>

        <!-- Email (6 cols) -->
        <div class="md:col-span-6 group relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-neutral-800 text-white border border-neutral-700 min-h-[140px] md:min-h-0">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-40 transition-all duration-700 bg-green-500/30 blur-2xl"></div>
          
          <!-- ✅ Padding réduit : p-8 → p-6 -->
          <div class="relative h-full p-6 flex items-center gap-4 z-10">
            <!-- ✅ Icône réduite : w-16 h-16 → w-14 h-14 -->
            <div class="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📧</div>
            <div>
              <h4 class="text-lg font-bold mb-1">Email</h4>
              <p class="text-neutral-400 text-sm">contact@bookingland.com</p>
            </div>
          </div>
        </div>

        <!-- Téléphone (6 cols) -->
        <div class="md:col-span-6 group relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-neutral-800 text-white border border-neutral-700 min-h-[140px] md:min-h-0">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-40 transition-all duration-700 bg-pink-500/30 blur-2xl"></div>
          <div class="relative h-full p-6 flex items-center gap-4 z-10">
            <div class="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📞</div>
            <div>
              <h4 class="text-lg font-bold mb-1">Téléphone</h4>
              <p class="text-neutral-400 text-sm">+33 1 23 45 67 89</p>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>

    <!-- ========================================== -->
    <!-- FORMULAIRE (Padding optimisé) -->
    <!-- ========================================== -->
    <BaseSection spacing="xl" variant="gray">
      <div class="max-w-4xl mx-auto">
        
        <!-- Messages succès/erreur -->
        <transition name="scale">
          <div v-if="isSuccess" class="mb-6 bg-green-500 text-white rounded-2xl p-6 flex items-center gap-4 shadow-xl">
            <div class="text-4xl">🎉</div>
            <div>
              <p class="font-bold text-lg mb-1">Message envoyé avec succès !</p>
              <p class="text-green-100 text-sm">Notre équipe vous contactera très bientôt.</p>
            </div>
          </div>
        </transition>

        <transition name="scale">
          <div v-if="isError" class="mb-6 bg-red-500 text-white rounded-2xl p-6 flex items-center gap-4 shadow-xl">
            <div class="text-4xl">⚠️</div>
            <div>
              <p class="font-bold text-lg mb-1">Une erreur est survenue</p>
              <p class="text-red-100 text-sm">Veuillez réessayer ou nous contacter par email.</p>
            </div>
          </div>
        </transition>

        <!-- ✅ Padding réduit : p-16 → p-8 md:p-12 -->
        <div class="bg-neutral-900 rounded-2xl md:rounded-[3rem] p-6 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden border border-neutral-800">
          <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
          
          <div class="relative z-10 text-white">
            <!-- ✅ Titre réduit : text-4xl → text-3xl -->
            <div class="mb-10">
              <h2 class="text-3xl md:text-4xl font-black mb-3">Écrivez-nous</h2>
              <p class="text-neutral-400">On vous répond sous 24h, promis.</p>
            </div>

            <!-- ✅ Espacement réduit : space-y-10 → space-y-6 -->
            <form @submit.prevent="submitForm" class="space-y-6">
              
              <!-- Type de demande -->
              <div>
                <label class="block text-xs font-bold text-neutral-400 mb-3 uppercase tracking-widest">
                  Nature de votre demande
                </label>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    v-for="type in contactTypes"
                    :key="type.value"
                    type="button"
                    @click="formData.type = type.value"
                    :class="[
                      'px-3 py-3 rounded-xl border-2 text-xs font-bold transition-all duration-300 flex flex-col items-center gap-1.5',
                      formData.type === type.value
                        ? 'border-blue-500 bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                        : 'border-neutral-800 bg-neutral-800/50 text-neutral-500 hover:border-neutral-700 hover:text-neutral-300'
                    ]"
                  >
                    <span class="text-lg">{{ type.icon }}</span>
                    {{ type.label }}
                  </button>
                </div>
              </div>

              <!-- Nom et Email -->
              <div class="grid md:grid-cols-2 gap-4">
                <BaseInput 
                  v-model="formData.name" 
                  label="Votre Nom" 
                  placeholder="Jean Dupont"
                  required
                  full-width
                />
                <BaseInput 
                  v-model="formData.email" 
                  label="Votre Email" 
                  type="email" 
                  placeholder="jean@exemple.com"
                  required
                  full-width 
                />
              </div>

              <!-- Sujet -->
              <BaseInput 
                v-model="formData.subject" 
                label="Objet" 
                placeholder="Comment pouvons-nous vous aider ?"
                required
                full-width 
              />

              <!-- Message -->
              <BaseTextarea 
                v-model="formData.message" 
                label="Message" 
                :rows="4"
                placeholder="Dites-nous en plus sur votre besoin..."
                required
                full-width 
              />

              <!-- Submit -->
              <div class="pt-4">
                <BaseButton 
                  type="submit" 
                  variant="secondary" 
                  size="lg"
                  full-width 
                  :loading="isSubmitting"
                  class="h-14"
                >
                  <span v-if="!isSubmitting">Envoyer le message 🚀</span>
                  <span v-else>Envoi en cours...</span>
                </BaseButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BaseSection>

    <!-- ========================================== -->
    <!-- CTA FINAL -->
    <!-- ========================================== -->
    <BaseSection variant="dark" spacing="lg" class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
      <div class="relative z-10 text-center max-w-3xl mx-auto">
        <!-- ✅ Titre réduit : text-5xl → text-4xl -->
        <h2 class="text-3xl md:text-4xl font-black mb-6 italic">Pas encore convaincu ?</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <BaseButton variant="glass" size="md" to="/faq" class="border-white/20 text-white">
            Consulter la FAQ
          </BaseButton>
          <BaseButton variant="secondary" size="md" to="/become-partner">
            Devenir Partenaire
          </BaseButton>
        </div>
      </div>
    </BaseSection>
  </div>
</template>

<style scoped>
/* Animation scale pour messages */
.scale-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}
</style>