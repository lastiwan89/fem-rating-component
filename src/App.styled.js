import styled from "styled-components";

export const StyledMain = styled.div`
  font-family: var(--font-stack);
  color: var(--cl-white);
  background: var(
    --black-gradient,
    radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%)
  );
  width: 412px;
  height: 416px;
  padding: 2em;
  border-radius: 30px;
  @media (max-width: 375px) {
    max-width: 380px;
    max-height: 384px;
    padding: 24px;
  }
`;

export const StarBox = styled.div`
  width: 48px;
  height: 48px;
  background-color: var(--cl-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const StyleSubmit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.1rem;
  @media (max-width: 375px) {
    gap: 0.9rem;
  }

  > h3 {
    font-size: 1.75rem;
    margin-top: 1rem;
  }

  > p {
    color: var(--cl-light-grey);
    font-size: 0.9375rem;
    margin-bottom: 1rem;
  }
`;

export const StyledButton = styled.button`
  margin-top: 1rem;
  border-radius: 1.40625rem;
  background: var(--orange);
  padding: 0.69rem;
  border: none;
  text-transform: uppercase;
  font-size: 0.9375rem;
  font-weight: 700;
  letter-spacing: 0.125rem;
  color: #fff;
  font-style: normal;
  cursor: pointer;

  &:hover,
  :active,
  :focus {
    color: var(--orange);
    background-color: #fff;
    font-weight: 700;
  }
`;

export const GroupRating = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const StyledRating = styled.button`
  border: none;
  width: 51px;
  height: 51px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  background-color: var(--cl-blue);
  color: #7c8798;

  &:focus {
    background-color: #7c8798;
    color: #fff;
  }

  &:hover {
    background-color: var(--orange);
    color: white;
  }
`;

export const StyledThanks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.2rem;

  @media (max-width: 375px) {
    gap: 1.8rem;
  }

  > span {
    font-size: 0.9375rem;
    padding: 0.5rem 1.5rem;
    background-color: #262e38;
    border-radius: 20px;
    color: var(--orange);
  }

  > h3 {
    font-size: 1.75rem;
    font-weight: 700;
  }

  > p {
    text-align: center;
    color: var(--cl-light-grey);
    font-size: 0.9375rem;
  }
`;
