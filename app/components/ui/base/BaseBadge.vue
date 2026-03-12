<script lang="ts" setup>
import { computed } from 'vue'

/**
 * BaseBadge - Badge générique et réutilisable
 * 
 * @example
 * <BaseBadge variant="success" size="md">Approuvé</BaseBadge>
 */

// ============================================
// TYPES & INTERFACES
// ============================================
interface Props {
  /** Variante visuelle */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'amber' | 'purple'
  /** Taille */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Coins arrondis */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  /** Style visuel */
  styleType?: 'solid' | 'outline' | 'subtle' | 'ghost'
  /** Point de statut */
  dot?: boolean
  /** Point qui pulse */
  pulse?: boolean
  /** Cliquable (devient bouton) */
  clickable?: boolean
  /** Bouton de suppression */
  removable?: boolean
  /** Compteur */
  count?: number
  /** Icône seule */
  iconOnly?: boolean
}

// ============================================
// PROPS & DEFAULTS
// ============================================
const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  rounded: 'md',
  styleType: 'solid',
  dot: false,
  pulse: false,
  clickable: false,
  removable: false,
  iconOnly: false
})

// ============================================
// EMITS
// ============================================
const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
  (e: 'remove'): void
}>()

// ============================================
// COMPUTED CLASSES
// ============================================

// Classes de base communes
const baseClasses = 'inline-flex items-center justify-center gap-1.5 font-medium transition-all'

// Classes de taille avec Tailwind
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'px-2 py-0.5 text-xs'
    case 'sm':
      return 'px-2.5 py-1 text-xs'
    case 'md':
      return 'px-3 py-1.5 text-sm'
    case 'lg':
      return 'px-4 py-2 text-base'
    default:
      return ''
  }
})

// Classes d'arrondi avec Tailwind
const roundedClasses = computed(() => {
  switch (props.rounded) {
    case 'none':
      return 'rounded-none'
    case 'sm':
      return 'rounded-sm'
    case 'md':
      return 'rounded-md'
    case 'lg':
      return 'rounded-lg'
    case 'full':
      return 'rounded-full'
    default:
      return ''
  }
})

// Classes de variante selon le styleType
const variantClasses = computed(() => {
  const { variant, styleType } = props
  
  // Solid (remplissage plein)
  if (styleType === 'solid') {
    switch (variant) {
      case 'primary':
        return 'bg-primary-600 text-white'
      case 'success':
        return 'bg-green-600 text-white'
      case 'warning':
        return 'bg-yellow-500 text-neutral-900'
      case 'error':
        return 'bg-red-600 text-white'
      case 'info':
        return 'bg-blue-600 text-white'
      case 'amber':
        return 'bg-amber-500 text-neutral-900'
      case 'purple':
        return 'bg-purple-600 text-white'
      case 'default':
      default:
        return 'bg-neutral-200 text-neutral-700'
    }
  }
  
  // Outline (bordure)
  if (styleType === 'outline') {
    switch (variant) {
      case 'primary':
        return 'border-2 border-primary-600 text-primary-600 bg-white'
      case 'success':
        return 'border-2 border-green-600 text-green-600 bg-white'
      case 'warning':
        return 'border-2 border-yellow-500 text-yellow-600 bg-white'
      case 'error':
        return 'border-2 border-red-600 text-red-600 bg-white'
      case 'info':
        return 'border-2 border-blue-600 text-blue-600 bg-white'
      case 'amber':
        return 'border-2 border-amber-500 text-amber-600 bg-white'
      case 'purple':
        return 'border-2 border-purple-600 text-purple-600 bg-white'
      case 'default':
      default:
        return 'border-2 border-neutral-300 text-neutral-700 bg-white'
    }
  }
  
  // Subtle (fond léger)
  if (styleType === 'subtle') {
    switch (variant) {
      case 'primary':
        return 'bg-primary-100 text-primary-700'
      case 'success':
        return 'bg-green-100 text-green-700'
      case 'warning':
        return 'bg-yellow-100 text-yellow-700'
      case 'error':
        return 'bg-red-100 text-red-700'
      case 'info':
        return 'bg-blue-100 text-blue-700'
      case 'amber':
        return 'bg-amber-100 text-amber-700'
      case 'purple':
        return 'bg-purple-100 text-purple-700'
      case 'default':
      default:
        return 'bg-neutral-100 text-neutral-700'
    }
  }
  
  // Ghost (transparent)
  if (styleType === 'ghost') {
    switch (variant) {
      case 'primary':
        return 'text-primary-600 hover:bg-primary-50'
      case 'success':
        return 'text-green-600 hover:bg-green-50'
      case 'warning':
        return 'text-yellow-600 hover:bg-yellow-50'
      case 'error':
        return 'text-red-600 hover:bg-red-50'
      case 'info':
        return 'text-blue-600 hover:bg-blue-50'
      case 'amber':
        return 'text-amber-600 hover:bg-amber-50'
      case 'purple':
        return 'text-purple-600 hover:bg-purple-50'
      case 'default':
      default:
        return 'text-neutral-600 hover:bg-neutral-50'
    }
  }
  
  return ''
})

// Classes pour clickable
const clickableClasses = computed(() => {
  return props.clickable ? 'cursor-pointer hover:opacity-80 active:scale-95' : ''
})

// Classes pour icon-only
const iconOnlyClasses = computed(() => {
  return props.iconOnly ? 'aspect-square' : ''
})

// Composant HTML à utiliser
const component = computed(() => {
  return props.clickable ? 'button' : 'span'
})

// Classes finales combinées
const badgeClasses = computed(() => {
  return [
    baseClasses,
    sizeClasses.value,
    roundedClasses.value,
    variantClasses.value,
    clickableClasses.value,
    iconOnlyClasses.value
  ].filter(Boolean).join(' ')
})

// ============================================
// METHODS
// ============================================
const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}

const handleRemove = (event: MouseEvent) => {
  event.stopPropagation() // Empêche le click du badge si clickable
  emit('remove')
}
</script>

<template>
  <component 
    :is="component" 
    :class="badgeClasses"
    :type="clickable ? 'button' : undefined"
    @click="handleClick"
  >
    <!-- Point de statut -->
    <span 
      v-if="dot" 
      :class="[
        'inline-block w-2 h-2 rounded-full',
        pulse ? 'animate-pulse' : '',
        variant === 'success' ? 'bg-green-500' : 
        variant === 'warning' ? 'bg-yellow-500' : 
        variant === 'error' ? 'bg-red-500' : 
        variant === 'info' ? 'bg-blue-500' : 
        'bg-neutral-500'
      ]"
    />

    <!-- Icône gauche -->
    <span v-if="$slots['icon-left']" class="flex-shrink-0">
      <slot name="icon-left" />
    </span>

    <!-- Contenu principal -->
    <span v-if="!iconOnly">
      <slot />
    </span>

    <!-- Icône droite -->
    <span v-if="$slots['icon-right']" class="flex-shrink-0">
      <slot name="icon-right" />
    </span>

    <!-- Compteur -->
    <span 
      v-if="count !== undefined && count > 0" 
      class="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-white/20"
    >
      {{ count }}
    </span>

    <!-- Bouton de suppression -->
    <button 
      v-if="removable"
      type="button"
      @click="handleRemove"
      class="ml-1 -mr-1 flex-shrink-0 w-4 h-4 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
      aria-label="Supprimer"
    >
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </component>
</template>