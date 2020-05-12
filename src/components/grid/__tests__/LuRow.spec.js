import Vue from 'vue';
import Router from 'vue-router';

import LuRow from '../LuRow.vue';

import {
  createLocalVue,
  mount,
} from '@vue/test-utils';
import { compileToFunctions } from 'vue-template-compiler'

describe('LuRow.vue', () => {
  let mountFunction;
  let router = Router;
  let localVue = typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(LuRow, {
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
        tag: 'main',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render component with a reverse prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        reverse: true,
      },
    }).html()).toMatchSnapshot();
  });

  it('should render component with a wrap prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        wrap: true,
      },
    }).html()).toMatchSnapshot();
  });

  it('should render component with a hAlign prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        hAlign: 'left',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render component with a vAlign prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        vAlign: 'top',
      },
    }).html()).toMatchSnapshot();
  });

  it('should have the flex and flex-row classes', async () => {
    const wrapper = mountFunction({
      propsData: {},
    });

    expect(wrapper.classes('flex')).toBe(true);
    expect(wrapper.classes('flex-row')).toBe(true);
  });

  it('should render the tag passed in', async () => {
    const tag = 'main';
    const wrapper = mountFunction({
      propsData: {
        tag
      },
    });

    expect(wrapper.is(tag)).toBe(true);
  });

  it('should have the flex-reverse class with the reverse prop', async () => {
    const wrapper = mountFunction({
      propsData: {
        reverse: true,
      },
    });

    expect(wrapper.classes('flex-reverse')).toBe(true);
  });

  it('should have the flex-wrap class with the wrap prop', async () => {
    const wrapper = mountFunction({
      propsData: {
        wrap: true,
      },
    });

    expect(wrapper.classes('flex-wrap')).toBe(true);
  });

  it('should have the right align-h-* class with the alignH prop', async () => {
    const left = mountFunction({
      propsData: {
        hAlign: 'left',
      },
    });
    const center = mountFunction({
      propsData: {
        hAlign: 'center',
      },
    });
    const right = mountFunction({
      propsData: {
        hAlign: 'right',
      },
    });

    expect(left.classes('align-h-left')).toBe(true);
    expect(center.classes('align-h-center')).toBe(true);
    expect(right.classes('align-h-right')).toBe(true);
  });

  it('should have the right align-v-* class with the alignH prop', async () => {
    const top = mountFunction({
      propsData: {
        vAlign: 'top',
      },
    });
    const center = mountFunction({
      propsData: {
        vAlign: 'center',
      },
    });
    const bottom = mountFunction({
      propsData: {
        vAlign: 'bottom',
      },
    });

    expect(top.classes('align-v-top')).toBe(true);
    expect(center.classes('align-v-center')).toBe(true);
    expect(bottom.classes('align-v-bottom')).toBe(true);
  });
});
