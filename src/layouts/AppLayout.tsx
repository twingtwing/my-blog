import { Outlet, ScrollRestoration } from 'react-router';

import Header from '../components/Header'

export default function AppLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <ScrollRestoration />
        </>
    )
}
