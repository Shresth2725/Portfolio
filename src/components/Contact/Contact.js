import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser, AiOutlineMessage, AiOutlineSend, AiOutlineCheckCircle, AiOutlineExclamationCircle } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { 
  ContactSection, 
  ContactContent, 
  ContactInfo, 
  InfoItem, 
  InfoText, 
  ContactForm, 
  FormGroup, 
  Label, 
  InputWrapper,
  Input, 
  TextArea, 
  Button, 
  FeedbackMessage 
} from './ContactStyles';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', error: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ message: '', error: false });

    // Validate form
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setFeedback({ message: 'Please fill in all fields.', error: true });
      setLoading(false);
      return;
    }

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_placeholder',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_placeholder',
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_placeholder'
    )
      .then((result) => {
          setFeedback({ message: 'Message sent successfully!', error: false });
          form.current.reset();
      }, (error) => {
          setFeedback({ message: 'Failed to send message.', error: true });
          console.error('EmailJS Error:', error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Section id="contact">
      <SectionDivider divider />
      <SectionTitle main>Contact Me</SectionTitle>
      <ContactSection>
        <ContactContent>
          <ContactInfo>
            <InfoItem>
              <AiOutlineMail size="3rem" />
              <InfoText>
                <h4>Email</h4>
                <p>2725shresth@gmail.com</p>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <AiOutlinePhone size="3rem" />
              <InfoText>
                <h4>Phone</h4>
                <p>+91-7309692044</p>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <BiMap size="3rem" />
              <InfoText>
                <h4>Location</h4>
                <p>Phagwara, Punjab, India</p>
              </InfoText>
            </InfoItem>
          </ContactInfo>

          <ContactForm ref={form} onSubmit={sendEmail}>
            <FormGroup>
              <Label htmlFor="user_name">Name</Label>
              <InputWrapper>
                <Input type="text" name="user_name" id="user_name" placeholder="John Doe" required />
                <AiOutlineUser size="2rem" />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="user_email">Email</Label>
              <InputWrapper>
                <Input type="email" name="user_email" id="user_email" placeholder="john@example.com" required />
                <AiOutlineMail size="2rem" />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <InputWrapper>
                <TextArea name="message" id="message" placeholder="Project details, timeline..." required />
                <AiOutlineMessage size="2rem" style={{ top: '16px' }} />
              </InputWrapper>
            </FormGroup>
            <Button type="submit" disabled={loading}>
              {loading ? 'Sending...' : (
                <>
                  Send Message <AiOutlineSend />
                </>
              )}
            </Button>
            {feedback.message && (
              <FeedbackMessage error={feedback.error}>
                {feedback.error ? <AiOutlineExclamationCircle /> : <AiOutlineCheckCircle />}
                {feedback.message}
              </FeedbackMessage>
            )}
          </ContactForm>
        </ContactContent>
      </ContactSection>
    </Section>
  );
};

export default Contact;
