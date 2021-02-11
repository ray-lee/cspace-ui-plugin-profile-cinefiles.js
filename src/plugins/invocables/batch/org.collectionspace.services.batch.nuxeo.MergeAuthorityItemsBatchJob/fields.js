export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      target: {
        [config]: {
          view: {
            props: {
              source: 'citation/local,concept/genre,concept/occasion,concept/theme,concept/associated,organization/local,organization/committee,person/local,place/local,location/local,work/local',
              showQuickAdd: false,
            },
          },
        },
      },
    },
  };
};
