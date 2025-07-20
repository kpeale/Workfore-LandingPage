'use client';
import ReviewCards from './ReviewCards';

import SectionHeading from '@/components/Helper/SectionHeading';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Review = () => {
  return (
    <div className='pt-16 pb-16'>
      <SectionHeading
        heading='Testimonials From Customers'
        subHeading='Read the testimonials from clients we have worked with '
      />

      <div className='w-[80%] mx-auto mt-16'>
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ReviewCards
            image='/images/u1.png'
            title='Great Quality '
            username='Jessica Doe '
            userRole='App Developer'
          />
          <ReviewCards
            image='/images/u2.png'
            title='Awesome work! '
            username='Jason Doe '
            userRole='Web Developer'
          />
          <ReviewCards
            image='/images/u3.png'
            title='Best work! I loved the quality '
            username='Ikechukwu Martins '
            userRole='Data Analyst'
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
