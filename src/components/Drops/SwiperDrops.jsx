import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import nft1 from "../../images/Art1.png";
import nft2 from "../../images/Art2.png";
import nft3 from "../../images/Art3.png";
import nft4 from "../../images/Art4.png";
import Author1 from "../../images/Author1.png";
import Author2 from "../../images/Author2.png";
import Author3 from "../../images/Author3.png";
import Author4 from "../../images/Author4.png";
import xtz from "../../images/xtz.png";
import Flow from "../../images/Flow.png";
import Ethereum from "../../images/Ethereum.png";
import NoteableCard from "../LandingPage/NoteableCard";

function createData(img, nftName, bidPrice, likes, status, avatar, logo) {
  return { img, nftName, bidPrice, likes, status, avatar, logo };
}
const trendingArray = [
  createData(
    `${nft1}`,
    "Election Season",
    "0.42 XTZ",
    "24",
    "Live Now",
    `${Author1}`,
    `${Flow}`
  ),
  createData(
    `${nft2}`,
    "Week Ahead",
    "0.42 ETH",
    "19",
    "03 Aug 2022",
    `${Author2}`,
    `${Ethereum}`
  ),
  createData(
    `${nft3}`,
    "Science Jobs",
    "0.42 Flow",
    "32",
    "Live Now",
    `${Author3}`,
    `${Flow}`
  ),
  createData(
    `${nft4}`,
    "Behind One of Big Hacks",
    "0.42 XTZ",
    "43",
    "03 Aug 2022",
    `${Author4}`,
    `${xtz}`
  ),
];

const SwiperDrops = ({ name }) => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width : 1115px)");
  const matches1 = useMediaQuery("(min-width : 852px)");
  const matches2 = useMediaQuery("(min-width : 600px)");
  return (
    <Box mt={4}>
      <Box my={2} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            color: theme.primary.text,
            fontWeight: "800",
            fontSize: { xs: "20px", md: "28px" },
          }}
        >
          {name}
        </Typography>
        <Box>
          <FaArrowCircleLeft
            className="swiper-button-prev"
            style={{
              marginRight: "10px",
              color: theme.primary.text,
              fontSize: "28px",
            }}
          />
          <FaArrowCircleRight
            className="swiper-button-next"
            style={{
              color: theme.primary.text,
              fontSize: "28px",
            }}
          />
        </Box>
      </Box>
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
        className="mySwiper"
      >
        <Box>
          {trendingArray.map(
            ({ img, nftName, bidPrice, likes, status, avatar, logo }, i) => (
              <SwiperSlide>
                <NoteableCard
                  img={img}
                  nftName={nftName}
                  bidPrice={bidPrice}
                  likes={likes}
                  status={status}
                  avatar={avatar}
                  logo={logo}
                />
              </SwiperSlide>
            )
          )}
        </Box>
      </Swiper>

      {/* <Typography
        sx={{
          color: theme.primary.text,
          fontWeight: "800",
          fontSize: { xs: "20px", md: "28px" },
        }}
      >
        Active drops
      </Typography> */}
    </Box>
  );
};

export default SwiperDrops;
