import { useFormik } from "formik"
import * as Yup from 'yup'

import Input from './components/Input'

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      passwordConfirmation: "",
      birthdate: "",
      github: ""
    },
    onSubmit: values => {
      console.log(values)
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email requis")
        .email("Email invalide"),
      firstName: Yup.string()
        .required("Prénom requis"),
      lastName: Yup.string()
        .required("Nom requis"),
      userName: Yup.string()
        .required("Pseudo requis")
        .min(4, "Pseudo trop court"),
      password: Yup.string()
        .required("Password requis")
        .min(8, "Password trop court"),
      passwordConfirmation: Yup.string()
        .required("Champ requis"),
        // .passwordConfirmation === password,
      birthdate: Yup.date()
        .required("Champ requis")
        
    }),
    validateOnChange: false
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formik.values.email}
        handleChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        name="firstName"
        type="text"
        placeholder="Enter your firstname"
        value={formik.values.firstName}
        handleChange={formik.handleChange}
        error={formik.errors.firstName}
      />
      <Input
        name="lastName"
        type="text"
        placeholder="Enter your lastname"
        value={formik.values.lastName}
        handleChange={formik.handleChange}
        error={formik.errors.lastName}
      />
      <Input
        name="userName"
        type="text"
        placeholder="Enter your username"
        value={formik.values.userName}
        handleChange={formik.handleChange}
        error={formik.errors.userName}
      />
      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={formik.values.password}
        handleChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Input
        name="passwordConfirmation"
        type="password"
        placeholder="Confirm your password"
        value={formik.values.passwordConfirmation}
        handleChange={formik.handleChange}
        error={formik.errors.passwordConfirmation}
      />
      <Input
        name="birthdate"
        type="date"
        value={formik.values.birthdate}
        handleChange={formik.handleChange}
        error={formik.errors.birthdate}
      />
      <Input
        name="github"
        type="url"
        placeholder="Enter your github url"
        value={formik.values.github}
        handleChange={formik.handleChange}
        error={formik.errors.github}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App