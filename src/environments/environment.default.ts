import { Card } from '../app/models/card';
import { FeatureCard } from '../app/models/feature-card';
import { StatsCard } from '../app/models/stats-card';
import { Testimonial } from '../app/models/testimonial';
import { BenefitsSectionProps } from '../app/sections/benefits-section/benefits-section.component';
import { CTASectionProps } from '../app/sections/cta-section/cta-section.component';
import { FAQSectionProps } from '../app/sections/faq-section/faq-section.component';
import { FeatureSectionProps } from '../app/sections/feature-section/feature-section.component';

export const environmentDefault = {
  customProps: {
    featureSections: [
      {
        sideImgSrc: '/assets/images/feature-section/banner.jpg',
        subtitle: `Convenient`,
        title: `Reliable Dog Walking Service You Can Trust`,
        body: `Our dog walking service offers the convenience and reliability you need. With our experienced and trustworthy team, you can rest assured that your furry friend is in good hands. We prioritize the safety and well-being of your pet, providing them with the exercise and attention they deserve.`,
        cards: [] as Card[],
      },
      {
        sideImgSrc: '/assets/images/feature-section/banner.jpg',
        subtitle: `Comforting`,
        title: `A Home Away from Home for Your Pet`,
        body: `At our pet boarding facility, we prioritize creating a homely and safe environment for your furry friends. With our experienced staff and comfortable accommodations, you can trust that your pet will be well taken care of while you're away.`,
        cards: [
          {
            title: `Safe Haven`,
            body: `Our pet boarding facility offers a homely and safe environment for your pets to relax and enjoy.`,
          },
          {
            title: `Peaceful Retreat`,
            body: `With spacious play areas and cozy sleeping quarters, your pet will feel right at home.`,
          },
        ] as Card[],
        reversed: true,
      },
      {
        sideImgSrc: '/assets/images/feature-section/banner.jpg',
        subtitle: `Effective`,
        title: `Structured Dog Training for Better Behavior`,
        body: `Our dog training services offer a structured approach to help your furry friend develop better behavior. With our experienced trainers, your dog will learn essential commands and socialize with other dogs in a safe and controlled environment. Whether you have a new puppy or an older dog, our training programs are tailored to meet their specific needs and address any behavioral issues they may have. Invest in your dog's future and enjoy a happier, well-behaved companion.`,
        cards: [] as Card[],
      },
    ] as FeatureSectionProps[],
    benefitsSections: [
      {
        reversed: true,
        sideImgSrc: '/assets/images/feature-section/banner.jpg',
        subtitle: `Caring`,
        title: `Providing Top-Quality Pet Care Services for Your Beloved Pets`,
        body: `At our pet care center, we prioritize the health, safety, and happiness of your pets. Our team of experienced professionals is dedicated to providing exceptional care and attention to your furry friends. Whether it's walking, boarding, or training, we offer a range of services tailored to meet the unique needs of each pet.`,
        cards: [
          {
            title: `100%`,
            body: `Health and Wellness Services for Your Pets`,
          },
          {
            title: `100%`,
            body: `Safe and Secure Environment for Your Pets`,
          },
        ] as Card[],
      },
    ] as BenefitsSectionProps[],
    ctaSection: {
      title: `Professional Pet Care Services Available`,
      body: `Book a service or contact us for more information`,
      actionButtons: {
        primaryButton: {
          label: 'Book',
          link: '#',
        },
        secondaryButton: {
          label: 'Contact Us',
          link: '#',
        },
      },
    } as CTASectionProps,
    testimonialSection: {
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
    faqSection: {
      title: `Frequently Asked Questions`,
      body: `Find answers to common questions about our pet care services.`,
      bottomCard: {
        title: `Still have questions?`,
        body: `Contact us for more information.`,
      },
      actionButton: {
        label: `Contact`,
        link: `#`,
      },
      cards: [
        {
          title: 'How do I book services?',
          body: 'Booking our pet care services is easy. Simply visit our website or give us a call to schedule an appointment.',
        },
        {
          title: 'What are your rates?',
          body: `Our rates vary depending on the type of service you require. Please contact us directly for more information.`,
        },
        {
          title: `Do you offer boarding?`,
          body: `Yes, we offer boarding services for your pets. They will be well taken care of in a comfortable and safe environment.`,
        },
        {
          title: `Can you train my pet?`,
          body: `Absolutely! We have experienced trainers who can help with basic obedience training and behavioral issues.`,
        },
        {
          title: `Is your staff trained?`,
          body: `Yes, our staff is trained to handle pets of all sizes and temperaments. They are passionate about providing the best care possible.`,
        },
      ] as Card[],
    } as FAQSectionProps,
  },
  sectionProps: {
    hero: {
      bgImgSrc: '/assets/images/hero-alt2.png',
      bgLayout: 'background' as 'column' | 'background',
      textColor: undefined,
      title: `Quality Pet Care Services for Your Beloved Companions`,
      subtitle: `Welcome to our pet care center, where we offer a range of services including walking, boarding, and training.`,
    },
    feature: {
      reversed: false,
      sideImgSrc: '/assets/images/feature-section/banner.jpg',
      subtitle: `Convenient`,
      title: `Reliable Dog Walking Service You Can Trust`,
      body: `Our dog walking service offers the convenience and reliability you need. With our experienced and trustworthy team, you can rest assured that your furry friend is in good hands. We prioritize the safety and well-being of your pet, providing them with the exercise and attention they deserve.`,
      cards: [] as Card[],
    } as FeatureSectionProps,
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
};
