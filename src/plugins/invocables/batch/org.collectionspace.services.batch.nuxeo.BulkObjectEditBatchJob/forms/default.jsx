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
          {/* <Field name="contentDateGroup" /> */}
          {/* <Field name="objectProductionDate" /> */}
          <Field name="responsibleDepartment" />
          <Field name="objectStatus" />
        </Col>

        <Col>
          <Field name="contentPlace" />
          <Field name="objectProductionPerson" />
        </Col>
      </Cols>

      <Field name="briefDescription" />
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
