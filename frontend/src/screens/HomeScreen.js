import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import Product from '../components/Product/Product'
import Slider from '../components/Slider/Slider'
function HomeScreen() {
    const [t,i18n]=useTranslation();
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const url = 'http://127.0.0.1:8000/api/products/'
        axios.get(url).then((response)=>{
            setProducts(response.data)
        })
    },[])
  return (
    <>
        <div className='container pb-5 pt-0' style={{maxWidth:"800px"}}>
            <Slider/>
        </div>
        <Row style={i18n.language == 'ar'?{flexDirection:'row-reverse'}:{flexDirection:'row'}}>
        {products.map(product => (
            <Col key={product._id} sm={6} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
        </Row>
    </>
  )
}

export default HomeScreen
