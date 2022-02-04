import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button, Container } from "@material-ui/core/";
import Cart from "./Cart";
import './Header.css';



const Header = () => {
  return (
    <Grid className="header">
      <Container className="nav">
        <Typography variant="h3">
          <img src="/images/futfanatics-com-br.png" alt="fut fanatics logo"/>
        </Typography>
        <Link to="/">
          <Button className="link" >Home</Button>
        </Link>
        <Link to="/contato">
          <Button className="link">Contato</Button>
        </Link>
        <Cart />
      </Container>
    </Grid>
  );
};

export default Header;
