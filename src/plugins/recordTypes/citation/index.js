import fields from './fields';
import vocabularies from './vocabularies';

export default () => configContext => ({
  recordTypes: {
    citation: {
      vocabularies,
      fields: fields(configContext),
    },
  },
});
