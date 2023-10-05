import { useState } from "react";
import starIcon from "./assets/icon-star.svg";
import thankImg from "./assets/illustration-thank-you.svg";
import {
  StyledMain,
  StarBox,
  StyleSubmit,
  GroupRating,
  StyledRating,
  StyledButton,
  StyledThanks,
} from "./App.styled";

export default function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState(0);
  function ratingClick(rating) {
    setRate(rating);
    console.log(rate);
  }

  function handleBack() {
    setSubmit(false);
  }

  function handleSubmit() {
    if (rate > 0) {
      setSubmit((prev) => !prev);
    } else {
      setSubmit(false);
    }
  }

  const rating = [1, 2, 3, 4, 5].map((item, i) => {
    return (
      <StyledRating key={i} onClick={() => ratingClick(item)}>
        {item}
      </StyledRating>
    );
  });

  return (
    <StyledMain>
      {!submit ? (
        <StyleSubmit>
          <StarBox>
            <img src={starIcon} alt="star icon" />
          </StarBox>
          <h3>How did we do?</h3>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <GroupRating>{rating}</GroupRating>
          <StyledButton onClick={handleSubmit}>submit</StyledButton>
        </StyleSubmit>
      ) : (
        <StyledThanks>
          <div>
            <img
              onClick={handleBack}
              src={thankImg}
              alt="illustration thank you image"
            />
          </div>
          <span>You selected {rate} out of 5</span>
          <h3>Thank you!</h3>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </StyledThanks>
      )}
    </StyledMain>
  );
}
