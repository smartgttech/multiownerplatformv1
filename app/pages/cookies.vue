<script lang="ts" setup>
import { useHead } from '#app';
import BaseBadge from '@/components/ui/base/BaseBadge.vue';
import BaseButton from '@/components/ui/base/BaseButton.vue';
import BaseSection from '@/components/ui/common/BaseSection.vue';
import BaseBackToTop from '~/components/ui/base/BaseBackToTop.vue';
import { ref } from 'vue';

useHead({
  title: 'Politique Cookies - Booking Land'
})

definePageMeta({
  layout: 'secondary'
})

interface CookieType {
  name: string;
  icon: string;
  status: 'active' | 'inactive';
  description: string;
  color: string;
}

const cookieTypes = ref<CookieType[]>([])

const lastUpdate = '15 mars 2025'

cookieTypes.value = [
  {
    name: 'Strictement nécessaires',
    icon: '✅',
    status: 'active',
    description: 'Ces cookies sont indispensables pour naviguer sur le site et utiliser ses fonctionnalités.',
    color: 'green'
  },
  {
    name: 'Mesure d\'audience',
    icon: '📊',
    status: 'active',
    description: 'Nous utilisons Vercel Analytics pour comprendre l\'usage du site de manière anonyme.',
    color: 'blue'
  }
]
</script>

<template>
  <div class="bg-white min-h-screen">
    <BaseSection spacing="xl" variant="gray" animation="fade" class="border-b border-neutral-100">
      <div class="max-w-4xl">
        <BaseBadge variant="warning" styleType="subtle" class="mb-6 uppercase tracking-widest">Confidentialité</BaseBadge>
        <h1 class="text-5xl md:text-7xl font-black text-neutral-900 mb-6 tracking-tighter">
          Gestion des <span class="text-amber-500">Cookies</span>
        </h1>
        <p class="text-xl text-neutral-600 max-w-2xl leading-relaxed">
          Ici, on ne parle pas de pâtisserie, mais de votre vie privée. On fait simple : le strict minimum pour que ça marche.
        </p>
      </div>
    </BaseSection>

    <BaseSection spacing="lg">
      <div class="max-w-4xl mx-auto">
        
        <div class="not-prose bg-blue-50 border-2 border-blue-100 rounded-[2rem] p-8 mb-16 shadow-sm">
          <div class="flex items-center gap-4 mb-4">
            <span class="text-3xl">📊</span>
            <h3 class="text-blue-900 font-black text-xl m-0">Analyse respectueuse</h3>
          </div>
          <p class="text-blue-800 leading-relaxed m-0">
            Nous avons choisi <strong>Vercel Analytics</strong>. Contrairement aux outils classiques, il ne collecte <strong>aucune donnée personnelle</strong> identifiable et n'utilise pas de cookies de tracking publicitaire. Les données sont totalement anonymisées.
          </p>
        </div>

        <div class="prose prose-neutral prose-lg lg:prose-xl max-w-none">
          <BaseSection class="mb-16">
            <h2 class="text-3xl font-black text-neutral-900 mb-8">1. Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal. Il nous permet de faire fonctionner le site et de mesurer (très discrètement) son succès.
            </p>
          </BaseSection>

          <BaseSection class="mb-16">
            <h2 class="text-3xl font-black text-neutral-900 mb-8">2. Les cookies que nous utilisons</h2>
            
            <div class="not-prose space-y-6" :v-if="cookieTypes.length">
              <div class="p-8 bg-white border border-neutral-200 rounded-[2rem] hover:border-green-500/30 transition-colors shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">{{ cookieTypes[0].icon }}</span>
                    <h3 class="text-xl font-bold m-0">{{ cookieTypes[0].name }}</h3>
                  </div>
                  <BaseBadge variant="success">Actif</BaseBadge>
                </div>
                <p class="text-neutral-600 mb-0 italic">"session_token", "csrf_token"</p>
                <p class="text-neutral-500 text-sm mt-2">Nécessaires pour vous connecter et sécuriser vos formulaires.</p>
              </div>

              <div class="p-8 bg-white border border-neutral-200 rounded-[2rem] hover:border-blue-500/30 transition-colors shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">{{ cookieTypes[1].icon }}</span>
                    <h3 class="text-xl font-bold m-0">{{ cookieTypes[1].name }}</h3>
                  </div>
                  <BaseBadge variant="blue">Anonyme</BaseBadge>
                </div>
                <p class="text-neutral-600 mb-0"><strong>Vercel Analytics :</strong> Mesure le nombre de visiteurs et la vitesse du site.</p>
              </div>
            </div>
          </BaseSection>

          <BaseSection class="mb-16">
            <h2 class="text-3xl font-black text-neutral-900 mb-8">3. Pas de publicité</h2>
            <div class="p-8 bg-neutral-900 rounded-[2rem] text-white">
              <p class="m-0 leading-relaxed">
                C'est un engagement : <strong>Booking Land n'utilise aucun cookie publicitaire</strong> (Google Ads, Facebook Pixel, etc.). Votre navigation n'est pas revendue à des tiers. Jamais.
              </p>
            </div>
          </BaseSection>

          <BaseSection id="manage" class="mb-16">
            <h2 class="text-3xl font-black text-neutral-900 mb-8">4. Comment les gérer ?</h2>
            <p>Vous pouvez à tout moment nettoyer vos cookies via les réglages de votre navigateur :</p>
            <div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <a v-for="nav in ['Chrome', 'Firefox', 'Safari', 'Edge']" :key="nav" href="#" class="p-4 bg-neutral-50 rounded-2xl text-center font-bold text-sm hover:bg-neutral-100 transition-colors">
                {{ nav }}
              </a>
            </div>
          </BaseSection>
        </div>

        <div class="mt-20 pt-12 border-t border-neutral-100">
          <div class="flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="text-center md:text-left">
              <p class="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-2">Une question ?</p>
              <a href="mailto:smart.gttech@gmail.com" class="text-xl font-black text-neutral-900 hover:text-purple-600 transition-colors">smart.gttech@gmail.com</a>
            </div>
            <div class="flex gap-4">
              <BaseButton variant="outline" size="sm" to="/privacy">Confidentialité</BaseButton>
              <BaseButton variant="outline" size="sm" to="/terms">CGU</BaseButton>
            </div>
          </div>
          <p class="text-center text-neutral-400 text-xs mt-12 italic">
            Dernière mise à jour : {{ lastUpdate }} — Booking Land (Projet MVP)
          </p>
        </div>
      </div>
    </BaseSection>
        <!-- BACK TO TOP -->
    <BaseBackToTop isVisible :threshold="1500"/>
  </div>
</template>
