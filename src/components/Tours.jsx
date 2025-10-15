import React, { useState } from 'react';
import styled from 'styled-components';
import { FaClock, FaUsers, FaStar, FaCheck } from 'react-icons/fa';

const ToursSection = styled.section`
  padding: 5rem 2rem;
  background: white;
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
  color: #1e3c72;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' : 'transparent'};
  color: ${props => props.active ? 'white' : '#1e3c72'};
  border: 2px solid #1e3c72;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    transform: translateY(-2px);
  }
`;

const ToursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TourCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const TourImage = styled.div`
  height: 200px;
  background: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const TourBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.type === 'popular' ? '#ffd700' : props.type === 'new' ? '#28a745' : '#dc3545'};
  color: ${props => props.type === 'popular' ? '#1e3c72' : 'white'};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const TourContent = styled.div`
  padding: 1.5rem;
`;

const TourTitle = styled.h3`
  font-size: 1.3rem;
  color: #1e3c72;
  margin-bottom: 0.5rem;
`;

const TourDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TourFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #666;
  font-size: 0.9rem;
`;

const TourHighlights = styled.div`
  margin-bottom: 1.5rem;
`;

const HighlightTitle = styled.h4`
  font-size: 1rem;
  color: #1e3c72;
  margin-bottom: 0.5rem;
`;

const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;

  svg {
    color: #28a745;
  }
`;

const TourFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e3c72;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffd700;
`;

const BookButton = styled.button`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(30, 60, 114, 0.3);
  }
`;

const Tours = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const tours = [
    {
      id: 1,
      title: "Classic Northern Ethiopia",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Explore the historical treasures of Northern Ethiopia including Lalibela, Gondar, and Aksum.",
      duration: "10 days",
      groupSize: "2-12 people",
      price: "$1,200",
      rating: 4.9,
      category: "cultural",
      badge: "popular",
      highlights: [
        "Lalibela Rock Churches",
        "Gondar Castles",
        "Aksum Obelisks",
        "Local guide included",
        "All meals provided",
      ],
    },
    {
      id: 2,
      title: "Simien Mountains Trek",
      image:
        "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Trek through the stunning Simien Mountains and encounter unique wildlife.",
      duration: "7 days",
      groupSize: "4-8 people",
      price: "$850",
      rating: 4.8,
      category: "adventure",
      badge: "new",
      highlights: [
        "Gelada baboon viewing",
        "Mountain trekking",
        "Camping experience",
        "Professional guide",
        "Equipment provided",
      ],
    },
    {
      id: 3,
      title: "Danakil Depression Adventure",
      image: "https://waltainfo.com/wp-content/uploads/2023/10/Dal9ol.webp",
      description:
        "Experience the otherworldly landscapes of the Danakil Depression.",
      duration: "4 days",
      groupSize: "6-15 people",
      price: "$650",
      rating: 4.7,
      category: "adventure",
      badge: "limited",
      highlights: [
        "Sulfur springs",
        "Salt flats",
        "Active volcanoes",
        "4x4 transportation",
        "Safety equipment",
      ],
    },
    {
      id: 4,
      title: "Ethiopian Coffee Tour",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Discover the birthplace of coffee and learn about traditional coffee ceremonies.",
      duration: "5 days",
      groupSize: "2-10 people",
      price: "$480",
      rating: 4.6,
      category: "cultural",
      badge: "popular",
      highlights: [
        "Coffee farm visits",
        "Traditional ceremonies",
        "Local villages",
        "Coffee tasting",
        "Cultural immersion",
      ],
    },
  ];

  const filteredTours = activeFilter === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === activeFilter);

  return (
    <ToursSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Our Tour Packages</SectionTitle>
          <SectionSubtitle>
            Choose from our carefully curated tour packages designed to showcase the best of Ethiopia
          </SectionSubtitle>
        </SectionHeader>

        <FilterButtons>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            All Tours
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'cultural'} 
            onClick={() => setActiveFilter('cultural')}
          >
            Cultural
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'adventure'} 
            onClick={() => setActiveFilter('adventure')}
          >
            Adventure
          </FilterButton>
        </FilterButtons>

        <ToursGrid>
          {filteredTours.map((tour) => (
            <TourCard key={tour.id}>
              <TourImage image={tour.image}>
                <TourBadge type={tour.badge}>
                  {tour.badge === 'popular' ? 'Popular' : 
                   tour.badge === 'new' ? 'New' : 'Limited'}
                </TourBadge>
              </TourImage>
              
              <TourContent>
                <TourTitle>{tour.title}</TourTitle>
                <TourDescription>{tour.description}</TourDescription>
                
                <TourFeatures>
                  <Feature>
                    <FaClock />
                    <span>{tour.duration}</span>
                  </Feature>
                  <Feature>
                    <FaUsers />
                    <span>{tour.groupSize}</span>
                  </Feature>
                  <Feature>
                    <FaStar />
                    <span>{tour.rating}</span>
                  </Feature>
                </TourFeatures>

                <TourHighlights>
                  <HighlightTitle>Highlights:</HighlightTitle>
                  <HighlightList>
                    {tour.highlights.map((highlight, index) => (
                      <HighlightItem key={index}>
                        <FaCheck />
                        <span>{highlight}</span>
                      </HighlightItem>
                    ))}
                  </HighlightList>
                </TourHighlights>

                <TourFooter>
                  <Price>From {tour.price}</Price>
                  <Rating>
                    <FaStar />
                    <span>{tour.rating}</span>
                  </Rating>
                </TourFooter>

                <BookButton>Book Now</BookButton>
              </TourContent>
            </TourCard>
          ))}
        </ToursGrid>
      </Container>
    </ToursSection>
  );
};

export default Tours; 