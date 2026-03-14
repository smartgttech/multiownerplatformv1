<script lang="ts" setup>
import { computed } from 'vue'

// Props du composant
interface Props {
  title: string
  description?: string
  breadcrumbs?: Array<{ label: string; to?: string }>
  variant?: 'default' | 'gradient' | 'minimal'
  align?: 'left' | 'center'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  align: 'center'
})

// Classes conditionnelles selon la variante
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'gradient':
      return 'bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white'
    case 'minimal':
      return 'bg-white border-b border-neutral-200'
    default:
      return 'bg-neutral-50 border-b border-neutral-200'
  }
})

const alignClasses = computed(() => {
  return props.align === 'center' ? 'text-center' : 'text-left'
})
</script>

<template>
  <section :class="['relative py-16 md:py-15', variantClasses]">
    <!-- Decorative Background (pour variant gradient) -->
    <div v-if="variant === 'gradient'" class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div :class="['max-w-4xl', align === 'center' ? 'mx-auto' : '']">
        <!-- Breadcrumbs -->
        <nav v-if="breadcrumbs && breadcrumbs.length > 0" class="mb-6" aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm flex-wrap" :class="alignClasses">
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center gap-2">
              <NuxtLink
                v-if="crumb.to"
                :to="crumb.to"
                :class="[
                  'hover:text-amber-600 transition-colors',
                  variant === 'gradient' ? 'text-neutral-400 hover:text-amber-400' : 'text-neutral-600'
                ]"
              >
                {{ crumb.label }}
              </NuxtLink>
              <span v-else :class="variant === 'gradient' ? 'text-white font-semibold' : 'text-neutral-900 font-semibold'">
                {{ crumb.label }}
              </span>
              <svg
                v-if="index < breadcrumbs.length - 1"
                class="w-4 h-4"
                :class="variant === 'gradient' ? 'text-neutral-600' : 'text-neutral-400'"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
          </ol>
        </nav>

        <!-- Title -->
        <h1
          :class="[
            'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading',
            alignClasses,
            variant === 'gradient' ? 'text-white' : 'text-neutral-900'
          ]"
        >
          <slot name="title">{{ title }}</slot>
        </h1>

        <!-- Description -->
        <p
          v-if="description || $slots.description"
          :class="[
            'text-sm md:text-xl leading-relaxed font-display',
            alignClasses,
            variant === 'gradient' ? 'text-neutral-300' : 'text-neutral-600'
          ]"
        >
          <slot name="description">{{ description }}</slot>
        </p>

        <!-- Actions slot (pour ajouter des CTA si besoin) -->
        <div v-if="$slots.actions" :class="['mt-8', alignClasses]">
          <slot name="actions" />
        </div>
      </div>
    </div>

    <!-- Bottom decoration (pour variant gradient) -->
    <div v-if="variant === 'gradient'" class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
  </section>
</template>