export default (configContext) => {

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:uoc_common': {
        authorizationGroupList: {
          authorizationGroup: {
            authorizedBy: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared,organization/committee',
                  },
                },
              },
            },
          },
        },
        userGroupList: {
          userGroup: {
            user: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared,organization/committee',
                  },
                },
              },
            },
            userInstitution: {
              [config]: {
                view: {
                  props: {
                    source: 'organization/local,organization/shared,organization/committee',
                  },
                },
              },
            },
          },
        },
        locationList: {
          location: {
            [config]: {
              view: {
                props: {
                  source: 'organization/local,organization/shared,organization/committee,place/local,place/shared,location/local',
                },
              },
            },
          },
        },
        occasionList: {
          occasion: {
            [config]: {
              view: {
                props: {
                  source: 'concept/genre,concept/associated,concept/theme',
                },
              },
            },
          },
        },
        staffGroupList: {
          staffGroup: {
            staffName: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared,organization/committee',
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