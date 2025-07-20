import SectionHeading from '@/components/Helper/SectionHeading';
import JobCards from './JobCards';
const jobs = [
  {
    id: 1,
    image: '/images/j1.png',
    title: 'Software Engineer',
    location: 'London, UK',
    jobType: 'Full Time',
    urgency: 'Urgent',
  },
  {
    id: 2,
    image: '/images/j2.png',
    title: 'Recruiting Coordinator',
    location: 'Manchester, UK',
    jobType: 'Part Time',
    urgency: 'Urgent',
  },
  {
    id: 3,
    image: '/images/j3.png',
    title: 'Product Manager, Studio',
    location: 'Birmingham, UK',
    jobType: 'Contract',
    urgency: 'Urgent',
  },
  {
    id: 4,
    image: '/images/j4.png',
    title: 'Senior Product Designer',
    location: 'Bristol, UK',
    jobType: 'Full Time',
    urgency: 'Urgent',
  },
  {
    id: 5,
    image: '/images/j5.png',
    title: 'Product Manager, Risk',
    location: 'Edinburgh, UK',
    jobType: 'Contract',
    urgency: 'Private',
  },
  {
    id: 6,
    image: '/images/j6.png',
    title: 'Technical Architect',
    location: 'Leeds, UK',
    jobType: 'Full Time',
    urgency: 'Private',
  },
  {
    id: 7,
    image: '/images/j7.png',
    title: 'Web Developer',
    location: 'Brighton, UK',
    jobType: 'Part Time',
    urgency: 'Urgent',
  },
  {
    id: 8,
    image: '/images/j8.png',
    title: 'Senior Product Designer',
    location: 'Glasgow, UK',
    jobType: 'Contract',
    urgency: 'Private',
  },
  {
    id: 9,
    image: '/images/j9.png',
    title: 'Senior BI Analyst',
    location: 'Sheffield, UK',
    jobType: 'Full Time',
    urgency: 'Private',
  },
];

const Features = () => {
  return (
    <div className='pt-16 pb-16'>
      <SectionHeading
        heading='Featured Jobs'
        subHeading='Know your worth and find the job that qualify your life'
      />
      <div className='w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center'>
        {jobs.map((job ) => (
          <div key={job.id} >
            <JobCards job={job} />
          </div>
        ))}
      </div>
      <div className='mt-10 text-center'>
        <button className='px-10 py-4 bg-blue-700 text-white cursor-pointer rounded-lg hover:bg-blue-800 transition-all duration-200'>
          Load More Listings
        </button>
      </div>
    </div>
  );
};

export default Features;