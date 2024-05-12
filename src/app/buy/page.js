import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import Navbar from '@/app/Navbar'
export const metadata = {
    title: 'Omni Auctions Buy',
}

const Buy = () => {
    return (
        <>
            <TopBar />
            <div className="buy-container">
                <Navbar />
            </div>
            <Footer />
        </>
    )
}

export default Buy
