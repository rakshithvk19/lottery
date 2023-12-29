import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import SignupForm from "../components/SignupForm";

function Register() {
  return (
    <>
      <CssBaseline />
      <Grid container sx={{ height: "100vh", flexWrap: "nowrap" }}>
        <Grid item xs={6}>
          <img
            src="\signup.jpg"
            alt="deck of cards"
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid item xs={6} display={"flex"} alignItems={"center"}>
          <SignupForm />
        </Grid>
      </Grid>
    </>
  );
}

export default Register;
