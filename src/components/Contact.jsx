import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheck } from 'react-icons/fa';

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e3c72;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.h4`
  font-size: 1rem;
  color: #1e3c72;
  margin: 0 0 0.3rem 0;
`;

const ContactValue = styled.p`
  color: #666;
  margin: 0;
  line-height: 1.4;
`;

const ContactForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e3c72;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #1e3c72;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1e3c72;
    box-shadow: 0 0 0 3px rgba(30, 60, 114, 0.1);
  }

  &.error {
    border-color: #dc3545;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  box-sizing: border-box;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #1e3c72;
    box-shadow: 0 0 0 3px rgba(30, 60, 114, 0.1);
  }

  &.error {
    border-color: #dc3545;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(30, 60, 114, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[+]?[\d\s\-\(\)]+$/, 'Invalid phone number')
        .required('Phone number is required'),
      subject: Yup.string()
        .min(5, 'Subject must be at least 5 characters')
        .required('Subject is required'),
      message: Yup.string()
        .min(20, 'Message must be at least 20 characters')
        .required('Message is required')
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', values);
        setIsSubmitted(true);
        setSubmitting(false);
        resetForm();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1000);
    }
  });

  return (
    <ContactSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>
            Ready to start your Ethiopian adventure? Contact us for personalized travel planning and expert guidance.
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactInfo>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue>+251 911 123 456</ContactValue>
                <ContactValue>+251 922 789 012</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>info@ethiopiantravel.com</ContactValue>
                <ContactValue>bookings@ethiopiantravel.com</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>Address</ContactLabel>
                <ContactValue>Bole Road, Addis Ababa</ContactValue>
                <ContactValue>Ethiopia</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FaClock />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>Business Hours</ContactLabel>
                <ContactValue>Monday - Friday: 8:00 AM - 6:00 PM</ContactValue>
                <ContactValue>Saturday: 9:00 AM - 4:00 PM</ContactValue>
                <ContactValue>Sunday: Closed</ContactValue>
              </ContactDetails>
            </ContactItem>
          </ContactInfo>

          <ContactForm>
            <FormTitle>Send us a Message</FormTitle>
            
            <form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className={formik.touched.name && formik.errors.name ? 'error' : ''}
                />
                {formik.touched.name && formik.errors.name && (
                  <ErrorMessage>{formik.errors.name}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={formik.touched.email && formik.errors.email ? 'error' : ''}
                />
                {formik.touched.email && formik.errors.email && (
                  <ErrorMessage>{formik.errors.email}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className={formik.touched.phone && formik.errors.phone ? 'error' : ''}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <ErrorMessage>{formik.errors.phone}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  className={formik.touched.subject && formik.errors.subject ? 'error' : ''}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <ErrorMessage>{formik.errors.subject}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Tell us about your travel plans or any questions you have..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className={formik.touched.message && formik.errors.message ? 'error' : ''}
                />
                {formik.touched.message && formik.errors.message && (
                  <ErrorMessage>{formik.errors.message}</ErrorMessage>
                )}
              </FormGroup>

              <SubmitButton type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>

              {isSubmitted && (
                <SuccessMessage>
                  <FaCheck />
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </SuccessMessage>
              )}
            </form>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 