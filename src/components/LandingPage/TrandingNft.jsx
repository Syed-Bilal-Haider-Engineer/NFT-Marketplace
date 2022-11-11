import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import TrandingCards from "./TrandingCards";

import Art1 from "../../images/Art1.png";
import Art2 from "../../images/Art2.png";
import Art3 from "../../images/Art3.png";
import tranding4 from "../../images/tranding4.png";
import img from "../../images/img.png";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import sh10 from "../../images/sh10.png";

function TrandingNft() {
  const cardData = [
    {
      img: `${Art3}`,
      icon: `${img3}`,
      name: "Week Ahead",
      owner: "Ya Chin-Ho",
      description:
        "You can’t fall if you don’t climb. But there’s no joy in living your whole",
      favourite: "32",
    },
    {
      img: `${Art2}`,
      icon: `${img2}`,
      name: "Lorr’s Ad Issues",
      owner: "Sijmen Immens",
      description:
        "If you're offered a seat on a rocket ship, don't ask what seat",
      favourite: "19",
    },
    {
      img: `${Art1}`,
      icon: `${img1}`,
      name: "Capturing Memories",
      owner: "Chioke Okonkwo",
      description: "It is never too late to be what you might have been",
      favourite: "18",
    },
    {
      img: `${tranding4}`,
      icon: `${img}`,
      name: "Venture Capitalist",
      owner: "Wim Willems",
      description:
        "We can easily forgive a child who is afraid of the dark the real tragedy",
      favourite: "12",
    },
  ];

  const theme = useTheme();
  const matches = useMediaQuery("(min-width : 1115px)");
  const matches1 = useMediaQuery("(min-width : 852px)");
  const matches2 = useMediaQuery("(min-width : 600px)");

  return (
    <Box position={"relative"} py={5} bgcolor={theme.primary.bg}>
      <img
        src={sh10}
        alt=""
        style={{
          position: "absolute",
          width: "40%",
          bottom: "-35%",
          left: "0px",
          // zIndex: -1,
        }}
      />
      <Container>
        <Typography
          sx={{
            color: theme.primary.text,
            fontSize: { md: "28px", xs: "20px" },
            fontWeight: "800",
            textAlign: "left",
          }}
        >
          Trending NFTs
        </Typography>

        <Box my={4}>
          <Swiper
            slidesPerView={matches ? 4 : matches1 ? 3 : matches2 ? 2 : 1}
            spaceBetween={10}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
          >
            <Box>
              {cardData.map(
                ({ img, icon, name, owner, description, favourite }, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <TrandingCards
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        description={description}
                        favourite={favourite}
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </Box>

            <Box
              pt={1}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <ArrowBackIcon
                className="swiper-button-prev"
                sx={{
                  background: theme.primary.bg,
                  color: theme.primary.text,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50px",
                  cursor: "pointer",
                  padding: "7px",
                  border: "1px solid #fff",
                  borderRadius: "50%",
                }}
              />
              <ArrowForwardIcon
                className="swiper-button-next"
                sx={{
                  background: theme.primary.bg,
                  color: theme.primary.text,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50px",
                  marginLeft: "10px",
                  cursor: "pointer",
                  padding: "7px",
                  border: "1px solid #fff",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
export default TrandingNft;
