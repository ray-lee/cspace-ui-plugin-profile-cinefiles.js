import advancedSearch from './advancedSearch';
import columns from './columns';
import forms from './forms';
import fields from './fields';
import idGenerators from './idGenerators';
import messages from './messages';
import optionLists from './optionLists';
import title from './title';

export default () => configContext => ({
  idGenerators,
  optionLists,
  recordTypes: {
    collectionobject: {
      messages,
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
      title: title(configContext),
    },
  },
});
