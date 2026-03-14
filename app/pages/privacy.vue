<script lang="ts" setup>
import { useHead } from '#app';
import BaseSection from "@/components/ui/common/BaseSection.vue"
import BaseBadge from '~/components/ui/base/BaseBadge.vue';
import BaseButton from '~/components/ui/base/BaseButton.vue';

useHead({
  title: 'Booking Land - Politique de Confidentialité',
  meta: [
    { name: 'description', content: 'Consultez la politique de confidentialité de Booking Land. Découvrez comment nous protégeons vos données personnelles.' }
  ]
});

definePageMeta({
  layout: 'secondary'
});

const lastUpdate = 'Mars 2025'

// Sommaire pour la navigation rapide
const sections = [
  { id: 'responsable', title: '1. Responsable' },
  { id: 'donnees', title: '2. Données collectées' },
  { id: 'finalite', title: '3. Finalité' },
  { id: 'destinataires', title: '4. Destinataires' },
  { id: 'securite', title: '5. Sécurité' },
  { id: 'droits', title: '6. Vos droits' }
]
</script>

<template>
  <div class="bg-white min-h-screen">
    
    <BaseSection spacing="xl" variant="gradient" animation="fade" direction="none">
      <div class="max-w-4xl">
        <BaseBadge variant="primary" styleType="subtle" class="mb-6">Transparence & RGPD</BaseBadge>
        <h1 class="text-5xl md:text-7xl font-black text-neutral-900 mb-6 tracking-tighter">
          Politique de <span class="text-purple-600">Confidentialité</span>
        </h1>
        <p class="text-xl text-neutral-600 max-w-2xl leading-relaxed">
          Chez Booking Land, nous traitons vos données comme les nôtres : avec respect, transparence et uniquement pour ce qui est nécessaire.
        </p>
        <div class="flex items-center gap-4 mt-8 text-sm font-medium text-neutral-500 uppercase tracking-widest">
          <span>Dernière mise à jour</span>
          <span class="w-12 h-[1px] bg-neutral-300"></span>
          <span class="text-neutral-900">{{ lastUpdate }}</span>
        </div>
      </div>
    </BaseSection>

    <BaseSection spacing="lg">
      <div class="grid lg:grid-cols-12 gap-12">
        
        <aside class="hidden lg:block lg:col-span-4 sticky top-32 h-fit">
          <div class="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
            <p class="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">Sommaire</p>
            <nav class="space-y-4">
              <a v-for="item in sections" :key="item.id" :href="`#${item.id}`" 
                 class="block text-neutral-600 hover:text-purple-600 font-medium transition-colors">
                {{ item.title }}
              </a>
            </nav>
            <hr class="my-8 border-neutral-200" />
            <div class="text-sm text-neutral-500 italic">
              Un doute ? <a href="mailto:smart.gttech@gmail.com" class="text-purple-600 underline">Écrivez-nous</a>.
            </div>
          </div>
        </aside>

        <div class="lg:col-span-8 prose prose-neutral prose-lg lg:prose-xl max-w-none">
          
          <div class="not-prose bg-purple-50 border-2 border-purple-100 p-8 rounded-[2rem] mb-12 relative overflow-hidden">
            <div class="absolute -right-8 -top-8 text-8xl opacity-10 grayscale">🛠️</div>
            <h3 class="text-purple-900 font-black text-xl mb-3 flex items-center gap-2">
              Statut du projet : Développement
            </h3>
            <p class="text-purple-800 leading-relaxed mb-0">
              Booking Land est actuellement un projet personnel porté par un développeur indépendant. 
              Aucune structure commerciale n'est rattachée pour le moment. Le service est en phase de test (Bêta).
            </p>
          </div>

          <BaseSection id="responsable">
            <h2 class="text-3xl font-black mb-6">1. Responsable du traitement</h2>
            <p>Le traitement des données est assuré par :</p>
            <div class="not-prose bg-neutral-50 p-6 rounded-2xl border border-neutral-100 grid md:grid-cols-2 gap-4">
              <div>
                <span class="block text-xs uppercase text-neutral-400 font-bold tracking-wider">Éditeur</span>
                <span class="font-bold text-neutral-900">Julien Akim Emile</span>
              </div>
              <div>
                <span class="block text-xs uppercase text-neutral-400 font-bold tracking-wider">Contact</span>
                <a href="mailto:smart.gttech@gmail.com" class="font-bold text-purple-600 underline">smart.gttech@gmail.com</a>
              </div>
            </div>
          </BaseSection>

          <BaseSection id="donnees">
            <h2 class="text-3xl font-black mb-6">2. Données personnelles collectées</h2>
            <p>Nous limitons la collecte au strict minimum nécessaire :</p>
            <ul>
              <li><strong>Contact :</strong> Nom et email pour vous répondre.</li>
              <li><strong>Partenariat :</strong> Informations sur votre organisation pour évaluer une collaboration pilote.</li>
            </ul>
            <div class="not-prose bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-2xl">
              <p class="text-green-900 font-medium mb-0">
                ✨ <strong>Zéro Tracking :</strong> Nous n'utilisons aucun cookie de tracking (Google Analytics, Facebook Pixel, etc.) à ce stade. Votre navigation est anonyme.
              </p>
            </div>
          </BaseSection>

          <BaseSection id="finalite">
            <h2 class="text-3xl font-black mb-6">3. Pourquoi vos données ?</h2>
            <p>Elles servent exclusivement à :</p>
            <ol>
              <li>Répondre à vos messages.</li>
              <li>Vous informer du lancement de la plateforme (si inscription waitlist).</li>
              <li>Améliorer l'outil selon vos retours d'expérience.</li>
            </ol>
            <p class="font-bold text-neutral-900 italic">Nous ne vendrons JAMAIS vos données à des tiers.</p>
          </BaseSection>

          <BaseSection id="destinataires">
            <h2 class="text-3xl font-black mb-6">4. Destinataires et Hébergement</h2>
            <p>Vos données sont hébergées sur des infrastructures sécurisées :</p>
            <div class="grid md:grid-cols-2 gap-4 not-prose">
              <div class="p-4 border border-neutral-100 rounded-xl bg-white shadow-sm">
                <span class="font-black">Vercel Inc.</span>
                <p class="text-sm text-neutral-500 mb-0">Interface Frontend (USA)</p>
              </div>
              <div class="p-4 border border-neutral-100 rounded-xl bg-white shadow-sm">
                <span class="font-black">Railway Corp.</span>
                <p class="text-sm text-neutral-500 mb-0">Base de données & API (USA)</p>
              </div>
            </div>
            <p class="text-sm mt-4 text-neutral-500">
              Note : Ces services utilisent des clauses contractuelles conformes au RGPD pour assurer la sécurité hors UE.
            </p>
          </BaseSection>

          <BaseSection id="securite">
            <h2 class="text-3xl font-black mb-6">5. Sécurité</h2>
            <p>Pour protéger vos données, nous utilisons :</p>
            <ul>
              <li>Le protocole <strong>HTTPS (SSL)</strong> pour tous les échanges.</li>
              <li>Le <strong>hachage</strong> des mots de passe (quand applicable).</li>
              <li>Des audits réguliers de nos dépendances de code.</li>
            </ul>
          </BaseSection>

          <BaseSection id="droits">
            <h2 class="text-3xl font-black mb-6">6. Vos droits (RGPD)</h2>
            <p>Vous avez le contrôle total. Vous pouvez demander à tout moment :</p>
            <div class="not-prose flex flex-wrap gap-2 mb-8">
              <BaseBadge variant="default">Accès</BaseBadge>
              <BaseBadge variant="default">Suppression</BaseBadge>
              <BaseBadge variant="default">Modification</BaseBadge>
              <BaseBadge variant="default">Portabilité</BaseBadge>
            </div>
            <p>
              Pour exercer ces droits, envoyez simplement un email à 
              <a href="mailto:smart.gttech@gmail.com" class="text-purple-600 font-bold underline">smart.gttech@gmail.com</a>. 
              Nous traitons les demandes sous 30 jours.
            </p>
          </BaseSection>

          <hr class="my-16" />

          <div class="not-prose text-center bg-neutral-900 text-white p-12 rounded-[3rem]">
            <h3 class="text-2xl font-black mb-4 text-white">Une question sur vos données ?</h3>
            <p class="text-neutral-400 mb-8 max-w-md mx-auto">
              Je suis à votre disposition pour clarifier tout point concernant votre vie privée sur Booking Land.
            </p>
            <BaseButton shiny variant="danger" to="/contact" size="sm">Me contacter</BaseButton>
          </div>

        </div>
      </div>
    </BaseSection>

  </div>
</template>

<style scoped>
/* Ajoute un smooth scroll pour la navigation interne */
html {
  scroll-behavior: smooth;
}

section {

}

/* Style des liens dans la prose pour matcher ton thème */
.prose a {

}

.prose h2 {

}
</style>