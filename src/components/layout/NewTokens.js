import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import icons
import {
  faPlus,
  faCircleInfo,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

// import style
import "./NewTokens.scss";

// temp data
const data = [
  {
    id: 1,
    name: "BNB",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 2,
    name: "XRP",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 3,
    name: "MONKY",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 4,
    name: "Baby",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 5,
    name: "VIA",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 6,
    name: "MONKY",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 7,
    name: "SDM",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 8,
    name: "THE",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 9,
    name: "EXVG",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 10,
    name: "CGPT",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 11,
    name: "COOK",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 12,
    name: "DCF",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 13,
    name: "DOGE",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
  {
    id: 14,
    name: "PEPE",
    img: "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
    percent: -0.1,
    plus: true,
  },
];

const NewTokens = () => {
  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: autoplay,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 446,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="new-tokens-container">
      <div className="new-tokens-slider-left">
        <FontAwesomeIcon icon={faFire} />
        <p>HOT PAIRS</p>
        <FontAwesomeIcon icon={faCircleInfo} />
      </div>
      <div className="new-tokens-slider-center">
        <div className="new-tokens-slider-view">
          <Slider
            {...settings}
            onMouseEnter={() => setAutoplay(true)}
            onMouseLeave={() => setAutoplay(false)}
          >
            {data.map((item, key) => {
              return (
                <a href="#" className="new-tokens-slider-item" key={key}>
                  <p className="new-tokens-slider-item-id">#{item.id}</p>
                  <p className="new-tokens-slider-item-icon">
                    <FontAwesomeIcon icon={faPlus} />
                  </p>
                  <img src={item.img} alt={item.name} />
                  <p className="new-tokens-slider-item-name">{item.name}</p>
                  <p
                    className={`new-tokens-slider-item-amount ${
                      Number(item.percent) < 0
                        ? "percent-minus"
                        : "percent-plus"
                    }`}
                  >
                    {item.percent}%
                  </p>
                </a>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="new-tokens-slider-right">
        <img
          src="https://www.dextools.io/resources/tokens/logos/3/bsc/0x21ac3bb914f90a2bb1a16088e673a9fdda641434.png?1707382639"
          alt="dextools"
        />
        <p>DEXTools</p>
      </div>
    </div>
  );
};

export default NewTokens;
