<template>
  <div class="w-screen flex-center">
    <div class="lg:p-0 max-w-screen-md lg:max-w-screen-lg lg:w-max">
      <div>
        <a class="flex-center md:flex-between items-center" href="https://google.com" target="_blank">
          <div class="block lg:hidden image-holder">
            <img class="hover-image w-[256px] h-[256px] m-[24px]" src="jgross-commodore64-purple.svg" />
            <img class="unhover-image w-[256px] h-[256px] m-[24px]" src="jgross-commodore64-green.svg" />
          </div>
          <div class="w-96 md:w-128">
            <p class="mb-16 lg:mb-0">
              I started my tech journey at the age of nine. My father brought home a Commodore 64 and I immediately fell in love with computers.
            </p>
          </div>
          <div class="hidden lg:block image-holder">
            <img class="hover-image w-[256px] h-[256px] m-[24px]" src="jgross-commodore64-purple.svg" />
            <img class="unhover-image w-[256px] h-[256px] m-[24px]" src="jgross-commodore64-green.svg" />
          </div>
        </a>
        <a class="flex-center md:flex-between items-center justify-between" href="https://google.com" target="_blank">
          <div class="ti-82-top block sm:hidden md:block image-holder">
            <img class="hover-image w-[256px] h-[256px] m-[24px]" src="jgross-ti-82-purple.svg" />
            <img class="unhover-image w-[256px] h-[256px] m-[24px]" src="jgross-ti-82-green.svg" />
          </div>
          <div class="w-96 md:w-128">
            <p class="my-16 lg:my-0">
              In junior high and highschool, on my TI-82 calculator, I would write software that implemented the postulates and theoroms from my math books. My calculator would effectively do my homework for me.
            </p>
          </div>
          <div class="ti-82-bottom hidden sm:block md:hidden xl:hidden image-holder">
            <img class="hover-image w-[256px] h-[256px] m-[24px]" src="jgross-ti-82-purple.svg" />
            <img class="unhover-image w-[256px] h-[256px] m-[24px]" src="jgross-ti-82-green.svg" />
          </div>
        </a>
        <a class="flex-center sm:flex-between items-center" href="https://google.com" target="_blank">
          <div class="block lg:hidden image-holder">
            <img class="hover-image w-[256px] md:w-[256px] m-[24px]" src="build-tech-purple.svg" />
            <img class="unhover-image w-[256px] md:w-[256px] m-[24px]" src="build-tech-green.svg" />
          </div>
          <div class="w-96 md:w-128 flex-start">
            <p class="mt-16 lg:mt-0">Fast-forward 26 years later and now I work for
            <span class="purple">Sentrics</span>
            <span>, a senior living tech company, as a </span>
            <span class="green">Tech Lead </span>and
            <span class="green">Senior Solutions Engineer</span>
            <span> leading a team of engineers developing life-safety emergency call systems.</span>
            </p>
          </div>
          <div class="hidden lg:block build-tech image-holder">
            <img class="hover-image w-[256px] md:w-[256px] m-[24px]" src="build-tech-purple.svg" />
            <img class="unhover-image w-[256px] md:w-[256px] m-[24px]" src="build-tech-green.svg" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .purple {
    @apply text-purple-300;
  }

  .green {
    @apply text-green-400;
  }

  .image-holder:hover .hover-image {
    display: block;
  }

  .image-holder .hover-image {
    display: none;
  }

  .image-holder:hover .unhover-image {
    display: none;
  }

  .image-holder .unhover-image {
    display: block;
  }

  @media only screen and (min-width: 640px) and (max-width: 686px) {
    .ti-82-top {
      display: block;
    }

    .ti-82-bottom {
      display: none;
    }
  }
</style>
