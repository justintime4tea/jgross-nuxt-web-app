<template>
  <div :class="[containerStyle]">
    <slot />
  </div>
</template>
<script>
import { defineComponent, computed, toRefs } from 'vue';

export default defineComponent({
  props: {
    isMessageFromSelf: {
      type: Boolean,
      required: true
    }
  },
  setup(props, context) {
    const { isMessageFromSelf } = toRefs(props);
    const containerStyle = computed(() => {
        const messageFromSelf = "bg-white text-gray-700 p-2 self-start my-2 rounded-md shadow mr-3";
        const messageFromOther = "bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3";
        if (isMessageFromSelf.value) {
          return messageFromSelf;
        }

        return messageFromOther;
    });

    return { isMessageFromSelf, containerStyle }
  }
})
</script>
