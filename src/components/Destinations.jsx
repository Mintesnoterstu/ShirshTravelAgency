import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaUsers } from 'react-icons/fa';

const DestinationsSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
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

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DestinationCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.div`
  height: 250px;
  background: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CardFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #1e3c72;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffd700;
`;

const ViewButton = styled.button`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(30, 60, 114, 0.3);
  }
`;

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: "Lalibela Rock Churches",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A UNESCO World Heritage site featuring 11 medieval monolithic cave churches carved from rock, representing one of the world's most remarkable architectural achievements.",
      location: "Amhara Region",
      bestTime: "October to May",
      duration: "3-5 days",
      price: "$450",
      rating: 4.9,
      visitors: "2.5k+"
    },
    {
      id: 2,
      title: "Simien Mountains",
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Home to dramatic landscapes and unique wildlife including the Gelada baboon and Walia ibex. Experience breathtaking trekking routes and stunning vistas.",
      location: "Northern Ethiopia",
      bestTime: "September to April",
      duration: "4-7 days",
      price: "$680",
      rating: 4.8,
      visitors: "1.8k+"
    },
    {
      id: 3,
      title: "Aksum",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Ancient city known for its tall obelisks and historical significance as the heart of ancient Ethiopia. Explore archaeological wonders and royal tombs.",
      location: "Tigray Region",
      bestTime: "November to March",
      duration: "2-3 days",
      price: "$320",
      rating: 4.7,
      visitors: "1.2k+"
    },
    {
      id: 4,
      title: "Danakil Depression",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "One of the hottest places on Earth, featuring colorful sulfur springs, salt flats, and active volcanoes. A truly otherworldly experience.",
      location: "Afar Region",
      bestTime: "November to March",
      duration: "3-4 days",
      price: "$550",
      rating: 4.6,
      visitors: "900+"
    },
    {
      id: 5,
      title: "Gondar Castles",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Known as the 'Camelot of Africa', featuring medieval castles and palaces that showcase Ethiopia's royal heritage and architectural splendor.",
      location: "Amhara Region",
      bestTime: "October to May",
      duration: "2-3 days",
      price: "$280",
      rating: 4.5,
      visitors: "1.5k+"
    },
    {
      id: 6,
      title: "Bale Mountains",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Home to the rare Ethiopian wolf and stunning alpine scenery. Perfect for wildlife viewing and high-altitude trekking adventures.",
      location: "Oromia Region",
      bestTime: "November to April",
      duration: "4-6 days",
      price: "$420",
      rating: 4.4,
      visitors: "800+"
    }
  ];

  return (
    <DestinationsSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Popular Destinations</SectionTitle>
          <SectionSubtitle>
            Explore Ethiopia's most breathtaking and culturally significant destinations, 
            each offering unique experiences and unforgettable memories.
          </SectionSubtitle>
        </SectionHeader>

        <DestinationsGrid>
          {destinations.map((destination) => (
            <DestinationCard key={destination.id}>
              <CardImage image={destination.image}>
                <CardOverlay>
                  <CardTitle>{destination.title}</CardTitle>
                </CardOverlay>
              </CardImage>
              
              <CardContent>
                <CardDescription>{destination.description}</CardDescription>
                
                <CardFeatures>
                  <FeatureItem>
                    <FaMapMarkerAlt />
                    <span>{destination.location}</span>
                  </FeatureItem>
                  <FeatureItem>
                    <FaCalendarAlt />
                    <span>Best time: {destination.bestTime}</span>
                  </FeatureItem>
                  <FeatureItem>
                    <FaUsers />
                    <span>Duration: {destination.duration}</span>
                  </FeatureItem>
                </CardFeatures>

                <CardFooter>
                  <Price>From {destination.price}</Price>
                  <Rating>
                    <FaStar />
                    <span>{destination.rating}</span>
                    <span>({destination.visitors})</span>
                  </Rating>
                </CardFooter>
              </CardContent>

              <CardContent style={{ paddingTop: 0 }}>
                <ViewButton>View Details</ViewButton>
              </CardContent>
            </DestinationCard>
          ))}
        </DestinationsGrid>
      </Container>
    </DestinationsSection>
  );
};

export default Destinations; 