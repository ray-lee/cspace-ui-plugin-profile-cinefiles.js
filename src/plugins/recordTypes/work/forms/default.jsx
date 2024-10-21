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
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="workTermGroupList">
          <Field name="workTermGroup">
            <Panel>
              <Row>
                <Field name="termQualifier" />
                <Field name="termName" />
                <Field name="termDisplayName" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
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
            <Field name="workType" />
            <Field name="creatorGroupList">
              <Field name="creatorGroup">
                <Field name="creator" />
                <Field name="creatorType" />
              </Field>
            </Field>

            <Field name="genres" subpath="ns2:works_cinefiles">
              <Field name="genre" />
            </Field>

            <Field name="workDateGroupList">
              <Field name="workDateGroup">
                <Field name="workDate" />
              </Field>
            </Field>

            <Field name="countries" subpath="ns2:works_cinefiles">
              <Field name="country" />
            </Field>

            <Field name="languages" subpath="ns2:works_cinefiles">
              <Field name="language" />
            </Field>
          </Col>

          <Col>
            <Field name="publisherGroupList">
              <Field name="publisherGroup">
                <Field name="publisher" />
                <Field name="publisherType" />
              </Field>
            </Field>

            <Field name="subjects" subpath="ns2:works_cinefiles">
              <Field name="subject" />
            </Field>

            <Field name="themes" subpath="ns2:works_cinefiles">
              <Field name="theme" />
            </Field>

            <Field name="workHistoryNote" />
          </Col>
        </Cols>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
