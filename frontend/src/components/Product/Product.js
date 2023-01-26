import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../Rating/Rating'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

function Product({ product }) {
    const [t,i18n]=useTranslation();
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div" style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                        <strong>{i18n.language == 'ar' ?product.name_ar:product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews}`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h3" style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                {i18n.language == 'ar' ?`${product.price} جنيه`:`${product.price} EGP`}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
