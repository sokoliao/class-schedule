import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { uniqueId } from "lodash";

export interface LoginFormValue {
  email: string;
  password: string;
}

export interface LoginFormProps {
  isLoading: boolean;
  error?: string;
  message?: string;
  onSubmit: (value: LoginFormValue) => void;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const [emailId] = useState(uniqueId("email-"));
  const [passwordId] = useState(uniqueId("password-"));
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
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

              <button type="submit" className="btn btn-primary">
                Login{" "}
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
