import advancedSearch from './advancedSearch';
import vocabularies from './vocabularies';


export default () => pluginContext => ({
  recordTypes: {
    concept: {
      advancedSearch: advancedSearch(pluginContext),
      vocabularies,
    },
  },
});
