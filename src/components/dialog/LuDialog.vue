<template>
  <div
    :class="defaultClassList"
    role="dialog"
    aria-modal="true"
  >
    <LuRow class="dialog-foreground">
      <transition name="slide-up-fade">
        <LuCard
          v-show="value"
          bgColor="white"
          borderRadius="2"
        >
          <slot></slot>
        </LuCard>
      </transition>
    </LuRow>

    <span
      class="dialog-background"
      @click="closeDialog">
    </span>
  </div>
</template>

<script>
import './LuDialog.scss';
import LuRow from '../grid/LuRow.vue';
import LuCard from '../card/LuCard.vue';

export default {
  name: 'LuDialog',
  components: {
    LuRow,
    LuCard,
  },
  props: {
    value: {
      type: Boolean,
      default: () => false,
    },
  },
  watch: {
    value(value) {
      if (value) {
        this.$emit('dialogOpen', this);
        if (document.addEventListener) {
          document.addEventListener('keyup', this.closeDialogWithEscape);
        }
      } else {
        this.$emit('dialogClose', this);
        if (document.removeEventListener) {
          document.removeEventListener('keyup', this.closeDialogWithEscape);
        }
      }
    },
  },
  computed: {
    defaultClassList() {
      return [
        'lu-dialog',
        {
          'dialog-active': this.value,
        },
      ];
    },
  },
  methods: {
    closeDialog() {
      this.$emit('input', false);
    },
    closeDialogWithEscape(event) {
      if (event.key === 'Escape') {
        this.closeDialog();
      }
    },
  },
};
</script>
