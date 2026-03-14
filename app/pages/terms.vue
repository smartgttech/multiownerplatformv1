<script lang="ts" setup>
import { useHead } from '#app';
import BaseSection from '~/components/ui/common/BaseSection.vue';
import MiniHero from '~/components/layout/MiniHero.vue';
import BaseBadge from '~/components/ui/base/BaseBadge.vue';
import BaseButton from '~/components/ui/base/BaseButton.vue';

useHead({
  title: 'CGU - Booking Land',
  meta: [
    { name: 'description', content: 'Conditions Générales d’Utilisation de Booking Land. Découvrez les règles d’utilisation de notre plateforme de réservation en version bêta.' }
  ]
})

definePageMeta({
  layout: 'secondary'
});

const lastUpdate = '15 mars 2025'

// Sommaire pour la navigation rapide
const menuItems = [
  { id: 'presentation', title: '1. Présentation' },
  { id: 'acces', title: '2. Accès & Gratuité' },
  { id: 'workflow', title: '3. Réservations' },
  { id: 'responsabilite', title: '4. Responsabilités' },
  { id: 'propriete', title: '5. Propriété' },
  { id: 'loi', title: '6. Droit applicable' }
]
</script>

<template>
  <div class="bg-white min-h-screen">
    
    <BaseSection spacing="xl" variant="gray" animation="fade" direction="none" class="border-b border-neutral-100">
      <div class="max-w-4xl">
        <BaseBadge variant="purple" styleType="subtle" class="mb-6 uppercase tracking-widest">Contrat d'utilisation</BaseBadge>
        <h1 class="text-5xl md:text-7xl font-black text-neutral-900 mb-6 tracking-tighter">
          Conditions <span class="text-purple-600">Générales</span>
        </h1>
        <p class="text-xl text-neutral-600 max-w-2xl leading-relaxed">
          Les règles du jeu pour utiliser Booking Land en toute sérénité pendant notre phase de développement.
        </p>
        <div class="mt-8 flex items-center gap-3 text-sm font-bold text-neutral-400">
          <span class="bg-neutral-200 h-px w-8"></span>
          MIS À JOUR LE {{ lastUpdate.toUpperCase() }}
        </div>
      </div>
    </BaseSection>

    <BaseSection spacing="lg">
      <div class="grid lg:grid-cols-12 gap-12">
        
        <aside class="hidden lg:block lg:col-span-4 sticky top-32 h-fit">
          <div class="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
            <p class="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">Navigation</p>
            <nav class="space-y-4">
              <a v-for="item in menuItems" :key="item.id" :href="`#${item.id}`" 
                 class="block text-neutral-600 hover:text-purple-600 font-medium transition-colors">
                {{ item.title }}
              </a>
            </nav>
            <div class="mt-10 pt-10 border-t border-neutral-200">
              <p class="text-sm text-neutral-500 leading-relaxed italic">
                En utilisant Booking Land, vous acceptez ces conditions. Pas d'accord ? On ne vous en voudra pas, mais vous ne pourrez pas utiliser la plateforme.
              </p>
            </div>
          </div>
        </aside>

        <div class="lg:col-span-8 prose prose-neutral prose-lg lg:prose-xl max-w-none">
          
          <div class="not-prose bg-amber-50 border-2 border-amber-100 p-8 rounded-[2rem] mb-12 shadow-sm">
            <div class="flex items-center gap-4 mb-4">
              <span class="text-3xl">🚀</span>
              <h3 class="text-amber-900 font-black text-xl m-0">Version Bêta (MVP)</h3>
            </div>
            <p class="text-amber-800 leading-relaxed m-0">
              Booking Land est fourni <strong>"tel quel"</strong>. C'est un projet en cours de construction. Attendez-vous à des surprises (les bonnes comme les bugs), et sachez que le service peut évoluer rapidement.
            </p>
          </div>

          <BaseSection id="presentation">
            <h2 class="text-3xl font-black mb-6">1. Présentation du service</h2>
            <p>
              Booking Land est une plateforme innovante facilitant la mise en relation entre des organisations et des demandeurs via un système de <strong>négociation de créneaux</strong>.
            </p>
            <div class="not-prose grid md:grid-cols-3 gap-4 my-8">
              <div class="p-4 bg-white border border-neutral-100 rounded-2xl shadow-sm text-center">
                <span class="text-2xl mb-2 block">🏢</span>
                <span class="text-sm font-bold">Organisations</span>
              </div>
              <div class="p-4 bg-white border border-neutral-100 rounded-2xl shadow-sm text-center">
                <span class="text-2xl mb-2 block">🤝</span>
                <span class="text-sm font-bold">Négociation</span>
              </div>
              <div class="p-4 bg-white border border-neutral-100 rounded-2xl shadow-sm text-center">
                <span class="text-2xl mb-2 block">📅</span>
                <span class="text-sm font-bold">Réservation</span>
              </div>
            </div>
          </BaseSection>

          <BaseSection id="acces">
            <h2 class="text-3xl font-black mb-6">2. Accès & Gratuité</h2>
            <div class="not-prose bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl mb-6">
              <h4 class="text-green-900 font-bold mb-2">Totalement Gratuit</h4>
              <p class="text-green-800 m-0">Pendant la phase MVP, toutes les fonctionnalités sont gratuites. Pas de carte bancaire, pas de frais cachés.</p>
            </div>
            <p>
              Cependant, nous ne garantissons pas une disponibilité de 100%. Le serveur peut faire une sieste (maintenance) sans prévenir.
            </p>
          </BaseSection>

          <BaseSection id="workflow">
            <h2 class="text-3xl font-black mb-6">3. Workflow de Réservation</h2>
            <p>Le processus suit quatre étapes clés :</p>
            <div class="not-prose space-y-4">
              <div v-for="(step, i) in ['Sélection du service', 'Proposition de créneau', 'Phase de négociation', 'Confirmation finale']" 
                   :key="i" class="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                  {{ i + 1 }}
                </span>
                <span class="font-medium text-neutral-700">{{ step }}</span>
              </div>
            </div>
          </BaseSection>

          <BaseSection id="responsabilite">
            <h2 class="text-3xl font-black mb-6">4. Responsabilités</h2>
            <div class="not-prose bg-red-50 border-2 border-red-100 p-8 rounded-[2rem] my-8">
              <h4 class="text-red-900 font-bold mb-4 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-red-500"></span>
                Limitation de responsabilité
              </h4>
              <p class="text-red-800 text-sm leading-relaxed mb-0">
                Booking Land est une plateforme de mise en relation. Nous ne sommes pas responsables de la qualité du service rendu par l'organisation, des retards, ou des éventuels litiges entre vous et le partenaire. Nous fournissons l'outil, vous gérez la relation.
              </p>
            </div>
          </BaseSection>

          <BaseSection id="propriete">
            <h2 class="text-3xl font-black mb-6">5. Propriété Intellectuelle</h2>
            <p>
              Tout ce que vous voyez ici (design, code source, logos "Booking Land") appartient à <strong>Julien Akim Emile</strong>. 
            </p>
            <p class="bg-neutral-100 p-4 rounded-xl text-sm italic">
              Merci de ne pas copier le concept ou le code pour créer un clone. Le respect du travail acharné d'un dév solo est apprécié !
            </p>
          </BaseSection>

          <BaseSection id="loi">
            <h2 class="text-3xl font-black mb-6">6. Droit applicable</h2>
            <p>
              Même si le web n'a pas de frontières, ces conditions sont régies par le <strong>Droit Français</strong>. En cas de souci majeur, on essaiera d'abord d'en discuter autour d'un café (ou par email).
            </p>
          </BaseSection>

          <div class="not-prose mt-20 p-12 bg-neutral-900 rounded-[3rem] text-center text-white">
            <h3 class="text-3xl font-black mb-4">Des questions ?</h3>
            <p class="text-neutral-400 mb-8">Si un point vous semble obscur, n'hésitez pas à nous contacter.</p>
            <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="mailto:smart.gttech@gmail.com" class="text-lg font-bold hover:text-purple-400 transition-colors">
                smart.gttech@gmail.com
              </a>
              <span class="hidden md:block text-neutral-700">|</span>
              <BaseButton variant="secondary" to="/contact">Formulaire de contact</BaseButton>
            </div>
          </div>

        </div>
      </div>
    </BaseSection>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar pour la sidebar si nécessaire */
aside::-webkit-scrollbar {
  width: 4px;
}
</style>