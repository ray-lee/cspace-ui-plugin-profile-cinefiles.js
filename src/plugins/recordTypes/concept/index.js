import advancedSearch from './advancedSearch';
import vocabularies from './vocabularies';

export default () => configContext => ({
  recordTypes: {
    concept: {
      vocabularies,
      advancedSearch: advancedSearch(configContext),
    },
  },
});
