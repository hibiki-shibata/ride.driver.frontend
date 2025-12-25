import Footer from '../../components/footer'
import Header from '../../components/headers/home'
import ServiceDescription from './serviceDescriptions'

function Home() {
    return (
        <>
            <Header />
            {/* <div className='bg-sky-900 text-white pt-20 pb-20 px-2 md:px-15'> */}
            <div className='bg-gradient-to-b from-gray-900 to-blue-950 text-white pt-20 pb-20 px-2 md:px-15'>
                <p className='mb-10 text-4xl'>📍100% <span className="font-bold">Commision Free</span> courier booking platform</p>
                <a href="/ride.driver.frontend/explore/">
                    <button className="bg-sky-600 hover:bg-sky-700 font-bold rounded-lg p-4 ml-7">
                        Explore Couriers nearby
                    </button>
                </a>
                <div>
                    <ServiceDescription />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;