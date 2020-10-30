import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const Container = styled.div`
  margin: 2rem auto;

  .imageContainer {
    margin: 4rem auto;
    height: 200px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-out;
  }
`;

const SliderContainer = styled.div`
  position: relative;

  .inputSlider {
    width: 70%;
    -webkit-appearance: none;

    height: 0;
    background: #224889;
    border: none;
    outline: none;
    border-radius: 15px;
    cursor: pointer;
    border: 5px solid #224889;
    /* border: ${(props) =>
      "5px solid " + (props.progress <= 99 ? "#224889" : "#fff")}; */

    &::-webkit-slider-thumb {
      position: relative;
      -webkit-appearance: none;
      width: 35px;
      height: 35px;
      background: #224889;
      border-radius: 50%;
      z-index: 9999;

      &:hover {
        background: #224870;
      }
    }
  }

  .progressBar {
    position: absolute;
    height: 10px;
    width: ${(props) => props.progress * 0.68 + "%"};
    background: #000;
    margin: auto 0;
    left: 14%;
    top: 0;
    bottom: 0;
    height: 10px;
    background: linear-gradient(
      to bottom,
      #79aaff,
      #79aaff 49.9%,
      #5290fb 50%,
      #5290fb 100%
    );
    border: 5px solid #224889;
    border-radius: 15px 0 0 15px;
  }
`;

const allPets = [
  {
    name: "Your regular candle",
    img: "https://i.imgur.com/G8mCBUn.png"
  },
  {
    name: "Soft butter soy",
    img: "https://i.imgur.com/cGZRu03.png"
  },
  {
    name: "Glass blown container",
    img: "https://i.imgur.com/G8mCBUn.png"
  },
  {
    name: "Essential Oils",
    img: "https://i.imgur.com/cGZRu03.png"
  },
  {
    name: "Spotify enabled",
    img: "https://i.imgur.com/G8mCBUn.png"
  },
  {
    name: "The perfect candle",
    img: "https://i.imgur.com/cGZRu03.png"
  }
];

const Slider = () => {
  const [pet, setPet] = useState(allPets[0]);
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  const onProgressChange = ({ target }) => {
    setShow(false);
    setProgress(target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (progress === "0") {
        setShow(true);
        setPet(allPets[0]);
      }

      if (progress === "20") {
        setShow(true);
        setPet(allPets[1]);
      }

      if (progress === "40") {
        setShow(true);
        setPet(allPets[2]);
      }

      if (progress === "60") {
        setShow(true);
        setPet(allPets[3]);
      }

      if (progress === "80") {
        setShow(true);
        setPet(allPets[4]);
      }

      if (progress === "100") {
        setShow(true);
        setPet(allPets[5]);
      }
    }, 200);
  }, [progress, setPet]);

  const { img, name } = pet;

  return (
    <Container>
      <CSSTransition in={show} timeout={200} classNames="fade">
        <div className="imageContainer">
          <img src={img} alt="candle" />
        </div>
      </CSSTransition>
      <SliderContainer progress={progress}>
        <input
          className="inputSlider"
          onChange={onProgressChange}
          value={progress}
          type="range"
          min="0"
          max="100"
          step="20"
        />
        <div className="progressBar"></div>
      </SliderContainer>
      <CSSTransition in={show} timeout={200} classNames="fade">
        <div className="titleContainer">
          <h4>{name}</h4>
        </div>
      </CSSTransition>
    </Container>
  );
};

export default Slider;
