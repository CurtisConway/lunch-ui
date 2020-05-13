import LetusUI from '../../dist/letus-ui.umd.min';
import '../../src/assets/sass/app.scss';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(LetusUI)
}
