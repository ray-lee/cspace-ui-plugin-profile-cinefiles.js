import advancedSearch from './advancedSearch';
import forms from './forms';
import fields from './fields';
import vocabularies from './vocabularies';

export default () => pluginContext => ({
  recordTypes: {
    person: {
      vocabularies,
      advancedSearch: advancedSearch(pluginContext),
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
