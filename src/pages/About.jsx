import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaAward, FaGlobe, FaHeart, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding-top: 80px; // Account for fixed navbar
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 8rem 2rem;
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
  padding: 5rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1e3c72;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StoryContent = styled.div`
  h3 {
    font-size: 2rem;
    color: #1e3c72;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 1rem;
  }
`;

const StoryImage = styled.div`
  height: 400px;
  background: url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e3c72;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 4rem 2rem;
  margin: 5rem 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatCard = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const TeamSection = styled.div`
  margin-bottom: 5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const TeamImage = styled.div`
  height: 250px;
  background: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const TeamInfo = styled.div`
  padding: 1.5rem;
`;

const TeamName = styled.h3`
  font-size: 1.3rem;
  color: #1e3c72;
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  color: #666;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const TeamDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const About = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: "Authentic Experiences",
      description: "We believe in providing genuine cultural experiences that connect travelers with the real Ethiopia."
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety First",
      description: "Your safety and security are our top priorities. We ensure all tours meet international safety standards."
    },
    {
      icon: <FaHandshake />,
      title: "Local Partnerships",
      description: "We work closely with local communities to create sustainable tourism that benefits everyone."
    },
    {
      icon: <FaGlobe />,
      title: "Environmental Responsibility",
      description: "We're committed to preserving Ethiopia's natural beauty for future generations."
    }
  ];

  const team = [
    {
      name: "Abebe Kebede",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "With over 15 years of experience in Ethiopian tourism, Abebe founded our agency with a vision to showcase the authentic beauty of Ethiopia."
    },
    {
      name: "Sara Haile",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Sara ensures every tour runs smoothly, coordinating with guides, hotels, and transportation partners."
    },
    {
      name: "Michael Tadesse",
      role: "Lead Tour Guide",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "A certified guide with deep knowledge of Ethiopian history, culture, and natural wonders."
    },
    {
      name: "Fatima Ahmed",
      role: "Customer Relations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Fatima ensures every customer receives personalized attention and has an unforgettable experience."
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroTitle>About Ethiopian Travel</HeroTitle>
        <HeroSubtitle>
          Your trusted partner for authentic Ethiopian travel experiences since 2010
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          <StorySection>
            <StoryContent>
              <h3>Our Story</h3>
              <p>
                Founded in 2010, Ethiopian Travel Agency was born from a deep passion 
                for showcasing the incredible beauty, rich history, and vibrant culture 
                of Ethiopia to the world.
              </p>
              <p>
                What started as a small local tour company has grown into one of 
                Ethiopia's most trusted travel agencies, serving thousands of 
                international visitors each year.
              </p>
              <p>
                Our mission is to provide authentic, sustainable, and unforgettable 
                travel experiences that not only showcase Ethiopia's wonders but also 
                support local communities and preserve our cultural heritage.
              </p>
            </StoryContent>
            <StoryImage />
          </StorySection>

          <SectionTitle>Our Values</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>

          <StatsSection>
            <StatsGrid>
              <StatCard>
                <StatNumber>5000+</StatNumber>
                <StatLabel>Happy Travelers</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>50+</StatNumber>
                <StatLabel>Tour Destinations</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>15+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>98%</StatNumber>
                <StatLabel>Satisfaction Rate</StatLabel>
              </StatCard>
            </StatsGrid>
          </StatsSection>

          <TeamSection>
            <SectionTitle>Meet Our Team</SectionTitle>
            <TeamGrid>
              {team.map((member, index) => (
                <TeamCard key={index}>
                  <TeamImage image={member.image} />
                  <TeamInfo>
                    <TeamName>{member.name}</TeamName>
                    <TeamRole>{member.role}</TeamRole>
                    <TeamDescription>{member.description}</TeamDescription>
                  </TeamInfo>
                </TeamCard>
              ))}
            </TeamGrid>
          </TeamSection>
        </Container>
      </ContentSection>
    </AboutContainer>
  );
};

export default About; 