<template>
  <div :class="defaultClassList">
    <LuText tag="label" :for="computedId" size="subtitle" :class="labelClassList">
      {{ label }}<span v-if="required">*</span>
    </LuText>
    <input
      ref="inputElement"
      :id="computedId"
      :type="inputType"
      v-model="valueInterface"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    >
    <transition name="grow-fade">
      <LuErrorList :errors="errorList" v-if="!isValid && focus" />
    </transition>
  </div>
</template>

<script>
import './LuInput.scss';
import LuText from '../text/LuText.vue';
import LuErrorList from './partials/_LuErrorList.vue';
import colors from '../../assets/js/mixins/colors';
import borders from '../../assets/js/mixins/borders';
import spacing from '../../assets/js/mixins/spacing';
import events from '../../assets/js/mixins/events';
import inputs from './_inputs.mixin';
import validation from './_validation.mixin';

export default {
  name: 'LuTextInput',
  mixins: [colors, borders, spacing, events, inputs, validation],
  components: {
    LuText,
    LuErrorList,
  },
  props: {
    type: {
      type: String,
      default: () => 'text',
    },
  },
  computed: {
    inputType() {
      if (['text', 'password', 'email', 'tel', 'number', 'search'].includes(this.type)) {
        return this.type;
      }
      return 'text';
    },
  },
};
</script>
