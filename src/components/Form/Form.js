import React from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';
import { navigate } from "@reach/router"  
import Contacts from "./components/Contacts"
import PrimaryButton from "../../primitives/PrimaryButton"
import { initialValues, signupSchema, fields } from "./helpers/Constants"
import { encode } from "./helpers/helpers"
import { 
  StyledLabel, 
  Container, 
  FieldsContainer, 
  HalfField, 
  FullField, 
  PrimarySection, 
  SecondarySection 
} from './Form.styles'

const Form = () => (
  <Container>
    <PrimarySection>
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "quote-form-selah", ...values, })
          })
          .then(() => {
            navigate(`/thankyou`);
          })
          .catch(() => alert('Something went wrong... Please try again!'))
          .finally(() => actions.setSubmitting(false))
        }}
      >
      {({ errors, touched }) => (
        <FormikForm name="quote-form-selah" data-netlify={true} data-netlify-honeypot="bot-field">
          <FieldsContainer>
            <Field type="hidden" name="bot-field" id="bot-field" />
            {!!fields && fields.length > 0 && fields.map(({ label, showErrors, id, fieldSize, fieldType, type, component, rows, options }, index) => {
              const DynamicWrapper = fieldSize === "HALF" ? HalfField : FullField
              return (
                <DynamicWrapper key={`contact-field-${index}`}>
                  <StyledLabel htmlFor={id}>{label}</StyledLabel>
                  {!!showErrors && errors[id] && touched[id] && <div className="error">{errors[id]}</div>}
                  {!component ? (
                    <Field name={id} id={id} type={!!fieldType ? fieldType : undefined} as={!!type && type}>
                      {!!options && options.length > 0 ? options.map(({value, label}, index) => (
                        <option 
                          key={`${id}-field-option-${index}`} 
                          value={value}
                        >
                          {label}
                        </option>
                      )) : null}
                    </Field>
                  ) : (
                    <Field component={component} name={id} id={id} rows={rows} />
                  )}
                </DynamicWrapper>
              )
            })}
          </FieldsContainer>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </FormikForm>
      )}
      </Formik>
    </PrimarySection>
    <SecondarySection>
      <Contacts />
    </SecondarySection>
  </Container>
)

export default Form;