import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import vocabularies from './vocabularies';

export default () => pluginContext => ({
  recordTypes: {
    work: {
      vocabularies,
      advancedSearch: advancedSearch(pluginContext),
      columns: columns(pluginContext),
      fields: fields(pluginContext),
      forms: forms(pluginContext),
    },
  },
});
