import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Stack, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8, "Confirm Password should be of minimum 8 characters length")
    .required("Confirm Password is required"),
});

const SignupForm = ({ displayingSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) setShowError(true);
      else {
        setShowError(false);
      }
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Typography variant="h3" gutterBottom>
        SignUp Page
      </Typography>

      <FormControl sx={{ m: 1, width: "50ch" }} variant="standard">
        <TextField
          label="Email Id"
          id="standard-adornment-email"
          type={"text"}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          required
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="standard">
        <TextField
          id="standard-adornment-password"
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
      </FormControl>
      <FormControl
        sx={{ m: 1, width: "50ch", mb: "1.5rem" }}
        variant="standard"
      >
        <TextField
          id="standard-adornment-confirm-password"
          label="Confirm Password"
          type={"password"}
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          required
        />
      </FormControl>
      {showError && (
        <Typography variation="h6" sx={{ color: "red" }} gutterBottom>
          Please Check your password
        </Typography>
      )}
      <Stack spacing={10} direction="row">
        <Button variant="contained" onClick={formik.handleSubmit}>
          SignIn
        </Button>
        <Button variant="outlined" onClick={() => displayingSignup(false)}>
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default SignupForm;
