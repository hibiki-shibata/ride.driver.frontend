import Footer from '../../components/footer'
import Header from './header'
import ServiceDescription from './serviceDescriptions'

function Home() {
    return (
        <>
            <Header />
            <div className='bg-gray-900 text-white pt-20 pb-20 px-2 md:px-15'>
                <p className='mb-10 font-bold text-4xl'>~ 100% Free commision courier booking service ~</p>
                <button className="bg-sky-600 hover:bg-sky-700 place-content-center rounded-lg p-4 ml-7">
                    Explore Couriers nearby
                </button>
                <div>
                    <ServiceDescription />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;