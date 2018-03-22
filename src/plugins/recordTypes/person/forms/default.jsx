import { defineMessages } from 'react-intl';

const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Col,
    Panel,
    Row,
  } = pluginContext.layoutComponents;

  const {
    InputTable,
    Field,
    Subrecord,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="personTermGroupList">
          <Field name="personTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="nameDetail">
                <Field name="salutation" />
                <Field name="title" />
                <Field name="foreName" />
                <Field name="middleName" />
                <Field name="surName" />
                <Field name="nameAdditions" />
                <Field name="initials" />
              </InputTable>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Col>
            <Field name="gender" />
            <Field name="birthCity" subpath="ns2:persons_cinefiles" />
            <Field name="birthState" subpath="ns2:persons_cinefiles" />
            <Field name="birthPlace" />

            <Row>
              <Field name="birthDateGroup" />
              <Field name="deathDateGroup" />
            </Row>
          </Col>

          <Col>
            <Field name="bioNote" />
            <Field name="nameNote" />
            <Field name="accessCode" subpath="ns2:persons_cinefiles" />
          </Col>
        </Row>
      </Panel>

      <Subrecord name="contact" />

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  messages: defineMessages({
    name: {
      id: 'form.person.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(pluginContext),
});
