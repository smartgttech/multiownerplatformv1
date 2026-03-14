<script lang="ts" setup>
import { computed } from 'vue'

/**
 * BaseCard - Carte générique et réutilisable
 * 
 * @example
 * <BaseCard hoverable clickable @click="handleClick">
 *   <template #header>Titre</template>
 *   <template #body>Contenu</template>
 * </BaseCard>
 */

// ============================================
// TYPES & INTERFACES
// ============================================
interface Props {
  /** Variante visuelle */
  variant?: 'default' | 'bordered' | 'subtle' | 'gradient' | 'info' | 'success' | 'warning' | 'error'
  /** Effet hover (scale + shadow) */
  hoverable?: boolean
  /** Card cliquable globalement */
  clickable?: boolean
  /** Lien (transforme la card entière en NuxtLink) */
  to?: string
  /** Ouvre dans nouvel onglet */
  external?: boolean
  /** Padding interne */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** Centrer le contenu */
  centered?: boolean
  /** Divider entre sections */
  divided?: boolean
  /** Ombre personnalisée */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

// ============================================
// PROPS & DEFAULTS
// ============================================
const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hoverable: false,
  clickable: false,
  external: false,
  padding: 'md',
  centered: false,
  divided: false,
  shadow: 'sm'
})

// ============================================
// EMITS
// ============================================
const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

// ============================================
// COMPUTED CLASSES
// ============================================

// Classes de base
const baseClasses = 'rounded-xl transition-all duration-200'

// Classes de variante
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'bordered':
      return 'bg-white border-2 border-neutral-200'
    case 'subtle':
      return 'bg-neutral-50 border border-neutral-200'
    case 'gradient':
      return 'bg-gradient-to-br from-primary-50 via-white to-blue-50 border border-neutral-200'
    case 'info':
      return 'bg-blue-50 border border-blue-200'
    case 'success':
      return 'bg-green-50 border border-green-200'
    case 'warning':
      return 'bg-yellow-50 border border-yellow-200'
    case 'error':
      return 'bg-red-50 border border-red-200'
    case 'default':
    default:
      return 'bg-white border border-neutral-200'
  }
})

// Classes de padding
const paddingClasses = computed(() => {
  switch (props.padding) {
    case 'none':
      return 'p-0'
    case 'sm':
      return 'p-4'
    case 'md':
      return 'p-6'
    case 'lg':
      return 'p-8'
    default:
      return ''
  }
})

// Classes d'ombre
const shadowClasses = computed(() => {
  switch (props.shadow) {
    case 'none':
      return ''
    case 'sm':
      return 'shadow-sm'
    case 'md':
      return 'shadow-md'
    case 'lg':
      return 'shadow-lg'
    case 'xl':
      return 'shadow-xl'
    default:
      return ''
  }
})

// Classes hover
const hoverClasses = computed(() => {
  if (props.hoverable || props.clickable) {
    return 'hover:shadow-lg hover:scale-[1.02] hover:border-primary-300'
  }
  return ''
})

// Classes clickable
const clickableClasses = computed(() => {
  if (props.clickable || props.to) {
    return 'cursor-pointer'
  }
  return ''
})

// Classes centered
const centeredClasses = computed(() => {
  return props.centered ? 'text-center' : ''
})

// Classes finales
const cardClasses = computed(() => {
  return [
    baseClasses,
    variantClasses.value,
    shadowClasses.value,
    hoverClasses.value,
    clickableClasses.value
  ].filter(Boolean).join(' ')
})

// Classes pour les sections internes
const sectionClasses = computed(() => {
  return paddingClasses.value
})

const dividerClasses = 'border-t border-neutral-200'

// Composant à utiliser (div, button, ou NuxtLink)
const component = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.clickable) return 'button'
  return 'div'
})

// Props du composant
const componentProps = computed(() => {
  if (props.to) {
    return {
      to: props.to,
      target: props.external ? '_blank' : undefined,
      rel: props.external ? 'noopener noreferrer' : undefined
    }
  }
  if (props.clickable) {
    return {
      type: 'button'
    }
  }
  return {}
})

// ============================================
// METHODS
// ============================================
const handleClick = (event: MouseEvent) => {
  if (props.clickable && !props.to) {
    emit('click', event)
  }
}
</script>

<template>
  <component
    :is="component"
    v-bind="componentProps"
    :class="[cardClasses, centeredClasses]"
    @click="handleClick"
  >
    <!-- Image (slot optionnel) -->
    <div v-if="$slots.image" class="overflow-hidden rounded-t-xl">
      <slot name="image" />
    </div>

    <!-- Header (slot optionnel) -->
    <div 
      v-if="$slots.header" 
      :class="[
        sectionClasses,
        $slots.image ? 'pt-6' : '',
        divided && ($slots.body || $slots.footer) ? dividerClasses : ''
      ]"
    >
      <slot name="header" />
    </div>

    <!-- Body (slot principal) -->
    <div 
      v-if="$slots.default || $slots.body"
      :class="[
        sectionClasses,
        !$slots.header && !$slots.image ? '' : '',
        divided && $slots.footer ? dividerClasses : ''
      ]"
    >
      <slot name="body">
        <slot />
      </slot>
    </div>

    <!-- Footer (slot optionnel) -->
    <div 
      v-if="$slots.footer" 
      :class="[
        sectionClasses,
        divided && ($slots.header || $slots.body || $slots.default) ? dividerClasses : ''
      ]"
    >
      <slot name="footer" />
    </div>
  </component>
</template>