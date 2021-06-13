import React from 'react'
import { Route } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const MainLayout = ({ component: Component }) => {
    return (
        <Route>
            <Header />
            <Component />
            <Footer />
        </Route>
    )
}