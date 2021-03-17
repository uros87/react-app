import React, { Fragment } from 'react';
import '../../sass/main.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Mininum 2 characters')
        .max(15, 'Maximum 15 characters')
        .required('Required!'),
      lastName: Yup.string()
        .min(2, 'Mininum 2 characters')
        .max(15, 'Maximum 15 characters')
        .required('Required!'),
      email: Yup.string().email('Invalid email format').required('Required!'),
      password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .required('Required!'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], "Password's do not match")
        .required('Required!'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="sign-up-container">
      <form onSubmit={formik.handleSubmit} className="form">
        <h3>Sign up</h3>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            className={`${
              formik.errors.firstName && formik.touched.firstName ? 'error' : ''
            }`}
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <p className="form-error">{formik.errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last name </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            className={`${
              formik.errors.lastName && formik.touched.lastName ? 'error' : ''
            }`}
          />
          {formik.errors.lastName && formik.touched.lastName && (
            <p className="form-error">{formik.errors.lastName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className={`${
              formik.errors.email && formik.touched.email ? 'error' : ''
            }`}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="form-error">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">password </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            className={`${
              formik.errors.password && formik.touched.password ? 'error' : ''
            }`}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="form-error">{formik.errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            className={`${
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? 'error'
                : ''
            }`}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className="form-error">{formik.errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" className="sign-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
