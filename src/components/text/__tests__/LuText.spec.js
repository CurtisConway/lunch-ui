import Vue from 'vue';
import Router from 'vue-router';

import LuText from '../LuText.vue';

import {
  createLocalVue,
  mount,
} from '@vue/test-utils';
import { compileToFunctions } from 'vue-template-compiler'

describe('LuText.vue', () => {
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

  it('should render component with a size prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        size: 'heading',
      },
    }).html()).toMatchSnapshot();
  });

  it('should render component with a bold prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        bold: true,
      },
    }).html()).toMatchSnapshot();
  });

  it('should render component with an underline prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        underline: true,
      },
    }).html()).toMatchSnapshot();
  });

  it('should render component with an italic prop and match snapshot', () => {
    expect(mountFunction({
      propsData: {
        italic: true,
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

  it('should have the correct font size class', () => {
    const wrapper = mountFunction({
      propsData: {
        size: 'heading',
      },
    });

    expect(wrapper.classes('text-heading')).toBe(true);
  });

  it('should have the proper styles if size is a number', async () => {
    const wrapper = mountFunction({
      propsData: {
        size: 20,
      },
    });

    expect(wrapper.attributes().style)
      .toBe('font-size: 20px;');
  });

  it('should have the text-bold class if bold is set', () => {
    const wrapper = mountFunction({
      propsData: {
        bold: true,
      },
    });

    expect(wrapper.classes('text-bold')).toBe(true);
  });

  it('should have the text-italic class if italic is set', () => {
    const wrapper = mountFunction({
      propsData: {
        italic: true,
      },
    });

    expect(wrapper.classes('text-italic')).toBe(true);
  });

  it('should have the text-underline class if underline is set', () => {
    const wrapper = mountFunction({
      propsData: {
        underline: true,
      },
    });

    expect(wrapper.classes('text-underline')).toBe(true);
  });
});
