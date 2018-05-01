import advancedSearch from './advancedSearch';
import vocabularies from './vocabularies';

export default () => pluginContext => ({
  recordTypes: {
    concept: {
      vocabularies,
      advancedSearch: advancedSearch(pluginContext),
    },
  },
});
