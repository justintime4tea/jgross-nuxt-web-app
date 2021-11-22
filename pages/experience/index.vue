<template>
  <div class="bg-primary text-primary flex-center">
    <div class="w-screen">
      <div class="p-8 w-screen flex-center items-center">
        <img class="p-16" src="system-architecture.svg" />
        <ResumeSkills class="w-128 p-8"/>
      </div>
      <div class="p-8 w-screen flex-center items-center">
        <ResumeExperience />
      </div>
      <div class="p-8 w-screen flex flex-wrap justify-center items-center lg:flex-row-reverse">
        <img class="w-96" src="learning.png" />
        <ResumeEducation class="pt-16"/>
      </div>
    </div>
  </div>
</template>
<script lang=ts>
  export default defineComponent({
    setup() {
      return {}
    }
  })
</script>
