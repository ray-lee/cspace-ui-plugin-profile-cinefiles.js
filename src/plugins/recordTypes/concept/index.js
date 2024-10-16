import advancedSearch from './advancedSearch';
import vocabularies from './vocabularies';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    concept: {
      vocabularies,
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
    },
  },
});
