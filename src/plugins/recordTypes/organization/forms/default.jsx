const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
    Subrecord,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="orgTermGroupList">
          <Field name="orgTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termType" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
                <Col />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="foundingCity" subpath="ns2:organizations_cinefiles" />
            <Field name="foundingState" subpath="ns2:organizations_cinefiles" />
            <Field name="foundingPlace" />
            <Field name="foundingDateGroup" />
          </Col>

          <Col>
            <Field name="historyNotes">
              <Field name="historyNote" />
            </Field>
            <Field name="accessCode" subpath="ns2:organizations_cinefiles" />
          </Col>
        </Cols>

        <Field name="memberGroupList" subpath="ns2:organizations_cinefiles">
          <Field name="memberGroup">
            <Field name="member" />
            <Field name="memberNote" />
            <Field name="memberAuthority" />
          </Field>
        </Field>
      </Panel>

      <Subrecord name="contact" />

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
