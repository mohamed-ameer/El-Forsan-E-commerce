import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
// import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen() {
    const [t,i18n]=useTranslation();
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const [phone, setPhone] = useState(shippingAddress.phone)
    const [email, setEmail] = useState(shippingAddress.email)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country,phone,email }))
        navigate('/payment')
    }

    return (
        <FormContainer>
            {/* <CheckoutSteps step1 step2 /> */}
            <div className="alert alert-success" style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
            <h1>{i18n.language == 'ar'?'الشحن':'Shipping'}</h1>
            </div>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                    <Form.Label>{i18n.language == 'ar'?'العنوان':'Address'}</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder={i18n.language == 'ar'?'ادخل العنوان':'Enter address'}
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                    <Form.Label>{i18n.language == 'ar'?'المدينه':'City'}</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder={i18n.language == 'ar'?'ادخل اسم المدينه':'Enter city'}
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                    <Form.Label>{i18n.language == 'ar'?'الرقم البريدي':'Postal Code'}</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder={i18n.language == 'ar'?'ادخل الرمز البريدي لمدينتك':'Enter postal code'}
                        value={postalCode ? postalCode : ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                    <Form.Label>{i18n.language == 'ar'?'البلد':'Country'}</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder={i18n.language == 'ar'?'ادخل اسم البلد':'Enter country'}
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='phone' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                    <Form.Label>{i18n.language == 'ar'?'رقم الهاتف':'Phone Number'}</Form.Label>
                    <Form.Control
                        required
                        type='tel'
                        placeholder={i18n.language == 'ar'?'ادخل رقم الهاتف':'Enter phone number'}
                        value={phone ? phone : ''}
                        onChange={(e) => setPhone(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email' style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}>
                    <Form.Label>{i18n.language == 'ar'?'البريد الالكتروني':'Email'}</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder={i18n.language == 'ar'?'ادخل البريد الالكتروني':'Enter email'}
                        value={email ? email : ''}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='w-100 mt-3'>
                {i18n.language == 'ar'?'التالي':'Continue'}
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
