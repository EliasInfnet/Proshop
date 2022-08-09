import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainter from '../components/FormContainter'
import { listUsers } from '../actions/userActions'

const UserListScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userList = useSelector(state => state.userList)
  const { users, loading, error } = userList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    }else{
      navigate('/login')
    }

  }, [dispatch, navigate, userInfo])

  const deleteHandler = () => {
    console.log('delete')
  }

  return (
    <>
      <h1>Users</h1>
      {loading ? <Loader /> : error ? <Message variant>{error}</Message> : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                <td>{user.isAdmin ? <i className='fas fa-check' style={{ color: 'green' }} /> : (<i className='fas fa-times' style={{ color: 'red' }} />)}</td>
                <td>
                  <LinkContainer to={`/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit' />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash' />
                  </Button>

                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default UserListScreen