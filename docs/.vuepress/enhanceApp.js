import LunchUI from '../../index';
import '../../src/assets/sass/app.scss';
import pageComponents from '@internal/page-components'

export default ({
  Vue,
  data,
  router,
  siteData
}) => {
  Vue.use(LunchUI);
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
}
