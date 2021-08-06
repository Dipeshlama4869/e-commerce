import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyle from './styles';

const products = [
    { id:1, name: 'Shoes', description: 'Running shoes.', price: '$5', image:'https://d1af89beukha9h.cloudfront.net/wp-content/uploads/2018/10/shoe-companies.jpg'},
    { id:2, name: 'Macbook', description: 'lighter than gaming laptop.', price: '$10', image:'https://www.gamespot.com/a/uploads/original/1591/15918215/3694856-p5%20blu-ray%20product%20spread%20%281%29.jpg'},
];
    


const Products = () => {
    const mergeClasses = useStyle();
    return(
        <main className={mergeClasses.content}>
            <div className={mergeClasses.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )

}
 export default Products;