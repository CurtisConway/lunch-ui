import Vue from 'vue';
import Router from 'vue-router';

import LuToggleInput from '../LuToggleInput.vue';

import {
  createLocalVue,
  mount,
} from '@vue/test-utils';
import { compileToFunctions } from 'vue-template-compiler'

describe('LuToggleInput.vue', () => {
  let mountFunction;
  let router = Router;
  let localVue = typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(LuToggleInput, {
        localVue,
        router,
        ...options,
      });
    }
  });

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });

  it('should render component with a value and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        elementId: 'testInput',
        value: true,
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

  it('should emit a focus and blur event', async () => {
    const wrapper = mountFunction({
      propsData: {
        elementId: 'testInput',
        value: false,
      },
    });

    const focus = jest.fn();
    const blur = jest.fn();
    const inputElement = wrapper.vm.$refs.inputElement;
    wrapper.vm.$on('focus', focus);
    wrapper.vm.$on('blur', blur);
    inputElement.focus();
    inputElement.blur();
    inputElement.focus();
    inputElement.blur();

    expect(focus.mock.calls).toHaveLength(2);
    expect(blur.mock.calls).toHaveLength(2);
  });

  it('should emit an change event', async () => {
    const wrapper = mountFunction({
      propsData: {
        elementId: 'testInput',
        value: false,
      },
    });

    const event = jest.fn();
    wrapper.vm.$on('change', event);
    const input = wrapper.find('input');
    await input.setChecked(true);
    await input.setChecked(false);

    expect(event.mock.calls).toHaveLength(2);
  });
});
