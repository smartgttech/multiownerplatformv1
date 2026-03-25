<script lang="ts" setup>
import { ref } from 'vue'
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseButton from '~/components/ui/base/BaseButton.vue'
import BaseBadge from '~/components/ui/base/BaseBadge.vue'

const openIndex = ref<number | null>(null)

const faqs = [
  {
    question: 'C\'est quoi exactement la "négociation de créneaux" ?',
    answer: 'Contrairement aux outils classiques qui vous imposent de choisir parmi des créneaux fixes, Booking Land permet un vrai dialogue. Le client peut proposer un créneau qui lui convient, l\'organisation peut accepter, refuser ou proposer une alternative. C\'est un échange jusqu\'à trouver le bon moment pour les deux parties. Plus de "prenez ce qui est disponible ou rien".'
  },
  {
    question: 'Est-ce vraiment 100% gratuit pendant le MVP ?',
    answer: 'Oui, absolument. Pendant toute la phase de développement et de test (MVP), l\'accès est totalement gratuit. Aucune carte bancaire requise, aucun piège. Nous cherchons des organisations pilotes pour construire le produit avec eux. Lorsque nous passerons en version commerciale (prévu Q2-Q3 2025), nous vous préviendrons au moins 30 jours à l\'avance et vous aurez des conditions préférentielles.'
  },
  {
    question: 'Pour quels types d\'organisations c\'est adapté ?',
    answer: 'Booking Land est idéal pour toute organisation qui propose des services sur rendez-vous et qui a besoin de flexibilité : centres de formation (sessions inter/intra), cabinets de conseil, coachs, thérapeutes, praticiens santé, freelances créatifs, services juridiques, etc. Si vous coordonnez plusieurs personnes et que vos créneaux ne sont pas figés, c\'est pour vous.'
  },
  {
    question: 'Quand est prévu le lancement officiel ?',
    answer: 'Le lancement de la version commerciale est prévu pour Q2-Q3 2025. D\'ici là, nous développons le MVP avec nos organisations pilotes. Le calendrier exact dépendra des retours utilisateurs et du temps nécessaire pour livrer un produit vraiment solide. Nous privilégions la qualité à la vitesse.'
  },
  {
    question: 'Comment devenir organisation pilote ?',
    answer: 'Remplissez simplement le formulaire dans la section "Devenez organisation pilote" ci-dessus, ou cliquez sur "Devenir partenaire" dans le menu. Nous prenons contact avec vous sous 48h pour discuter de vos besoins, vous présenter la plateforme et voir si c\'est un bon fit. Aucun engagement, juste une conversation.'
  },
  {
    question: 'Quelle est la différence avec Calendly ou Doodle ?',
    answer: 'Trois différences majeures : (1) Négociation de créneaux native (vs créneaux imposés), (2) Architecture multi-organisations avec gestion d\'équipe (vs focus individu), (3) Vision marketplace pour découvrir des organisations (vs outil isolé). En résumé : Calendly/Doodle = "prenez ce créneau", Booking Land = "trouvons ensemble le bon moment".'
  }
]

const toggleFAQ = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <BaseSection spacing="xl" variant="gray">
    <div class="max-w-4xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-12">
        <BaseBadge variant="info" styleType="subtle" class="mb-4">FAQ</BaseBadge>
        <h2 class="text-4xl lg:text-5xl font-black text-neutral-900 mb-6">
          Questions fréquentes
        </h2>
        <p class="text-xl text-neutral-600 leading-relaxed">
          Tout ce que vous devez savoir avant de rejoindre l'aventure
        </p>
      </div>

      <!-- Accordion -->
      <div class="space-y-4 mb-12">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-2xl border-2 border-neutral-100 overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
        >
          <!-- Question (clickable) -->
          <button
            @click="toggleFAQ(index)"
            class="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
          >
            <span class="font-bold text-neutral-900 text-lg group-hover:text-blue-600 transition-colors">
              {{ faq.question }}
            </span>
            <div
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300',
                openIndex === index 
                  ? 'bg-blue-500 text-white rotate-180' 
                  : 'bg-neutral-100 text-neutral-600 group-hover:bg-blue-100'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <!-- Answer (collapsible) -->
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div
              v-if="openIndex === index"
              class="px-6 pb-6 overflow-hidden"
            >
              <div class="pt-4 border-t-2 border-neutral-100">
                <p class="text-neutral-700 leading-relaxed">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- CTA vers FAQ complète -->
      <div class="text-center">
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100">
          <p class="text-neutral-700 mb-6 text-lg">
            <strong>Vous avez d'autres questions ?</strong><br/>
            Consultez notre FAQ complète ou contactez-nous directement.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <BaseButton variant="primary" size="lg" to="/faq">
              FAQ complète
            </BaseButton>
            <BaseButton variant="outline" size="lg" to="/contact">
              Nous contacter
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>