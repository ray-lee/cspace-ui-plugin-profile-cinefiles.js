import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';
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
