import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function LoginForm() {
  return (
    <Paper
      sx={{
        height: "75%",
        width: "100%",
        padding: "0.5rem",
        margin: "0.5rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h4"
            align="center"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            LOTTERY
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Username" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <Link to="/Forgot_Password" style={{ textDecoration: "none" }}>
            Forgot password ?
          </Link>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
          <Link to="/Register" style={{ textDecoration: "none" }}>
            Create an account
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default LoginForm;
