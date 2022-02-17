import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import LockOpen from "../icons/LockOpen";
import Email from "./../icons/Email";
import { useAuthContext } from "../hooks/useAuthContext";
import clsx from "clsx";

const Login = () => {
  //
  const navigate = useNavigate();
  const auth = useAuthContext();

  //  validate form data

  const schemaValidation = yup.object().shape({
    email: yup.string().email("please enter valide email addess").required("email address is required"),
    password: yup
      .string()
      .required("please entre valide password")
      .min(7, "your password should be more than 7 "),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (value) => {
    auth.login({
      email: value.email,
      password: value.password,
    });

    navigate("/posts");
  };

  return (
    <div className="main flex justify-center align-center">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schemaValidation}>
        {(formik) => {
          console.log(formik.touched.email);
          return (
            <form className="login" onSubmit={formik.handleSubmit}>
              <h4 className="login__title flex  justify-center align-center">Login</h4>
              <div className="login__inputs-container  ">
                <Input
                  icon={<Email className="icon" />}
                  className={clsx("login__input", {
                    "input-error": formik.touched.email,
                  })}
                  placeholder="Email..."
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />

                <ErrorMessage className="error" name="email" component="div" />
                <Input
                  icon={<LockOpen className="icon" />}
                  className={clsx("login__input", {
                    "input-error": formik.touched.password,
                  })}
                  placeholder="Password..."
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <ErrorMessage className="error" name="password" component="div" />
                <Button className="login__button" type="submit">
                  Login
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
