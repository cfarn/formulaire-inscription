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
    })
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Input
        name="firstName"
        type="text"
        placeholder="Enter your firstname"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <Input
        name="lastName"
        type="text"
        placeholder="Enter your lastname"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      <Input
        name="userName"
        type="text"
        placeholder="Enter your username"
        value={formik.values.userName}
        onChange={formik.handleChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <Input
        name="passwordConfirmation"
        type="password"
        placeholder="Confirm your password"
        value={formik.values.passwordConfirmation}
        onChange={formik.handleChange}
      />
      <Input
        name="birthdate"
        type="date"
        value={formik.values.birthdate}
        onChange={formik.handleChange}
      />
      <Input
        name="github"
        type="url"
        placeholder="Enter your github url"
        value={formik.values.github}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App