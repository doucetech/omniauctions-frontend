import '@/app/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
    title: 'Omni Auctions',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="app">{children}</body>
        </html>
    )
}

export default RootLayout
