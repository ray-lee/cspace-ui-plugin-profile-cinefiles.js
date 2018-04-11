import { defineMessages } from 'react-intl';

const messages = defineMessages({
  termDisplayName: {
    id: 'field.works_common.termDisplayName.miniName',
    defaultMessage: 'Alternate display name',
  },
  creator: {
    id: 'field.works_common.creator.miniName',
    defaultMessage: 'Creator',
  },
});

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Field
        name="relation-list-item"
        subpath="rel:relations-common-list"
        showChildren={false}
        showSiblings={false}
      />

      <Row>
        <Field
          name="termDisplayName"
          labelMessage={messages.termDisplayName}
          subpath={['ns2:works_common', 'workTermGroupList', 'workTermGroup', 1]}
        />

        <Field
          name="creator"
          labelMessage={messages.creator}
          subpath={['ns2:works_common', 'creatorGroupList', 'creatorGroup', 0]}
        />
      </Row>

      <Row>
        <Field
          name="0"
          repeating={false}
          subpath={['ns2:works_cinefiles', 'countries', 'country']}
        />

        <Field
          name="0"
          repeating={false}
          subpath={['ns2:works_common', 'workDateGroupList', 'workDateGroup']}
        />
      </Row>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
