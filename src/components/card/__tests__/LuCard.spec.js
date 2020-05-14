import Vue from 'vue';
import Router from 'vue-router';

import LuCard from '../LuCard.vue';

import {
  createLocalVue,
  mount,
} from '@vue/test-utils';
import { compileToFunctions } from 'vue-template-compiler'

describe('LuCard.vue', () => {
  let mountFunction;
  let router = Router;
  let localVue = typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(LuCard, {
        localVue,
        router,
        ...options,
      });
    }
  })

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });
});
