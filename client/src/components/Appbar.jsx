import * as React from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import CasinoIcon from "@mui/icons-material/Casino";

const pages = ["Products", "FAQ's"];

export default function Appbar() {
  const navigate = useNavigate();

  const handleCloseNavMenu = () => {
    navigate("/FAQ");
  };

  const handleLoginBtn = () => {
    navigate("/Login");
  };

  const handleRegisterBtn = () => {
    navigate("/Register");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CasinoIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOTTERY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{ flexGrow: 0, display: "flex", flex: "colummn", columnGap: 1 }}
          >
            <Tooltip title="Login">
              <Button
                variant="contained"
                color="secondary"
                margin={1}
                onClick={handleLoginBtn}
              >
                Login
              </Button>
            </Tooltip>
            <Tooltip title="Register">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleRegisterBtn}
              >
                Register
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
