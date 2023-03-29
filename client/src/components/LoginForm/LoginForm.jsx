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
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginForm = ({ displayingSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const matches = useMediaQuery((theme) => theme.breakpoints.down("laptop"));

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        const response = await axios.post("http://localhost:5000/api/login", {
          email: values.email,
          password: values.password,
        });
        console.log("response", response);
        resetForm({ values: "" });
      } catch (err) {
        console.log(err);
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
        Login Page
      </Typography>
      <FormControl
        sx={{ m: 1, width: "-webkit-fill-available" }}
        variant="standard"
      >
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
      <FormControl
        sx={{ m: 1, width: "-webkit-fill-available", mb: "1.5rem" }}
        variant="standard"
      >
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
      <Stack spacing={matches ? 0 : 5} direction="row" flexWrap={"wrap"}>
        <Button variant="contained" onClick={formik.handleSubmit}>
          Login
        </Button>
        {matches ? (
          <Button variant="text" onClick={() => displayingSignup(true)}>
            SignUp
          </Button>
        ) : (
          <Typography variant="subtitle1">
            Don't have an account yet?
            <Button variant="text" onClick={() => displayingSignup(true)}>
              SignUp
            </Button>
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default LoginForm;
