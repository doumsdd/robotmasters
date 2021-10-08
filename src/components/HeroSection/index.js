import React,{ useState } from "react";
import {
  HeroContainer,
  HeroContent,
  Heroh1,
  HeroBtn,
  BtnRoute,
  HeroDesc,
  ForwardIcon,
  Imp,
} from "./heroElements";

const HeroSection = () => {

    const [hover,setHover] = useState(false);

    const toggleIcon = () => {
        setHover(!hover);
    }

  return (
    <>
      <HeroContainer>
        <HeroContent>
          <Heroh1>
            Explore the <Imp>16-bit</Imp> games{" "}
          </Heroh1>
          <HeroDesc>
            Buy your first retro game and a blueberry
          </HeroDesc>
          <BtnRoute>
            <HeroBtn to="/signin" onMouseEnter={toggleIcon} onMouseLeave={toggleIcon}>Get Started {hover ? <ForwardIcon className="arr-icon" /> : null} </HeroBtn>
          </BtnRoute>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;