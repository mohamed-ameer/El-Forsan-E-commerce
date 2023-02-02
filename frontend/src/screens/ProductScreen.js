import React, { useState, useEffect } from 'react'
import { Link ,useNavigate,useParams} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating/Rating'
import Loader from '../components/Loader/Loader'
import Message from '../components/Message/Message'
import { useDispatch,useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'


function ProductScreen() {
  const [qty, setQty] = useState(1)
  const navigate = useNavigate();
  const { id } = useParams();
  const [t,i18n]=useTranslation();
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails
  useEffect(()=>{
    dispatch(listProductDetails(id))
  },[dispatch,id])

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
    }
  return (
    <>
        { loading ?
            <Loader />
            : error 
                ? <Message variant='danger'>{error}</Message>
                :
                <div style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}> 
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb" style={{direction:'ltr',backgroundColor:'#ddd',padding:'10px 15px',marginBottom:'0px',borderRadius:'8px'}}>
                        <li className="breadcrumb-item "><Link to='/'>{i18n.language == 'ar'?'الصفحه الرئيسيه':'Home'}</Link></li>
                        <li className="breadcrumb-item active " aria-current="page">{i18n.language == 'ar'?product.name_ar:product.name}</li>
                    </ol>
                </nav> 
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>

                    <Col md={6}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{i18n.language == 'ar'?product.name_ar:product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item style={{direction:'ltr'}}>
                                <Rating value={product.rating} text={`${product.numReviews}`} color={'#f8e825'}/>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <strong>{i18n.language == 'ar'?'السعر :':'Price :'}</strong> {i18n.language == 'ar' ?`${product.price} جنيه`:`${product.price} EGP`}
                            </ListGroup.Item>
                            {i18n.language == 'ar' &&
                            <ListGroup.Item className={product.countInStock > 0 ? 'text-white bg-success' : 'text-white bg-danger'}>
                                <strong>الحاله :</strong> {product.countInStock > 0 ? 'متوفر' : 'غير متوفر حاليا'}
                            </ListGroup.Item>
                                }
                            {i18n.language == 'en' &&
                            <ListGroup.Item className={product.countInStock > 0 ? 'text-white bg-success' : 'text-white bg-danger'}>
                                <strong>Status:</strong> {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </ListGroup.Item>
                                }
                            <ListGroup.Item>
                                <strong>{i18n.language == 'ar'?'المكونات :':'Ingredient'}</strong> {i18n.language == 'ar'?product.description_ar:product.description}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>{i18n.language == 'ar'?'الوزن :':'Weight :'}</strong> {product.weight} {i18n.language == 'ar'?'كجم':'kg'}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>{i18n.language == 'ar'?'الوزن الصافي :':'Package Weight :'}</strong> {product.package_weight} {i18n.language == 'ar'?'جم':'g'}
                            </ListGroup.Item>
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row className='align-items-center'>
                                        <Col><strong>{i18n.language == 'ar'?'الكميه :':'Quantity:'}</strong></Col>
                                        <Col className='my-1'>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {

                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }

                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCartHandler}
                                        className='btn btn-custom-color btn-lg w-100'
                                        disabled={product.countInStock == 0}
                                        type='button'>
                                        {i18n.language == 'ar'?'أضف إلي السله':'Add to Cart'}
                                    </Button>
                                </ListGroup.Item>  

                        </ListGroup>
                    </Col>
                </Row>
                </div>
        }
    </>
  )
}

export default ProductScreen
