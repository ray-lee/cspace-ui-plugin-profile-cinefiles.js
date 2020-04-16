export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      responsibleDepartment: {
        [config]: {
          view: {
            type: TermPickerInput,
            props: {
              source: 'department',
            },
          },
        },
      },
    },
  };
};
