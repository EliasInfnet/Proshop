import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import FormContainter from '../components/FormContainter'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import { cart_save_payment_method } from '../reducers/cartReducers/cartSlice'

const PaymentScreen = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Paypal')

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(cart_save_payment_method(paymentMethod))
    navigate('/placeorder')
  }

  return (
    <FormContainter>
      <CheckoutSteps step1 step2 step3 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal' name='paymentMethod'
              value='Paypal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check>
            {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe' name='paymentMethod'
              value='Stripe'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check> */}
          </Col>
        </Form.Group>


        <Button className='mt-3' variant='primary' type='submit'>Continue</Button>
      </Form>
    </FormContainter>
  )
}

export default PaymentScreen