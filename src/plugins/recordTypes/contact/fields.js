export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:contacts_common': {
        addressGroupList: {
          addressGroup: {
            addressCountry: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'country',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
