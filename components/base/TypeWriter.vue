<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    array: {
      type: Array,
      required: true,
    },
    eraseSpeed: {
      type: Number,
      default: 100,
    },
    typeSpeed: {
      type: Number,
      default: 200,
    },
    delay: {
      type: Number,
      default: 2000,
    },
    intervals: {
      type: Number,
      default: 500
    },
    start: {
      type: Number,
      default: 0
    },
    iterations: {
      type: Number,
      default: 0
    },
    caret: {
      type: String,
      default: 'cursor'
    }
  },
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      arrayIndex: 0,
      charIndex: 0,
      charDelayIndex: 0,
      charDelays: [20, 100, 10, 20, 50, 10, 40, 10, 55],
      count: 0
    };
  },
  methods: {
    typewriter() {
      const increaseCount = () => this.iterations === 0 ? null : this.count++;
      if (this.charIndex < this.array[this.arrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }

        this.typeValue += this.array[this.arrayIndex].charAt(this.charIndex);
        this.charIndex += 1;

        if (this.iterations === 0 || this.iterations > 0 && this.iterations > this.count) {
          if (this.charDelayIndex > this.charDelays.length - 1) {
            this.charDelayIndex = 0;
          }
          const typeSpeed = this.charDelays[this.charDelayIndex] + this.typeSpeed;
          this.charDelayIndex += 1;
          setTimeout(this.typewriter, typeSpeed);
        }
      } else {
        this.typeStatus = false;

        if (this.iterations !== 0) {
          increaseCount();
        }

        if (this.iterations === 0 || this.iterations > 0 && this.iterations > this.count) {
          setTimeout(this.eraser, this.delay);
        }
      }
    },
    eraser() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.array[this.arrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraser, this.eraseSpeed);
      } else {
        this.typeStatus = false;
        this.arrayIndex += 1;
        if (this.arrayIndex >= this.array.length) this.arrayIndex = 0;
        setTimeout(this.typewriter, this.typeSpeed + this.intervals);
      }
    },
  },
  created() {
    setTimeout(this.typewriter, this.start);
  },
});
</script>

<template>
  <div class="is-typed">
    <slot />
    <span class="typed">{{ typeValue }}</span>
    <span :class="caret + ' ' + { typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<style lang="postcss">
.is-typed span.cursor {
  display: inline-block;
  width: 6px;
  margin-left: 6px;
  animation: blink 1s infinite;
  @apply bg-gray-400;
}
</style>
