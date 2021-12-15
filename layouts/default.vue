<template>
  <div :class="{'overlay-shown': navMenuIsOpen, 'overlay-hidden': !navMenuIsOpen}">
    <BaseTopNav class="sticky top-0 z-50" @on-toggle-nav-menu="onToggleNavMenu" :open="navMenuIsOpen" />
    <main class="relative bg-primary px-24 sm:px-48">
      <div class="mx-auto">
        <slot />
      </div>
      <ChatModal :opened="shouldShowChatBox" @chat-button-click="onChatButtonClicked" @send-button-click="onSendButtonClick" :messages="messages"/>
    </main>
    <BaseFooter />
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import { useNavMenuState, NavMenuState } from '../store/nav-menu';
  import { useMessageChannelStore } from '../store/message-channel';

  export default defineComponent({
    async setup() {
			const shouldShowChatBox = ref(false);
      const messageStore = useMessageChannelStore();
      const navMenuState = useNavMenuState() as NavMenuState;
      const onToggleNavMenu = () => {
        navMenuState.toggleNavMenu()
      }

      await messageStore.connect();

			const onChatButtonClicked = () => shouldShowChatBox.value = !shouldShowChatBox.value;
      const onSendButtonClick = (message) => messageStore.send(message)

      return {
				shouldShowChatBox,
				onChatButtonClicked,
        onSendButtonClick,
        navMenuState,
        onToggleNavMenu,
        messages: computed(() => messageStore.messages)
      }
    },
    computed: {
      navMenuIsOpen: function() {
        const navMenuState: NavMenuState = this.navMenuState;
        return navMenuState.menuIsOpen;
      }
    }
  })
</script>
<style lang="postcss">
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

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
