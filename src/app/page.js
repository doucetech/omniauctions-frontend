import Navbar from '@/app/Navbar'
import Slider from '@/components/Slider'
import Trusted from '@/components/Trusted'
import AuctionTabs from '@/components/AuctionTabs'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
export const metadata = {
    title: 'Omni Auctions',
}

const Home = () => {
    return (
        <>
            <TopBar />
            <div className="home-container">
                <Navbar />
                <Slider />
                <Trusted />
                <AuctionTabs />
            </div>
            <Footer />
        </>
    )
}

export default Home
