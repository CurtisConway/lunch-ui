import Vue from 'vue';
import Router from 'vue-router';

import LuButton from '../LuButton.vue';

import {
  createLocalVue,
  mount,
} from '@vue/test-utils';
import { compileToFunctions } from 'vue-template-compiler'

describe('LuButton.vue', () => {
  let mountFunction;
  let router = Router
  let localVue = typeof Vue;

  beforeEach(() => {
    router = new Router()
    localVue = createLocalVue()
    localVue.use(Router)

    mountFunction = (options = {}) => {
      return mount(LuButton, {
        localVue,
        router,
        ...options,
      })
    }
  })

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  });

  it('should render component with a type prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        type: 'solid',
      },
    }).html()).toMatchSnapshot()

    expect(mountFunction({
      propsData: {
        type: 'text',
      },
    }).html()).toMatchSnapshot()

    expect(mountFunction({
      propsData: {
        type: 'outline',
      },
    }).html()).toMatchSnapshot()
  });

  it('should render component with a color prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        type: 'solid',
        color: 'green',
      },
    }).html()).toMatchSnapshot()

    expect(mountFunction({
      propsData: {
        color: 'green',
        type: 'text',
      },
    }).html()).toMatchSnapshot()

    expect(mountFunction({
      propsData: {
        color: 'green',
        type: 'outline',
      },
    }).html()).toMatchSnapshot()
  });
});
