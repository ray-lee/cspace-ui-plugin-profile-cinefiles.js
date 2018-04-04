import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';
import columns from './columns';

export default () => pluginContext => ({
  recordTypes: {
    work: {
      advancedSearch: advancedSearch(pluginContext),
      fields: fields(pluginContext),
      forms: forms(pluginContext),
      columns: columns(pluginContext),
    },
  },
});
