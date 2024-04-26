import { Card } from '../app/shared/models/card';
import { FeatureCard } from '../app/shared/models/feature-card';
import { Product } from '../app/shared/models/product';
import { StatsCard } from '../app/shared/models/stats-card';
import { Testimonial } from '../app/shared/models/testimonial';

export const environmentDefault = {
  sectionProps: {
    hero: {
      bgImgSrc: '/assets/images/banner-model-1.png',
      bgLayout: 'background' as 'column' | 'background',
      textColor: 'white',
      title: `Discover the Latest Fashion Trends for You`,
      subtitle: `Explore our collection of stylish and trendy clothing items that will make you stand out from the crowd.`,
    },
    feature: {
      sideImgSrc: '/assets/images/feature-section/banner.jpg',
      title: `Discover our wide range of sustainable gardening products and tips`,
      body: `Transform your garden into an eco-friendly paradise with our sustainable
      gardening products and expert tips. Learn more or make a purchase today!`,
      cards: [
        {
          title: `Explore Nature`,
          body: `Find everything you need to create a beautiful and sustainable
          garden.`,
        },
        {
          title: `Explore Nature`,
          body: `Find everything you need to create a beautiful and sustainable
          garden.`,
        },
      ] as Card[],
    },
    featureList: {
      title: `Discover the Benefits of Sustainable Gardening`,
      subtitle: `Nature-friendly`,
      body: `Sustainable gardening offers numerous benefits for both the environment
      and your health. By using eco-friendly gardening practices, you can
      reduce your carbon footprint, conserve water, and create a thriving
      ecosystem in your own backyard. Additionally, gardening is a great way
      to stay active and improve mental well-being.`,
      cards: [
        {
          title: 'Environmental Impact',
          body: 'Reduce your carbon footprint and conserve resources.',
          imgSrc: '/assets/images/feature-list-section/card-1.jpg',
        },
        {
          title: 'Health Benefits',
          body: 'Stay active and improve mental well-being.',
          imgSrc: '/assets/images/feature-list-section/card-2.jpg',
        },
        {
          title: 'Cost Savings',
          body: 'Save money on groceries by growing your own food.',
          imgSrc: '/assets/images/feature-list-section/card-3.jpg',
        },
      ] as Partial<FeatureCard>[],
    },
    benefits: {
      sideImgSrc: '/assets/images/benefits-section/banner.jpg',
      title: `Discover the Benefits of Sustainable Gardening`,
      subtitle: `Eco-friendly`,
      body: `Using sustainable gardening products and techniques not only helps
      protect the environment, but also promotes healthier plants and a more
      nature-connected lifestyle. By making conscious choices in your garden,
      you can create a thriving ecosystem and contribute to a greener future.`,
      cards: [
        {
          title: 'Healthier Plants',
          body: 'Our sustainable gardening products provide essential nutrients and support natural pest control.',
        },
        {
          title: 'Greener Future',
          body: 'By choosing sustainable gardening practices, you contribute to a healthier planet for future generations.',
        },
      ] as Card[],
    },
    stats: {
      title: `Discover the Positive Impact of Sustainable Gardening`,
      body: `Sustainable gardening not only benefits the environment but also
      strengthens communities. By adopting eco-friendly practices and using
      our products, you can contribute to a healthier planet and create a more
      nature-connected lifestyle.`,
      cards: [
        {
          title: 'Healthier Gardens, Happier Earth',
          body: 'Reduction in chemical usage for a greener environment',
          value: '30%',
        },
        {
          title: 'Thriving Ecosystems, Stronger Communities',
          body: 'Increase in local biodiversity for a sustainable future',
          value: '30%',
        },
        {
          title: 'Healthy Harvest, Happy People',
          body: 'Higher yield of organic produce for healthier living',
          value: '30%',
        },
      ] as Partial<StatsCard>[],
    },
    testimonials: {
      bannerImgPath: '/assets/images/testimonials-section/banner.jpg',
      cards: [
        {
          review: 5,
          body: 'I absolutely love the sustainable gardening products! They have transformed my garden into a thriving oasis. Highly recommended!',
          userName: 'John Smith',
          userOccupation: 'Gardening Enthusiast, Green Gardens',
        },
        {
          review: 4,
          body: `I've been using these gardening tools for a few months now, and I'm quite pleased with the results. They're sturdy and well-designed, making my gardening tasks much more enjoyable.`,
          userName: 'Alicia Chang',
          userOccupation: 'Botanist, Chang Botanicals',
        },
        {
          review: 5,
          body: `These gardening products have made such a difference in my life! Not only are they eco-friendly, but they're also incredibly effective. I can't imagine gardening without them now.`,
          userName: 'Sarah Thompson',
          userOccupation: 'Environmental Scientist',
        },
        {
          review: 4.5,
          body: `The customer service provided by this company is outstanding. They were incredibly helpful and responsive throughout the entire process. I'm very satisfied!`,
          userName: 'Emily Davis',
          userOccupation: 'Business Owner, Davis Designs',
        },
      ] as Partial<Testimonial>[],
    },
    cta: {
      title: `Start Your Gardening Journey`,
      body: `Discover our wide range of sustainable gardening products and get expert
      tips to create your own nature-connected oasis.`,
    },
    newsletter: {
      bgImgSrc: '/assets/images/newsletter-bg.jpg',
      title: `Get Gardening Tips and Offers`,
      body: `Subscribe to our newsletter for the latest gardening tips, updates, and
      exclusive offers.`,
    },
    faq: {
      title: `Frequently Asked Questions`,
      body: `Find answers to common questions about sustainable gardening and using our
      products effectively.`,
      bottomCard: {
        title: `Still have questions?`,
        body: `Contact us for further assistance.`,
      },
      cards: [
        {
          title: 'How do I start?',
          body: 'To start your sustainable gardening journey, assess your available space, research suitable plants, and create a plan for maintenance.',
        },
        {
          title: 'What tools do I need?',
          body: `Basic tools for sustainable gardening include a trowel, pruners, watering can, and compost bin. Additional tools may be required based on your specific needs.`,
        },
        {
          title: `How often should I water?`,
          body: `The frequency of watering depends on various factors such as plant type, weather conditions, and soil moisture levels. Generally, aim to keep the soil evenly moist, but not waterlogged.`,
        },
        {
          title: `How do I prevent pests?`,
          body: `Implementing natural pest control methods like companion planting, using organic pesticides, and maintaining a healthy garden ecosystem can help prevent pests.`,
        },
        {
          title: `How do I compost?`,
          body: `Composting involves collecting organic waste materials like kitchen scraps, yard trimmings, and leaves in a compost bin. Regularly turn the compost to facilitate decomposition.`,
        },
      ] as Card[],
    },
  },
  products: [
    {
      id: '1',
      name: `Nome do produto`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.`,
      reviews: [5, 4, 5, 5],
      price: 99.99,
    },
  ] as Product[],
};
