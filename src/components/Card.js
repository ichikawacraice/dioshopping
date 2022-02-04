import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';
import "./Card.css"

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
        textAlign: 'center',
        boxShadow: 'none',
    },
  }));

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                    <img width="200px" src={product.image} alt={product.name_product}/>
                    <Typography>
                        {children}
                    </Typography>
                    <Typography className='price'>
                        R$ {product.price.toFixed(2)}
                    </Typography>
                    </Grid>
                
                <Button className="btn-add"
                    variant="contained"
                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                >
                    Adicionar
                </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;
