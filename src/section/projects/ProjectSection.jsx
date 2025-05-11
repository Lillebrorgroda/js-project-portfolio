import Card from "../../components/Card"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"


const CarouselWrapper = styled.div`
  width: 100%;
  /* max-width: 1600px; */
  padding: 64px 0;
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
const TextWrapper = styled.div`
  text-align: center;
  padding-top: 64px;
`


const ProjectSection = ({ projects, title }) => {
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
            1440: { slidesPerView: 4 },
          }}
        >

          {projects.map((project) => (
            <SwiperSlide key={project.name}>
              <Card
                title={project.name}
                image={project.image}
                text={project.text}
                tag={project.tags.join(", ")}
                netlifyLink={project.netlify}
                githubLink={project.github}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselWrapper>

      {/* </ProjectWrapper> */}
    </>
  )
}

export default ProjectSection