import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const HeroSection = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;
    
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title> {/* Este é um comentário de uma linha no JSX */}<br /> {Bio.name}</Title>
                        <TextLoop>
                            {t.title}{/* Este é um comentário de uma linha no JSX */}
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{translations[language].bio.description}</SubTitle>
                        <ResumeButton
                            href="Curriculo/Gilson_Fonseca.pdf"
                            download="Gilson_Fonseca.pdf"
                            target="_blank"
                        >
                            {t.resume}
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection;
