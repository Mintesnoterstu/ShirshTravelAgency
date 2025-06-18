import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

const TestimonialsContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  opacity: ${props => props.active ? 1 : 0};
  transform: ${props => props.active ? 'scale(1)' : 'scale(0.9)'};
  position: ${props => props.active ? 'relative' : 'absolute'};
  top: 0;
  left: 0;
  right: 0;
  z-index: ${props => props.active ? 2 : 1};

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const QuoteIcon = styled.div`
  font-size: 3rem;
  color: #ffd700;
  margin-bottom: 1rem;
  opacity: 0.7;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const CustomerName = styled.h4`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
`;

const CustomerLocation = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin: 0;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 0.5rem;
`;

const Star = styled(FaStar)`
  color: #ffd700;
  font-size: 1.2rem;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
`;

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#ffd700' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#ffd700' : 'rgba(255, 255, 255, 0.5)'};
  }
`;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Our trip to Lalibela was absolutely incredible! The rock churches were breathtaking and our guide was incredibly knowledgeable. The Ethiopian Travel Agency made everything seamless from start to finish.",
      name: "Sarah Johnson",
      location: "United States",
      rating: 5
    },
    {
      id: 2,
      text: "The Simien Mountains trek exceeded all expectations. The landscapes were stunning and we saw so much wildlife. The camping experience was comfortable and the guides were professional and friendly.",
      name: "Michael Chen",
      location: "Canada",
      rating: 5
    },
    {
      id: 3,
      text: "As a solo traveler, I was initially nervous about visiting Ethiopia, but this agency made me feel safe and welcome throughout my entire journey. The cultural experiences were authentic and unforgettable.",
      name: "Emma Rodriguez",
      location: "Spain",
      rating: 5
    },
    {
      id: 4,
      text: "The Danakil Depression was like visiting another planet! The colors, the heat, the sulfur springs - everything was incredible. Our safety was always the priority and the experience was well-organized.",
      name: "David Thompson",
      location: "Australia",
      rating: 5
    },
    {
      id: 5,
      text: "We learned so much about Ethiopian coffee culture and history. The traditional ceremonies were beautiful and the local people were so welcoming. This tour gave us a deep appreciation for Ethiopian culture.",
      name: "Lisa Wang",
      location: "Singapore",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <TestimonialsSection>
      <Container>
        <SectionHeader>
          <SectionTitle>What Our Travelers Say</SectionTitle>
          <SectionSubtitle>
            Hear from our satisfied customers about their unforgettable experiences in Ethiopia
          </SectionSubtitle>
        </SectionHeader>

        <TestimonialsContainer>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} active={index === currentIndex}>
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              
              <TestimonialText>
                "{testimonial.text}"
              </TestimonialText>
              
              <CustomerInfo>
                <CustomerName>{testimonial.name}</CustomerName>
                <CustomerLocation>{testimonial.location}</CustomerLocation>
                <Rating>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} />
                  ))}
                </Rating>
              </CustomerInfo>
            </TestimonialCard>
          ))}
        </TestimonialsContainer>

        <NavigationButtons>
          <NavButton onClick={prevTestimonial}>
            <FaChevronLeft />
          </NavButton>
          <NavButton onClick={nextTestimonial}>
            <FaChevronRight />
          </NavButton>
        </NavigationButtons>

        <DotsContainer>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </DotsContainer>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 