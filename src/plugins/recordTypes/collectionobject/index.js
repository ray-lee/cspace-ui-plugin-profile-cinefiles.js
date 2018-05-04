import advancedSearch from './advancedSearch';
import columns from './columns';
import forms from './forms';
import fields from './fields';
import idGenerators from './idGenerators';
import messages from './messages';
import optionLists from './optionLists';
import sidebar from './sidebar';
import title from './title';

export default () => configContext => ({
  idGenerators,
  optionLists,
  recordTypes: {
    collectionobject: {
      messages,
      sidebar,
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
      title: title(configContext),
    },
  },
});
