import advancedSearch from './advancedSearch';
import columns from './columns';
import forms from './forms';
import fields from './fields';
import idGenerators from './idGenerators';
import messages from './messages';
import optionLists from './optionLists';
import title from './title';

export default () => pluginContext => ({
  idGenerators,
  optionLists,
  recordTypes: {
    collectionobject: {
      messages,
      advancedSearch: advancedSearch(pluginContext),
      columns: columns(pluginContext),
      forms: forms(pluginContext),
      fields: fields(pluginContext),
      title: title(pluginContext),
    },
  },
});
