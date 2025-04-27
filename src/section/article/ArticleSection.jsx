import Card from "../../components/Card"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 40px 0;
  overflow: visible;

  .swiper-button-next, .swiper-button-prev{
    color: #255f38;
    background: white;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next::after, .swiper-button-prev::after {
    font-size: 20px;
    font-weight: bold;
  }
`

// const ArticleWrapper = styled.article`
// display: flex;
// flex-direction: column;
// gap: 24px;
// padding: 64px 24px;
// align-items: center;
// text-align: center;

// @media (min-width: 1025px) {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
// }

// `
const TextWrapper = styled.div`
  text-align: center;
`


const ArticleSection = ({ article, title }) => {
  return (
    <>
      <TextWrapper>
        <h2>{title}</h2>
      </TextWrapper>
      <CarouselWrapper>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2.5 },
            1025: { slidesPerView: 3.5 },
          }}
        >

          {article.map((article) => (
            <SwiperSlide key={article.name}>
              <Card
                key={article.title}
                title={article.title}
                image={article.image}
                text={article.text}
                link={article.link}


              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselWrapper>
    </>
  )
}

export default ArticleSection