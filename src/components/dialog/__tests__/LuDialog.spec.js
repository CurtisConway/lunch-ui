import Vue from 'vue';
import Router from 'vue-router';

import LuDialog from '../LuDialog.vue';

import {
  createLocalVue,
  mount,
} from '@vue/test-utils';
import { compileToFunctions } from 'vue-template-compiler'

describe('LuDialog.vue', () => {
  let mountFunction;
  let router = Router;
  let localVue = typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(LuDialog, {
        localVue,
        router,
        ...options,
      });
    }
  })

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });

  it('should emit an openDialog event', async () => {
    const wrapper = mountFunction({
      value: false,
    })
    const event = jest.fn();
    wrapper.vm.$on('dialogOpen', event);

    wrapper.setProps({
      value: true,
    });

    await wrapper.vm.$nextTick()
    expect(event.mock.calls).toHaveLength(1);
  });

  it('should emit a closeDialog event', async () => {
    const wrapper = mountFunction({
      value: false,
    })
    const event = jest.fn();
    wrapper.vm.$on('dialogClose', event);

    wrapper.setProps({
      value: true,
    });
    await wrapper.vm.$nextTick()
    wrapper.setProps({
      value: false,
    });
    await wrapper.vm.$nextTick()
    expect(event.mock.calls).toHaveLength(1);
  });
});
