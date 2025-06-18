import React, { useState } from 'react';
import styled from 'styled-components';
import { FaClock, FaUsers, FaStar, FaMapMarkerAlt, FaCalendarAlt, FaCheck, FaFilter, FaSearch } from 'react-icons/fa';

const ToursPageContainer = styled.div`
  padding-top: 80px; // Account for fixed navbar
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 6rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
`;

const ContentSection = styled.section`
  padding: 3rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FiltersSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const FiltersTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e3c72;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const FilterGroup = styled.div`
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #1e3c72;
    font-weight: 500;
  }

  select, input {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #1e3c72;
      box-shadow: 0 0 0 3px rgba(30, 60, 114, 0.1);
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #1e3c72;
    box-shadow: 0 0 0 3px rgba(30, 60, 114, 0.1);
  }
`;

const SearchButton = styled.button`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(30, 60, 114, 0.3);
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
  height: 250px;
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
  font-size: 1.4rem;
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

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.2rem;
`;

const ToursPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const tours = [
    {
      id: 1,
      title: "Classic Northern Ethiopia",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Explore the historical treasures of Northern Ethiopia including Lalibela, Gondar, and Aksum.",
      duration: "10 days",
      groupSize: "2-12 people",
      price: "$1,200",
      priceRange: "high",
      rating: 4.9,
      category: "cultural",
      badge: "popular",
      highlights: [
        "Lalibela Rock Churches",
        "Gondar Castles",
        "Aksum Obelisks",
        "Local guide included",
        "All meals provided"
      ]
    },
    {
      id: 2,
      title: "Simien Mountains Trek",
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Trek through the stunning Simien Mountains and encounter unique wildlife.",
      duration: "7 days",
      groupSize: "4-8 people",
      price: "$850",
      priceRange: "medium",
      rating: 4.8,
      category: "adventure",
      badge: "new",
      highlights: [
        "Gelada baboon viewing",
        "Mountain trekking",
        "Camping experience",
        "Professional guide",
        "Equipment provided"
      ]
    },
    {
      id: 3,
      title: "Danakil Depression Adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Experience the otherworldly landscapes of the Danakil Depression.",
      duration: "4 days",
      groupSize: "6-15 people",
      price: "$650",
      priceRange: "medium",
      rating: 4.7,
      category: "adventure",
      badge: "limited",
      highlights: [
        "Sulfur springs",
        "Salt flats",
        "Active volcanoes",
        "4x4 transportation",
        "Safety equipment"
      ]
    },
    {
      id: 4,
      title: "Ethiopian Coffee Tour",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Discover the birthplace of coffee and learn about traditional coffee ceremonies.",
      duration: "5 days",
      groupSize: "2-10 people",
      price: "$480",
      priceRange: "low",
      rating: 4.6,
      category: "cultural",
      badge: "popular",
      highlights: [
        "Coffee farm visits",
        "Traditional ceremonies",
        "Local villages",
        "Coffee tasting",
        "Cultural immersion"
      ]
    },
    {
      id: 5,
      title: "Bale Mountains Wildlife Safari",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Spot rare wildlife including the Ethiopian wolf in the stunning Bale Mountains.",
      duration: "6 days",
      groupSize: "4-8 people",
      price: "$720",
      priceRange: "medium",
      rating: 4.5,
      category: "wildlife",
      badge: "new",
      highlights: [
        "Ethiopian wolf viewing",
        "Bird watching",
        "Mountain hiking",
        "Local guides",
        "Lodge accommodation"
      ]
    },
    {
      id: 6,
      title: "Historical Route Express",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A condensed version of the historical route for travelers with limited time.",
      duration: "3 days",
      groupSize: "2-8 people",
      price: "$380",
      priceRange: "low",
      rating: 4.4,
      category: "cultural",
      badge: "limited",
      highlights: [
        "Lalibela churches",
        "Gondar highlights",
        "Local guide",
        "Hotel accommodation",
        "Transport included"
      ]
    }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    const matchesDuration = selectedDuration === 'all' || 
                           (selectedDuration === 'short' && parseInt(tour.duration) <= 5) ||
                           (selectedDuration === 'medium' && parseInt(tour.duration) > 5 && parseInt(tour.duration) <= 8) ||
                           (selectedDuration === 'long' && parseInt(tour.duration) > 8);
    const matchesPrice = selectedPrice === 'all' || tour.priceRange === selectedPrice;

    return matchesSearch && matchesCategory && matchesDuration && matchesPrice;
  });

  return (
    <ToursPageContainer>
      <HeroSection>
        <HeroTitle>Our Tour Packages</HeroTitle>
        <HeroSubtitle>
          Discover Ethiopia through our carefully curated tour packages designed for every type of traveler
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          <FiltersSection>
            <FiltersTitle>
              <FaFilter />
              Find Your Perfect Tour
            </FiltersTitle>
            
            <SearchBar>
              <SearchInput
                type="text"
                placeholder="Search tours by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchButton>
                <FaSearch />
                Search
              </SearchButton>
            </SearchBar>

            <FiltersGrid>
              <FilterGroup>
                <label>Category</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="all">All Categories</option>
                  <option value="cultural">Cultural</option>
                  <option value="adventure">Adventure</option>
                  <option value="wildlife">Wildlife</option>
                </select>
              </FilterGroup>

              <FilterGroup>
                <label>Duration</label>
                <select value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)}>
                  <option value="all">Any Duration</option>
                  <option value="short">Short (1-5 days)</option>
                  <option value="medium">Medium (6-8 days)</option>
                  <option value="long">Long (9+ days)</option>
                </select>
              </FilterGroup>

              <FilterGroup>
                <label>Price Range</label>
                <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
                  <option value="all">Any Price</option>
                  <option value="low">Budget ($300-600)</option>
                  <option value="medium">Mid-range ($600-900)</option>
                  <option value="high">Premium ($900+)</option>
                </select>
              </FilterGroup>
            </FiltersGrid>
          </FiltersSection>

          {filteredTours.length > 0 ? (
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
                        {tour.highlights.slice(0, 3).map((highlight, index) => (
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
          ) : (
            <NoResults>
              No tours found matching your criteria. Try adjusting your filters.
            </NoResults>
          )}
        </Container>
      </ContentSection>
    </ToursPageContainer>
  );
};

export default ToursPage; 