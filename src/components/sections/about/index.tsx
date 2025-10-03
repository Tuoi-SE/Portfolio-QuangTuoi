import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    {i18n.resolvedLanguage === "en" ? <>
                        <h3 className="text-center mb-md-5 mb-2">Know Who <span className="brand-red">I'M</span> </h3>
                    </>
                        :
                        <>
                            <h3 className="text-center mb-md-5 mb-2">Để biết <span className="brand-red">Tôi</span> là ai</h3>
                        </>
                    }
                    <div>
                        <div>
                            <p>{t("aboutMe.intro1")}</p>
                            <p>{t("aboutMe.intro2")}</p>
                            <p>{t("aboutMe.intro3")}</p>
                        </div>
                    </div>
                    <div>
                        <p>{t("aboutMe.activitiesTitle")}</p>
                        <ul>
                            <li>{t("aboutMe.activity1")}</li>
                            <li>{t("aboutMe.activity2")}</li>
                            <li>{t("aboutMe.activity3")}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">{t("aboutMe.quote")}</p>
                        <p className="text-center brand-red">{t("aboutMe.quoteAuthor")}</p>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">{t("aboutEducation.title")}</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>{t("aboutEducation.year")}</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">{t("aboutEducation.major")}</p>
                                                <p className="company">{t("aboutEducation.nameUniversity")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">{t("findMeOn.title")} </h3>
                    <SocialMedia
                        github={APP_DATA.GITHUB_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        linked={APP_DATA.LINKED_URL}
                        mail={APP_DATA.MAIL_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">{t("contact.title")}</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;