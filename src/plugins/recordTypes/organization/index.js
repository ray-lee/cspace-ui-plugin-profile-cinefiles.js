import forms from './forms';
import vocabularies from './vocabularies';
import fields from './fields';

export default () => pluginContext => ({
  recordTypes: {
    organization: {
      vocabularies,
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
