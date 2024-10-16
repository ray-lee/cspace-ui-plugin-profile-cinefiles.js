import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  invocables: {
    report: {
      cinefilesUOCbyRequesterObject: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
