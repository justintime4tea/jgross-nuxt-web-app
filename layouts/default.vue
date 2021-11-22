<template>
  <div :class="{'overlay-shown': navMenuIsOpen, 'overlay-hidden': !navMenuIsOpen}">
    <BaseTopNav class="sticky top-0 z-50" @on-toggle-nav-menu="onToggleNavMenu" :open="navMenuIsOpen" />
    <main class="relative bg-primary px-24 sm:px-48">
      <div class="mx-auto">
        <slot />
      </div>
    </main>
    <BaseFooter />
  </div>
</template>
<script lang="ts">
  import { ref, defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      const navMenuIsOpen = ref(false);
      const onToggleNavMenu = () => {
        navMenuIsOpen.value = !navMenuIsOpen.value
      }

      return {
        navMenuIsOpen,
        onToggleNavMenu
      }
    }
  })
</script>
<style lang="postcss">
@media (max-width: 1024px) {
  .overlay-shown {
      position: relative;
      transition: all 0.25s;
  }

  .overlay-shown:after {
      content: '\A';
      position: absolute;
      width: 100%;
      height:100%;
      top:0;
      left:0;
      background:rgba(0,0,0,0.5);
      opacity: 1;
      transition: opacity 0.25s;
      -webkit-transition: opacity 0.25s;
      -moz-transition: opacity 0.25s;
  }
}


.overlay-hidden:after {
    content: '\A';
    position: absolute;
    width: 0;
    height: 0;
    top:0;
    left:0;
    background:rgba(0,0,0,0.5);
    opacity: 0;
    transition: opacity 0.25s;
    -webkit-transition: opacity 0.25s;
    -moz-transition: opacity 0.25s;
}

</style>
