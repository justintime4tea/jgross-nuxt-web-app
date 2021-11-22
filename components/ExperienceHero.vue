<template>
  <div style="background-blend-mode: multiply;">
    <div class="w-screen h-136 flex flex-wrap bg-red-900 content-center justify-center" :style="outerStyle">
      <div class="flex flex-wrap content-center justify-center w-screen max-w-screen-md">
        <div class="justify-center">
          <img class="rounded-full p-0 h-64" :style="jgrossImageStyle" src="/jgross.jpg"/>
        </div>
        <div class="pt-8 px-8">
         <h2>Technical Solutions Engineer</h2>
         <p>Driven by results and motivated by my love for my three children, my wife, and a lifelong passion for learning, technology and computer science.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang=ts>
  import { computed } from 'vue'
  export default defineComponent({
    setup() {
      return {
        outerStyle: computed(() => {
          return 'background-image: url("desk-01.jpg");' +
            'background-blend-mode: multiply;' +
            'background-size: cover;' +
            'background-position: center;'
        }),
        jgrossImageStyle: computed(() => {
          return 'border: 4px white solid;'
        })
      }
    }
  })
</script>
