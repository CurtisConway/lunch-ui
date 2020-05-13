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
  let router = Router;
  let localVue = typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(LuButton, {
        localVue,
        router,
        ...options,
      });
    }
  })

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });

  it('should render component with a type prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        type: 'solid',
      },
    }).html()).toMatchSnapshot();

    expect(mountFunction({
      propsData: {
        type: 'text',
      },
    }).html()).toMatchSnapshot();

    expect(mountFunction({
      propsData: {
        type: 'outline',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render component with a color prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        color: 'green',
        type: 'solid',
      },
    }).html()).toMatchSnapshot();

    expect(mountFunction({
      propsData: {
        color: 'green',
        type: 'text',
      },
    }).html()).toMatchSnapshot();

    expect(mountFunction({
      propsData: {
        color: 'green',
        type: 'outline',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render an <a> tag when using href prop', () => {
    const wrapper = mountFunction({
      propsData: {
        href: 'http://www.google.com',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render an <a> tag when using to prop', () => {
    const wrapper = mountFunction({
      propsData: {
        to: 'http://www.google.com',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should have text color class when using the text style', () => {
    const wrapper = mountFunction({
      propsData: {
        color: 'green',
        type: 'text',
      },
    });

    expect(wrapper.classes('text-green')).toBe(true);
  });

  it('should have text color class and border color class when using the outline style', () => {
    const wrapper = mountFunction({
      propsData: {
        color: 'green',
        type: 'outline',
      },
    });

    expect(wrapper.classes('text-green')).toBe(true);
    expect(wrapper.classes('border-green')).toBe(true);
  });

  it('should have background color class and border color class when using the solid style', () => {
    const wrapper = mountFunction({
      propsData: {
        color: 'green',
        type: 'solid',
      },
    });

    expect(wrapper.classes('bg-green')).toBe(true);
    expect(wrapper.classes('border-green')).toBe(true);
  });

  it('should emit a click event', async () => {
    const wrapper = mountFunction({
      propsData: {
        href: '#!',
      },
    })

    const click = jest.fn();
    wrapper.vm.$on('click', click);
    wrapper.trigger('click');

    wrapper.setProps({ href: undefined, to: '/foo' });
    wrapper.trigger('click');

    expect(click.mock.calls).toHaveLength(2);
  });

  it('should have the disabled class if disabled', async () => {
    const wrapper = mountFunction({
      propsData: {
        href: '#!',
        disabled: true,
      },
    });

    expect(wrapper.classes('disabled')).toBe(true);
  });

  it('should not emit a click event if disabled', async () => {
    const wrapper = mountFunction({
      propsData: {
        href: '#!',
        disabled: true,
      },
    });

    const click = jest.fn();
    wrapper.vm.$on('click', click);
    wrapper.trigger('click');

    expect(click.mock.calls).toHaveLength(0);
  });
});
