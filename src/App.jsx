import './App.css'
import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './sections';
import Nav from './components/Nav';

function App() {

// STYLING QUICK-ACCESS

const padding = "sm:px-16 px-8 sm:py-24 py-12";
const paddingX = "sm:px-16 px-8";
const paddingY = "sm:py-24 py-12";
const paddingL = "sm:pl-16 pl-8";
const paddingR = "sm:pr-16 pr-8";
const paddingT = "sm:pt-24 pt-12";
const paddingB = "sm:pb-24 pb-12";
const infoText = "font-sans text-slate-500 text-lg leading-7";

// className={``}

  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='py-10'>
        <PopularProducts />
      </section>
      <section className='py-10'>
        <SuperQuality />
      </section>
      <section className='py-10'>
        <Services />
      </section>
      <section className='sm:px-16 px-8 sm:py-24 py-10'>
        <SpecialOffer />
      </section>
      <section className='sm:px-16 px-8 sm:py-24 py-12 bg-blue-100 opacity-90'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='bg-black padding-x patting-t pb-8'>
        <Footer />
      </section>
    </main>

  )
}

export default App
