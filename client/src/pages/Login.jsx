import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <CssBaseline />
      <Grid container sx={{ height: "100vh", flexWrap: "nowrap" }}>
        <Grid item xs={6}>
          <img
            src="\Login.webp"
            alt="king of diamonds"
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid item xs={6} display={"flex"} alignItems={"center"}>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
