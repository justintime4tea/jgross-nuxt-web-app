<template>
  <div class="w-screen flex flex-wrap justify-start items-center">
    <div class="w-screen flex-center items-center">
      <div class="p-0">
        <img :style="jgrossImageStyle" src="/jgross.jpg"/>
      </div>
      <div class="w-screen lg:hidden pt-4 lg:pt-8 flex flex-wrap flex-col justify-center items-center">
        <BaseScheduleMeeting class="m-0 w-[338px] text-center animate-pulse" />
        <button class="my-4 py-2 px-4 h-10 bg-green-600 hover:bg-purple-400 font-bold w-[338px]">
          Watch me live
        </button>
        <div class="lg:w-136"></div>
        <div class="flex-center justify-center">
          <BaseSocialNetworks/>
        </div>
      </div>
      <div class="p-8 w-136">
        <h3 class="text-purple-400">Hi! My name is</h3>
        <h1>Justin Gross.</h1>
        <BaseTypeWriter class="text-gray-400 text-4xl pb-2" :array="typewriterText" :delay="500" :iterations="4" :type-speed="50" :erase-speed="50">I am a&nbsp;</BaseTypeWriter>
        <p>I am driven by results and motivated by my love for my three children, my wife, and a lifelong passion for learning, technology and computer science.</p>
      </div>
    </div>
    <div class="w-screen hidden lg:flex lg:flex-wrap lg:justify-center items-center">
      <BaseScheduleMeeting class="mr-4 w-[185px] animate-pulse text-center"/>
      <a class="my-4 py-2 px-4 h-10 bg-green-600 hover:bg-purple-400 font-bold" href="https://twitch.tv/justintime4tea253" target="_blank">
        Watch me live
      </a>
      <div class="lg:w-136"></div>
    </div>
    <BaseModal :open="showModal" @ok="showModal = false" @cancel="showModal = false" />
  </div>
</template>
<script lang=ts>
  import { ref, computed } from 'vue'

  export default defineComponent({
    setup() {
      const showModal = ref(false);

      return {
        outerStyle: computed(() => {
          return 'background-image: url("desk-01.jpg");' +
            'background-blend-mode: multiply;' +
            'background-size: cover;' +
            'background-position: center;'
        }),
        jgrossImageStyle: computed(() => {
          return 'border: 4px white solid;'
        }),
        typewriterText: [
          'father.',
          'husband.',
          'musician.',
          'technical solutions engineer.'
        ],
        typewriterStart: 7,
        showModal
      }
    }
  })
</script>
