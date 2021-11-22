<template>
  <nav class="bg-primary" v-bind:class="{foo: true}">
    <div class="px-4">
      <div class="relative flex items-center h-16 w-full">
        <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <button @click="$emit('onToggleNavMenu')" type="button" class="inline-flex items-center justify-center p-2 text-gray-400 hover:text-purple-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch xs:justify-start lg:justify-between">
          <div class="flex-shrink-0 flex items-center text-white">
            <BaseJustinLogo />
          </div>
          <div class="hidden lg:block sm:ml-6">
            <div class="flex space-x-4">
              <NuxtLink to="/" class="text-gray-300 hover:underlined-purple hover:text-purple-400 px-3 py-2 text-sm font-medium">About</NuxtLink>
              <NuxtLink to="/experience" class="text-gray-300 hover:underlined-purple hover:text-purple-400 px-3 py-2 text-sm font-medium">Experience</NuxtLink>
              <!-- <NuxtLink to="/work" class="text-gray-300 hover:underlined-purple hover:text-purple-400 px-3 py-2 text-sm font-medium">Work</NuxtLink> -->
              <a href="mailto:justin@jgross.tech" class="text-gray-300 hover:underlined-purple hover:text-purple-400 px-3 py-2 text-sm font-medium">Contact</a>
              <!-- <NuxtLink to="/mobile" class="outline-white text-gray-300 hover:bg-gray-700 hover:text-purple-400 px-3 py-2 text-sm font-medium">Resume</NuxtLink> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="{'w-full': true, 'bg-primary': true, absolute: true, 'menu-open': open, 'menu-closed': !open, menu: true }" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink @click="$emit('onToggleNavMenu')"  to="/" class="text-gray-300 hover:bg-gray-700 hover:text-purple-400 block px-3 py-2 text-base font-medium">About</NuxtLink>
        <NuxtLink @click="$emit('onToggleNavMenu')"  to="/experience" class="text-gray-300 hover:bg-gray-700 hover:text-purple-400 block px-3 py-2 text-base font-medium">Experience</NuxtLink>
        <!-- <NuxtLink @click="$emit('onToggleNavMenu')" to="/work" class="text-gray-300 hover:bg-gray-700 hover:text-purple-400 block px-3 py-2 text-base font-medium">Work</NuxtLink> -->
        <a @click="$emit('onToggleNavMenu')"  href="mailto:justin@jgross.tech" class="text-gray-300 hover:bg-gray-700 hover:text-purple-400 block px-3 py-2 text-base font-medium">Contact</a>
        <!-- <NuxtLink to="/mobile" class="text-gray-300 hover:bg-gray-700 hover:text-purple-400 block px-3 py-2 text-base font-medium">Resume</NuxtLink> -->
      </div>
    </div>
    <div class="hidden lg:flex flex-col text-white text-center absolute">
      <BaseSocialNetworks />
    </div>
  </nav>
</template>
<script lang="ts">
  // @ts-ignore
  import vClickOutside from 'v-click-outside';
  const { bind, unbind } = vClickOutside.directive;

  import { defineComponent } from 'vue'
  export default defineComponent({
    mounted() {
      // @ts-ignore
      this._el = document.querySelector('nav');
      // Note: v-click-outside config or handler needs to be passed to the
      //       "bind" function 2nd argument as object with a "value" key:
      //       same as Vue’s directives "binding" format.
      // https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments
      // @ts-ignore
      bind(this._el, { value: (e) => {this.onClickOutside(e, this.$emit)} });
    },
    beforeDestroy() {
      // @ts-ignore
      unbind(this._el)
    },
    methods: {
      // @ts-ignore
      onClickOutside (_, emit) {
        // @ts-ignore
        if (this.open) {
          emit('onToggleNavMenu');
        }
      }
    },
    props: {
      open: {
        type: Boolean,
        default: () => false
      }
    },
    setup() {
      return {}
    }
  })
</script>
<style lang="postcss">
  @media (min-width: 1024px) {
    /* home route and active route will show in bold as it matches / and /about */
    a.router-link-active {
        @apply underlined;
    }
  }

/* exact link will show the primary color for only the exact matching link */
a.router-link-exact-active {
  @apply text-green-400;
}

.menu {
  overflow: hidden;
}

@media (max-width: 1024px) {
  .menu-open {
    opacity: 1;
    height: 148px;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
  }
}

.menu-closed {
  height: 0;
  opacity: 1;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}
</style>

