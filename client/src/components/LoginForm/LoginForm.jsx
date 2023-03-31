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
  const [errorMessage, setErrorMessage] = useState("");
  const mdMatches = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const SmMatches = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("http://localhost:5000/api/login", {
          email: values.email,
          password: values.password,
        });
        resetForm({ values: "" });
        if (response.status === 200) {
          setErrorMessage("");
          sessionStorage.setItem("WEB_AUTH_TOKEN", response.data.token);
        }
      } catch (err) {
        setErrorMessage(err.response.data.message);
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
      {errorMessage && (
        <Typography variant="h6" color={"red"} gutterBottom>
          {errorMessage}
        </Typography>
      )}
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
      <Stack
        spacing={mdMatches || SmMatches ? 0 : 5}
        direction={SmMatches ? "column" : "row"}
        flexWrap={"wrap"}
      >
        <Button variant="contained" onClick={formik.handleSubmit}>
          Login
        </Button>
        {mdMatches || SmMatches ? (
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
