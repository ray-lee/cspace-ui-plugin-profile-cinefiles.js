const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    Col,
    Cols,
  } = configContext.layoutComponents;

  return (
    <Field name="params">
      <Cols>
        <Col>
          <Field name="numberOfObjects" />
          <Field name="contentDateGroup" />
          <Field name="objectProductionDate" />

          <Field name="responsibleDepartments">
            <Field name="responsibleDepartment" />
          </Field>
        </Col>

        <Col>
          <Field name="objectStatusList">
            <Field name="objectStatus" />
          </Field>

          <Field name="contentPlaces">
            <Field name="contentPlace" />
          </Field>

          <Field name="objectProductionPersonGroup">
            <Field name="objectProductionPerson" />
          </Field>
        </Col>
      </Cols>

      <Field name="briefDescriptions">
        <Field name="briefDescription" />
      </Field>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
