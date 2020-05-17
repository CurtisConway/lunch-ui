import Vue from 'vue';
import Router from 'vue-router';

import LuSelectInput from '../LuSelectInput.vue';

import {
  createLocalVue,
  mount,
} from '@vue/test-utils';
import { compileToFunctions } from 'vue-template-compiler'

describe('LuSelectInput.vue', () => {
  let mountFunction;
  let router = Router;
  let localVue = typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(LuSelectInput, {
        localVue,
        router,
        ...options,
      });
    }
  });

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });

  it('should render component with items and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        elementId: 'testInput',
        items: ['test', 'test2'],
      },
    }).html()).toMatchSnapshot();
  });

  it('should render with a label prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        elementId: 'testInput',
        label: 'test',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render with an inputStyle prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        elementId: 'testInput',
        inputStyle: 'underline',
      },
    }).html()).toMatchSnapshot();

    expect(mountFunction({
      propsData: {
        elementId: 'testInput',
        inputStyle: 'solid',
      },
    }).html()).toMatchSnapshot();

    expect(mountFunction({
      propsData: {
        elementId: 'testInput',
        inputStyle: 'solo',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render with an errors list and match snapshot', async () => {
    const wrapper = mountFunction({
      propsData: {
        elementId: 'testInput',
        errors: ['error one', 'error two'],
      },
    });
    wrapper.vm.$refs.textInput.$refs.inputElement.focus();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render with a success prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        elementId: 'testInput',
        success: true,
      },
    }).html()).toMatchSnapshot();
  });

  it('should render with a persistentLabel prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        elementId: 'testInput',
        persistentLabel: true,
      },
    }).html()).toMatchSnapshot();
  });

  it('should pass the value prop to the input element', async () => {
    const wrapper = mountFunction({
      propsData: {
        elementId: 'testInput',
        items: ['test', 'test2'],
        value: 'test',
      },
    });

    expect(wrapper.vm.$refs.textInput.$refs.inputElement.value).toBe('test');
  });

  it('should emit a focus and blur event', async () => {
    const wrapper = mountFunction({
      propsData: {
        elementId: 'testInput',
        items: ['test', 'test2'],
        value: 'test',
      },
    });

    const focus = jest.fn();
    const blur = jest.fn();
    const inputElement = wrapper.vm.$refs.textInput.$refs.inputElement;
    wrapper.vm.$on('focus', focus);
    wrapper.vm.$on('blur', blur);
    inputElement.focus();
    inputElement.blur();
    inputElement.focus();
    inputElement.blur();

    expect(focus.mock.calls).toHaveLength(2);
    expect(blur.mock.calls).toHaveLength(2);
  });

  it('should emit an input event', async () => {
    const wrapper = mountFunction({
      propsData: {
        elementId: 'testInput',
        items: ['test', 'test2'],
        value: 'test',
      },
    });

    const event = jest.fn();
    wrapper.vm.$on('input', event);
    wrapper.vm.$refs.textInput.$refs.inputElement.focus();
    wrapper.vm.$refs.textInput.$refs.inputElement.value = 'test2';
    wrapper.vm.$refs.textInput.$refs.inputElement.blur();
    wrapper.vm.$refs.textInput.$refs.inputElement.focus();
    wrapper.vm.$refs.textInput.$refs.inputElement.value = 'test';
    wrapper.vm.$refs.textInput.$refs.inputElement.blur();

    expect(event.mock.calls).toHaveLength(2);
  });

  it('should be valid without any validation rules', async () => {
    const wrapper = mountFunction({
      propsData: {
        elementId: 'testInput',
        items: ['test', 'test2'],
        rules: [],
      },
    });

    expect(wrapper.vm.isValid).toBe(true);
  });

  it('should not be valid with validation rules that fail', async () => {
    const wrapper = mountFunction({
      propsData: {
        elementId: 'testInput',
        items: ['test', 'test2'],
        rules: [v => !!v || 'Required'],
      },
    });
    wrapper.vm.validateInput();
    expect(wrapper.vm.isValid).toBe(false);
  });

  it('should be valid with validation rules that pass', async () => {
    const wrapper = mountFunction({
      propsData: {
        elementId: 'testInput',
        items: ['test', 'test2'],
        value: 'test',
        rules: [v => !!v || 'Required'],
      },
    });

    expect(wrapper.vm.isValid).toBe(true);
  });

  it('should be not valid after input if validation fails', async () => {
    const wrapper = mountFunction({
      propsData: {
        elementId: 'testInput',
        items: ['test', 'test2'],
        rules: [v => !!v || 'Required'],
      },
    });
    const textInput = wrapper.find('input');
    textInput.setValue('');
    wrapper.vm.validateInput();

    expect(wrapper.vm.isValid).toBe(false);
  });
});
