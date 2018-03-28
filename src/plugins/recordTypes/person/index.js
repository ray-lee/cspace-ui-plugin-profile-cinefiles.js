import advancedSearch from './advancedSearch';
import forms from './forms';
import fields from './fields';

export default () => pluginContext => ({
  recordTypes: {
    person: {
      advancedSearch: advancedSearch(pluginContext),
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
