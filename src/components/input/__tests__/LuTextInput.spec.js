import Vue from 'vue';
import Router from 'vue-router';

import LuTextInput from '../LuTextInput.vue';

import {
  createLocalVue,
  mount,
} from '@vue/test-utils';
import { compileToFunctions } from 'vue-template-compiler'

describe('LuTextInput.vue', () => {
  let mountFunction;
  let router = Router;
  let localVue = typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(LuTextInput, {
        localVue,
        router,
        ...options,
      });
    }
  });

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });

  it('should render with type password and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        type: 'password',
      },
    }).html()).toMatchSnapshot();
  });


  it('should render with a label prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        label: 'test',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render with an inputStyle prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        inputStyle: 'underline',
      },
    }).html()).toMatchSnapshot();

    expect(mountFunction({
      propsData: {
        inputStyle: 'solid',
      },
    }).html()).toMatchSnapshot();

    expect(mountFunction({
      propsData: {
        inputStyle: 'solo',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render with an errors list and match snapshot', async () => {
    const wrapper = mountFunction({
      propsData: {
        errors: ['error one', 'error two'],
      },
    });
    wrapper.vm.$refs.inputElement.focus();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render with a success prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        success: true,
      },
    }).html()).toMatchSnapshot();
  });

  it('should render with a persistentLabel prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        persistentLabel: true,
      },
    }).html()).toMatchSnapshot();
  });

  it('should pass the value prop to the input element', async () => {
    const wrapper = mountFunction({
      propsData: {
        value: 'test',
      },
    });

    expect(wrapper.vm.$refs.inputElement.value).toBe('test');
  });

  it('should emit a focus event', async () => {
    const wrapper = mountFunction({
      propsData: {
        value: 'test',
      },
    });

    const event = jest.fn();
    wrapper.vm.$on('focus', event);
    wrapper.vm.$refs.inputElement.focus();
    wrapper.vm.$refs.inputElement.blur();
    wrapper.vm.$refs.inputElement.focus();
    wrapper.vm.$refs.inputElement.blur();

    expect(event.mock.calls).toHaveLength(2);
  });

  it('should emit a blur event', async () => {
    const wrapper = mountFunction({
      propsData: {
        value: 'test',
      },
    });

    const event = jest.fn();
    wrapper.vm.$on('blur', event);
    wrapper.vm.$refs.inputElement.focus();
    wrapper.vm.$refs.inputElement.blur();
    wrapper.vm.$refs.inputElement.focus();
    wrapper.vm.$refs.inputElement.blur();

    expect(event.mock.calls).toHaveLength(2);
  });

  it('should emit an input event', async () => {
    const wrapper = mountFunction({
      propsData: {
        value: 'test',
      },
    });

    const event = jest.fn();
    wrapper.vm.$on('input', event);
    wrapper.vm.$refs.inputElement.focus();
    wrapper.vm.$refs.inputElement.value = 'testing';
    wrapper.vm.$refs.inputElement.blur();
    wrapper.vm.$refs.inputElement.focus();
    wrapper.vm.$refs.inputElement.value = 'test';
    wrapper.vm.$refs.inputElement.blur();

    expect(event.mock.calls).toHaveLength(2);
  });

  it('should be valid without any validation rules', async () => {
    const wrapper = mountFunction({
      propsData: {
        rules: [],
      },
    });

    expect(wrapper.vm.isValid).toBe(true);
  });

  it('should not be valid with validation rules that fail', async () => {
    const wrapper = mountFunction({
      propsData: {
        rules: [v => !!v || 'Required'],
      },
    });
    wrapper.vm.validateInput();
    expect(wrapper.vm.isValid).toBe(false);
  });

  it('should be valid with validation rules that pass', async () => {
    const wrapper = mountFunction({
      propsData: {
        value: 'test',
        rules: [v => !!v || 'Required'],
      },
    });

    expect(wrapper.vm.isValid).toBe(true);
  });

  it('should be not valid after input if validation fails', async () => {
    const wrapper = mountFunction({
      propsData: {
        value: 'test',
        rules: [v => !!v || 'Required'],
      },
    });
    const textInput = wrapper.find('input[type="text"]');
    textInput.setValue('');
    wrapper.vm.validateInput();

    expect(wrapper.vm.isValid).toBe(false);
  });
});
