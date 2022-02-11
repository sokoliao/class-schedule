import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { uniqueId } from "lodash";

export interface SignUpFormValue {
  email: string;
  password: string;
}

export interface SignUpFormProps {
  isLoading: boolean;
  error?: string;
  message?: string;
  onSubmit: (value: SignUpFormValue) => void;
}

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  repeatPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Both password need to be the same"),
});

export const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  const [emailId] = useState(uniqueId("email-"));
  const [passwordId] = useState(uniqueId("password-"));
  const [repeatPasswordId] = useState(uniqueId("repeat-password-"));
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={props.onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="m-3">
            <fieldset disabled={props.isLoading}>
              <div className="mb-3">
                <label htmlFor={emailId} className="form-label">
                  Email
                </label>
                <Field id={emailId} name="email" className="form-control" />
                {errors.email && touched.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor={passwordId} className="form-label">
                  Password
                </label>
                <Field
                  id={passwordId}
                  name="password"
                  type="password"
                  className="form-control"
                />
                {errors.password && touched.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor={repeatPasswordId} className="form-label">
                  Repeat password
                </label>
                <Field
                  id={repeatPasswordId}
                  name="repeatPassword"
                  type="password"
                  className="form-control"
                />
                {touched.repeatPassword && (
                  <div className="text-danger">{errors.repeatPassword}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Sign up{" "}
                {props.isLoading && (
                  <div
                    className="spinner-border spinner-border-sm text-light"
                    role="status"
                  />
                )}
              </button>

              {props.message && (
                <div className="mt-3 alert alert-success">{props.message}</div>
              )}

              {props.error && (
                <div className="mt-3 alert alert-danger">{props.error}</div>
              )}
            </fieldset>
          </Form>
        )}
      </Formik>
    </>
  );
};
