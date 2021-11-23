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
  import { defineComponent } from 'vue'
  import { useNavMenuState, NavMenuState } from '../store/nav-menu';

  export default defineComponent({
    setup() {
      const navMenuState = useNavMenuState() as NavMenuState;
      const onToggleNavMenu = () => {
        navMenuState.toggleNavMenu()
      }

      return {
        navMenuState,
        onToggleNavMenu
      }
    },
    computed: {
      navMenuIsOpen: function() {
        const navMenuState: NavMenuState = this.navMenuState;
        return navMenuState.navMenuIsOpen;
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
