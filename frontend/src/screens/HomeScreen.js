import React,{useState,useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import Product from '../components/Product/Product'
import Loader from '../components/Loader/Loader'
import Message from '../components/Message/Message'
import Slider from '../components/Slider/Slider'
import { useDispatch,useSelector } from 'react-redux';
import {listProducts} from '../actions/productActions'
function HomeScreen() {
    const [t,i18n]=useTranslation();
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const {error,products,loading} = productList
    useEffect(()=>{
        dispatch(listProducts())
    },[])

    return (
    <>
        <div className='container pb-5 pt-0' style={{maxWidth:"800px"}}>
            <Slider/>
        </div>
        {loading ? <Loader />
            :error ? <Message variant='danger'>{error}</Message>
                :
                <Row style={i18n.language == 'ar'?{flexDirection:'row-reverse'}:{flexDirection:'row'}}>
                {products.map(product => (
                    <Col key={product._id} sm={6} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
                </Row>
        }
    </>
  )
}

export default HomeScreen
