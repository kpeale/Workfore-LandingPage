import Hero from './Hero/Hero';
import Category from './Category/Category';
import Features from './Features/Features';
import TopCompany from './TopCompany/TopCompany';
import Info from './Info/Info';
import Price from './Price/Price';
import Review from './Review/Review';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Category />
      <Features />
      <TopCompany />
      <Info />
      <Price />
      <Review />
    </div>
  );
};

export default Home;
