import forms from './forms';
import fields from './fields';

export default () => pluginContext => ({
  recordTypes: {
    person: {
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
