import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPlay, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroFeatures = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #1e3c72;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
    color: #1e3c72;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border: 2px solid white;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    color: #1e3c72;
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  cursor: pointer;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const ScrollArrow = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
`;

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Discover Ethiopia</HeroTitle>
        <HeroSubtitle>
          Experience the cradle of humanity, ancient civilizations, and breathtaking landscapes
        </HeroSubtitle>
        
        <HeroFeatures>
          <Feature>
            <FaMapMarkerAlt />
            <span>UNESCO Sites</span>
          </Feature>
          <Feature>
            <FaCalendarAlt />
            <span>Year-round Tours</span>
          </Feature>
          <Feature>
            <FaPlay />
            <span>Cultural Experiences</span>
          </Feature>
        </HeroFeatures>

        <ButtonGroup>
          <PrimaryButton to="/tours">
            Explore Tours
          </PrimaryButton>
          <SecondaryButton>
            Watch Video
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>

      <ScrollIndicator onClick={scrollToContent}>
        <ScrollArrow />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 