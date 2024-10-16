import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  invocables: {
    report: {
      cinefilesUOCbyApprovalStatus: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
