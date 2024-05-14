/* eslint-disable no-unused-vars */
'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import '@/app/dashboard.css'
import Header from '@/app/(app)/Header'

const AppLayout = ({ children, header }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <Navigation />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header user={user} />
                <main>{children}</main>
            </div>
        </div>
    )
}

export default AppLayout
