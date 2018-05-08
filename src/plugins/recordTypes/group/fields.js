export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:groups_common': {
        responsibleDepartment: {
          [config]: {
            defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(department):item:name(pfalibrary)\'PFA Library\'',
            view: {
              type: TermPickerInput,
              props: {
                source: 'department',
              },
            },
          },
        },
      },
    },
  };
};
