import fields from './fields';
import advancedSearch from './advancedSearch';

export default () => configContext => ({
  recordTypes: {
    group: {
      fields: fields(configContext),
      advancedSearch: advancedSearch(configContext),
    },
  },
});
