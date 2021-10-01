import { Box, makeStyles } from '@material-ui/core';
import NavBar from './Home/NarBar';
import Banner from './Home/Banner';
import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';
import Slide from './Home/Slide';
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
// import { getProducts as listProducts } from '../redux/actions/productActions';
import {dealData as products} from "../constant/data";

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = () => {
    const classes = useStyle();

    // const getProducts = useSelector(state => state.getProducts);
    // const { products, error } = getProducts;

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(listProducts())
    // }, [dispatch])

    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Treadmill'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Elliptical'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Dumbbells'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Exercise Bikes'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Exercise Plates'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Supplements'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Workout Plans'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Nutrition'
                    timer={false} 
                    multi={true} 
                />
            </Box>
        </>
    )
}

export default Home;