<script lang="ts" setup>
import { computed, resolveComponent } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'glass'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  to?: string | object
  external?: boolean
  /** Ajoute un effet de brillance au survol */
  shiny?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  type: 'button',
  external: false,
  shiny: true
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// ============================================
// STYLES & CLASSES
// ============================================

const baseClasses = 'relative inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 overflow-hidden'

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg shadow-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2'
    
    case 'secondary':
      return 'bg-amber-500 text-neutral-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20 focus:ring-2 focus:ring-amber-500'
    
    case 'outline':
      return 'border-2 border-neutral-200 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 bg-transparent'
    
    case 'glass':
      return 'backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20'
    
    case 'ghost':
      return 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
    
    case 'danger':
      return 'bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20'
    
    default: return ''
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'xs': return 'px-3 py-1.5 text-xs'
    case 'sm': return 'px-4 py-2 text-sm'
    case 'md': return 'px-7 py-3.5 text-base'
    case 'lg': return 'px-9 py-4 text-lg'
    case 'xl': return 'px-12 py-5 text-xl'
    default: return ''
  }
})

// ============================================
// LOGIQUE DU COMPOSANT (Link vs Button)
// ============================================

const isLink = computed(() => !!props.to)
const componentTag = computed(() => {
  if (isLink.value) {
    return props.external ? 'a' : resolveComponent('NuxtLink')
  }
  return 'button'
})

const componentProps = computed(() => {
  if (isLink.value) {
    return props.external 
      ? { href: props.to, target: '_blank', rel: 'noopener noreferrer' }
      : { to: props.to }
  }
  return { type: props.type, disabled: props.disabled || props.loading }
})

const handleClick = (e: MouseEvent) => {
  if (props.disabled || props.loading) {
    e.preventDefault()
    return
  }
  emit('click', e)
}
</script>

<template>
  <component
    :is="componentTag"
    v-bind="componentProps"
    :class="[
      baseClasses,
      variantClasses,
      sizeClasses,
      fullWidth ? 'w-full' : '',
      loading ? 'text-transparent !pointer-events-none' : ''
    ]"
    @click="handleClick"
  >
    <span 
      v-if="shiny && !disabled && !loading" 
      class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"
    />

    <span class="relative z-10 flex items-center gap-2">
      <span v-if="$slots['icon-left']" class="flex-shrink-0">
        <slot name="icon-left" />
      </span>

      <span class="truncate">
        <slot />
      </span>

      <span v-if="$slots['icon-right']" class="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
        <slot name="icon-right" />
      </span>
    </span>

    <div v-if="loading" class="absolute inset-0 flex items-center justify-center text-current">
      <svg class="animate-spin h-[1.2em] w-[1.2em]" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>
  </component>
</template>

<style scoped>
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
}

/* Ajout d'une classe group sur le parent pour les animations hover */
:deep(.group:hover) .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}
</style>