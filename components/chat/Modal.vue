<template>
  <div  class="fixed bottom-0 right-0 flex flex-col items-end ml-6 w-full">
    <div :class="[chatModalClasses, { show: opened }]">
      <!-- admin profile -->
      <div class="flex justify-between items-center text-white p-2 bg-gray-800 border shadow-lg mr-5 w-full">
        <div class="flex items-baseline">
          <i class="p-[8px] text-xl fa-solid fa-at"></i>
          <h2 class="text-white items-center font-semibold tracking-wider cursor-default">Everyone</h2>
        </div>
        <div @click="onChatButtonClick" class="flex items-center justify-center cursor-pointer">
          <i class="p-[8px] text-xl fa-solid fa-close"></i>
        </div>
      </div>
      <!-- chats -->
      <div ref="chatServices" :class="[chatServiceClasses, { expand: opened }]">
        <template v-for="message of messages">
           <ChatMessage :is-message-from-self="!!(message.data.index % 2)">
            {{ message.data.message }}
          </ChatMessage>
        </template>
      </div>
      <!-- send message -->
      <div class="relative bg-white">
        <input ref="chatInput" @keyup.enter="onSendButtonClick" type="text" name="message" placeholder="Hello everyone!"
              class="pl-4 pr-16 py-2 border border-green-500 focus:outline-none w-full">
          <button @click="onSendButtonClick" class="absolute right-0 bottom-0 text-green-600 bg-white  hover:text-green-500 m-1 px-3 py-1 w-auto transistion-color duration-100 focus:outline-none">Send</button>
      </div>
    </div>
    <div @click="onChatButtonClick" class="show-chat mx-10 mb-6 mt-4 text-green-500 hover:text-green-600 flex justify-center items-center cursor-pointer">
			<i class="fa-solid fa-message text-5xl"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onUpdated, onMounted, ref, toRef, watchEffect, watch } from 'vue';

export default defineComponent({
  props: {
		opened: Boolean,
    messages: Array
	},
	setup(props, { emit }) {
    const msgs = computed(() => props.messages.map(({ userId, message }) => ({ userId, message })));

    const chatServices = ref(null);
    const chatInput = ref(null);

    const chatModalClasses = 'chat-modal mr-5 flex flex-col mb-5 shadow-lg w-full transform-gpu md:w-1/2 lg:w-1/2 2xl:w-1/6 transform translate-x-[20px] md:translate-x-0';
		const chatServiceClasses = 'flex flex-col bg-gray-200 px-2 chat-services overflow-auto';

    const onChatButtonClick = () => emit('chat-button-click');
    const onSendButtonClick = () => {
      if (chatInput.value && chatInput.value.value) {
        emit('send-button-click', chatInput.value.value);
        chatInput.value.value = '';
      }
    }
    const scrollToBottom = () => {
      chatServices.value.scrollTop = chatServices.value.scrollHeight;
    };

    onUpdated(scrollToBottom);

		return {
      msgs,
      chatServices,
      chatInput,
			onChatButtonClick,
      onSendButtonClick,
			chatModalClasses,
			chatServiceClasses
		}
  },
})

</script>
<style lang="postcss">
    .chat-services{
      transition: .5s;
      height: 0;
    }
    .chat-services.expand{
      height: 350px;
    }
    .message {
      max-width: 250px;
    }

    .chat-modal{
      transition: .5s;
      opacity: 0;
    }

    .chat-modal.show{
      opacity: 1;
    }

    .chat-modal.show.expand{
      transform: translate(20px);
    }

    @keyframes animateModal {
      from{
        transform: translateX(200px) opacity(0);
      }
      to{
        transform: translateX(0) opacity(1);
      }
    }
  </style>
