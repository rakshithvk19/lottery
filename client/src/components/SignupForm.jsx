import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl, InputLabel, Select } from "@mui/material";

function SignupForm() {
  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
        padding: "0.5rem",
        margin: "0.5rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="h4"
            component="h4"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            Create Account
          </Typography>
          <Grid item xs={12}>
            Profile picture
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <TextField label="First Name" variant="outlined" required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Last Name" variant="outlined" required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <FormControl required fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date of Birth" disableFuture />
            </LocalizationProvider>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField label="Gender" fullWidth required select>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            required
          />
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
        <Grid item xs={12}>
          <TextField
            label="Re-Enter password"
            variant="outlined"
            type="password"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained">Create Account</Button>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Link to="/Login" style={{ textDecoration: "none" }}>
            Already have an account ?
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default SignupForm;
