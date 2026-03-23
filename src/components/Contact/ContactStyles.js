import styled from 'styled-components';

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 0px; 
  margin: 0 auto;
  gap: 40px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 0px;
    gap: 24px;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  padding: 40px 24px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-8px);
    border-color: #00dbd8;
    box-shadow: 0 15px 35px rgba(0, 219, 216, 0.15);
  }

  &:hover svg {
    transform: scale(1.1);
    filter: drop-shadow(0 0 10px rgba(0, 219, 216, 0.6));
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0, 219, 216, 0.05); 
  margin-bottom: 10px;
  transition: all 0.4s ease;

  svg {
    color: #00dbd8;
    transition: all 0.4s ease;
  }
  
  ${InfoItem}:hover & {
    background: rgba(0, 219, 216, 0.15); 
    box-shadow: 0 0 20px rgba(0, 219, 216, 0.2);
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    font-size: 2.2rem;
    font-weight: 700;
    color: white;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.5;
    word-break: break-word;
    transition: color 0.4s ease;
  }

  ${InfoItem}:hover & p {
    color: rgba(255, 255, 255, 0.8);
  }
`;
