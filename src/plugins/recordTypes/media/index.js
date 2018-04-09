import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';
import title from './title';

export default () => pluginContext => ({
  recordTypes: {
    media: {
      advancedSearch: advancedSearch(pluginContext),
      fields: fields(pluginContext),
      forms: forms(pluginContext),
      title: title(pluginContext),
    },
  },
});
