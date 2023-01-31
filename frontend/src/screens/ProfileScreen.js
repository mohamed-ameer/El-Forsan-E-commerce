import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader'
import Message from '../components/Message/Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'


function ProfileScreen() {
    const [t,i18n]=useTranslation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile



    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user || !user.name || success || userInfo._id !== user._id) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch,navigate, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                'id': user._id,
                'name': name,
                'email': email,
                'password': password
            }))
            setMessage('')
        }

    }
    return (
        <>
    {userInfo &&
        <Row className='gy-4' style={i18n.language == 'ar'?{flexDirection:'row-reverse'}:{flexDirection:'row'}}>
            <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb" style={{direction:'ltr',backgroundColor:'#ddd',padding:'10px 15px',marginBottom:'0px',borderRadius:'8px'}}>
                <li className="breadcrumb-item "><Link to='/'>{i18n.language == 'ar'?'الصفحه الرئيسيه':'Home'}</Link></li>  
                <li className="breadcrumb-item active " aria-current="page">{i18n.language == 'ar'?'بيانات المستخدم':'Profile'}</li>
                <li className="breadcrumb-item active " aria-current="page">{userInfo.name}</li>
            </ol>
            </nav> 
            <Col md={3}>
                <div className="alert alert-success" style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}><h2>{i18n.language == 'ar'?'بيانات المستخدم':'User Profile'}</h2></div>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary' className='w-100 mt-3'>
                        Update
                </Button>

                </Form>
            </Col>

            <Col md={9}>
            <div className="alert alert-success" style={i18n.language == 'ar'?{direction:'rtl'}:{direction:'ltr'}}><h2>{i18n.language == 'ar'?'طلباتي':'My Orders'}</h2></div>
            </Col>
        </Row>
    }
    </>
    )
}

export default ProfileScreen