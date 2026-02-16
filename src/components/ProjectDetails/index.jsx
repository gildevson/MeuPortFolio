import { CloseRounded, GitHub, LinkedIn, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;


const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;


const CarouselContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
  cursor: pointer;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: translateY(-50%) scale(1.1);
  }

  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
    ${({ direction }) => direction === 'left' ? 'left: 5px;' : 'right: 5px;'}
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${({ active, theme }) => active ? theme.primary : theme.bgLight};
  cursor: pointer;
  transition: background 0.3s;
`;

const Index = ({ openModal, setOpenModal }) => {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const project = openModal?.project;
    const [carouselIdx, setCarouselIdx] = useState(0);
    const images = project?.images || (project?.image ? [project.image] : []);

    // Swipe/drag state
    const [startX, setStartX] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleIndicator = (idx) => {
        setCarouselIdx(idx);
    };
    
    const handlePrevImage = (e) => {
        e.stopPropagation();
        setCarouselIdx((prev) => prev === 0 ? images.length - 1 : prev - 1);
    };
    
    const handleNextImage = (e) => {
        e.stopPropagation();
        setCarouselIdx((prev) => (prev + 1) % images.length);
    };
    
    const handleImageClick = () => {
        setCarouselIdx((prev) => (prev + 1) % images.length);
    };

    // Touch events
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };
    const handleTouchEnd = (e) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        if (startX !== null) {
            if (endX - startX > 50) {
                // Swipe right
                setCarouselIdx((prev) => prev === 0 ? images.length - 1 : prev - 1);
            } else if (startX - endX > 50) {
                // Swipe left
                setCarouselIdx((prev) => (prev + 1) % images.length);
            }
        }
        setIsDragging(false);
        setStartX(null);
    };

    // Mouse events
    const handleMouseDown = (e) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };
    const handleMouseUp = (e) => {
        if (!isDragging) return;
        const endX = e.clientX;
        if (startX !== null) {
            if (endX - startX > 50) {
                setCarouselIdx((prev) => prev === 0 ? images.length - 1 : prev - 1);
            } else if (startX - endX > 50) {
                setCarouselIdx((prev) => (prev + 1) % images.length);
            }
        }
        setIsDragging(false);
        setStartX(null);
    };

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    {images.length > 0 && (
                        <CarouselContainer>
                            <ImageWrapper>
                                {images.length > 1 && (
                                    <>
                                        <ArrowButton direction="left" onClick={handlePrevImage}>
                                            <ArrowBackIosNew sx={{ fontSize: 20 }} />
                                        </ArrowButton>
                                        <ArrowButton direction="right" onClick={handleNextImage}>
                                            <ArrowForwardIos sx={{ fontSize: 20 }} />
                                        </ArrowButton>
                                    </>
                                )}
                                <CarouselImage
                                    src={images[carouselIdx]}
                                    onClick={handleImageClick}
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={handleMouseUp}
                                />
                            </ImageWrapper>
                            {images.length > 1 && (
                                <CarouselIndicators>
                                    {images.map((_, idx) => (
                                        <Indicator
                                            key={idx}
                                            active={carouselIdx === idx}
                                            theme={project.theme}
                                            onClick={() => handleIndicator(idx)}
                                        />
                                    ))}
                                </CarouselIndicators>
                            )}
                        </CarouselContainer>
                    )}
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project.member && (
                        <>
                            <Label>{t.members}</Label>
                            <Members>
                                {project?.member.map((member) => (
                                    <Member>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    {(project?.github || project?.webapp) && (
                        <ButtonGroup>
                            {project?.github && <Button dull href={project.github} target='new'>{t.viewCode}</Button>}
                            {project?.webapp && <Button href={project.webapp} target='new'>{t.viewProject}</Button>}
                        </ButtonGroup>
                    )}
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default Index