import styled from 'styled-components';

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
  max-width: 1040px;
  margin: 0 auto;
  gap: 40px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px;
    gap: 24px;
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  width: 100%;
  margin-top: 4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  transition: 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  svg {
    color: #00dbd8;
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
  }

  p {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 24px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  padding-left: 4px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 16px;
    color: rgba(255, 255, 255, 0.3);
    transition: 0.3s ease;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 14px 16px 14px 44px;
  color: white;
  font-size: 1.6rem;
  transition: 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 0.08);
    border-color: #00dbd8;
    outline: none;
    box-shadow: 0 0 15px rgba(0, 219, 216, 0.1);
  }

  &:focus + svg {
    color: #00dbd8;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 14px 16px 14px 44px;
  color: white;
  font-size: 1.6rem;
  min-height: 120px;
  resize: vertical;
  transition: 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 0.08);
    border-color: #00dbd8;
    outline: none;
    box-shadow: 0 0 15px rgba(0, 219, 216, 0.1);
  }

  &:focus + svg {
    color: #00dbd8;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 18px;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(18, 173, 199, 0.4);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const FeedbackMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1.5rem;
  padding: 12px;
  border-radius: 8px;
  margin-top: 16px;
  background: ${props => props.error ? 'rgba(255, 77, 77, 0.1)' : 'rgba(77, 255, 136, 0.1)'};
  color: ${props => props.error ? '#ff4d4d' : '#4dff88'};
  border: 1px solid ${props => props.error ? 'rgba(255, 77, 77, 0.2)' : 'rgba(77, 255, 136, 0.2)'};
`;
