import Vue from 'vue';
import Router from 'vue-router';

import LuText from '../LuText.vue';

import {
  createLocalVue,
  mount,
} from '@vue/test-utils';
import { compileToFunctions } from 'vue-template-compiler'

describe('LuButton.vue', () => {
  let mountFunction;
  let router = Router;
  let localVue = typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(LuText, {
        localVue,
        router,
        ...options,
      });
    }
  })

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });

  it('should render component with a tag prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        tag: 'h2',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render component with a color prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        color: 'green',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render component with a transform prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        transform: 'uppercase',
      },
    }).html()).toMatchSnapshot();
  });

  it('should have the correct text color class', () => {
    const wrapper = mountFunction({
      propsData: {
        color: 'green',
      },
    });

    expect(wrapper.classes('text-green')).toBe(true);
  });

  it('should have the correct text transform class', () => {
    const wrapper = mountFunction({
      propsData: {
        transform: 'uppercase',
      },
    });

    expect(wrapper.classes('text-uppercase')).toBe(true);
  });
});
