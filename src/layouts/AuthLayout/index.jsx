import React from 'react'
import { Route } from 'react-router-dom'
import { Header } from '../../components/Header'

export const AuthLayout = ({ component: Component }) => {
    return (
        <Route>
            <Header />
            <Component />
        </Route>
    )
}