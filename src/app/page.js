import LoginLinks from '@/app/LoginLinks'
import Navbar from './Navbar'
import Slider from './Slider'
export const metadata = {
    title: 'Omni Auctions',
}

const Home = () => {
    return (
        <>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <LoginLinks />
            </div>
             <div className="home-container">
                <Navbar />
                <Slider/>
           </div>
        </>
    )
}

export default Home
