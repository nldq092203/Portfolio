import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import {
  Group,
  Button,
  Burger,
  Paper,
  Transition,
  Title
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";

function NavBar() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.language;
  const languageToDisplay = currentLanguage === 'en' ? 'fr' : 'en';

  const [navColour, setNavColour] = useState(false);
  const [opened, { toggle }] = useDisclosure(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  function scrollHandler() {
    setNavColour(window.scrollY >= 20);
  }

  function handleResize() {
    setIsMobile(window.innerWidth < 768);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={navColour ? "sticky" : "navbar"}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        height: "150px",
        display: "flex",
        alignItems: "center",
        padding: 30
      }}
    >

        <div style={{ display: "flex", justifyContent: "space-between", align: "center", width: "100%" }}>
          <Link to="/" className="d-flex">
            <Title style={{ margin: 0, color: "#0197f6", fontSize: "2rem"}} >{t('navbar.title')}</Title>
          </Link>
          <Group position="apart" align="center">
            {isMobile ? (
              <>
                <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                <Transition transition="pop" duration={200} mounted={opened}>
                  {(styles) => (
                    <Paper
                      style={{
                        ...styles,
                        position: "absolute",
                        top: 80,
                        right: 0,
                        zIndex: 99,
                      }}
                      withBorder
                    >
                      <Group direction="column" spacing="md" style={{ padding: 20 }}>
                        <Button variant="subtle" onClick={toggle}>
                          <AiOutlineHome style={{ marginRight: "8px" }} />
                          <Link to="/" style={{ textDecoration: "none", color: "dodgerblue" }}>{t('navbar.home')}</Link>
                        </Button>
                        <Button variant="subtle" onClick={toggle}>
                          <AiOutlineUser style={{ marginRight: "8px" }} />
                          <Link to="/skills" style={{ textDecoration: "none", color: "dodgerblue" }}>{t('navbar.skills')}</Link>
                        </Button>
                        <Button variant="subtle" onClick={toggle}>
                          <AiOutlineFundProjectionScreen style={{ marginRight: "8px" }} />
                          <Link to="/project" style={{ textDecoration: "none", color: "dodgerblue" }}>{t('navbar.projects')}</Link>
                        </Button>
                        <Button variant="subtle" onClick={toggle}>
                          <CgFileDocument style={{ marginRight: "8px" }} />
                          <Link to="/resume" style={{ textDecoration: "none", color: "dodgerblue" }}>{t('navbar.resume')}</Link>
                        </Button>
                        <Button onClick={toggle}>
                          <CgGitFork style={{ marginRight: "8px" }} />
                          <a href="https://github.com/nldq092203/Portfolio.git" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "dodgerblue" }}>
                            <AiFillStar style={{ marginLeft: "8px" }} />
                          </a>
                        </Button>
                      </Group>
                    </Paper>
                  )}
                </Transition>
              </>
            ) : (
              <Group spacing="md">
                <Link to="/" style={{ textDecoration: "none"}}>
                  <Button
                    size="lg"
                    leftSection={<AiOutlineHome style={{ marginRight: "8px" }} />}
                    variant="subtle"
                    style={{ fontSize: "1.1rem", padding: "10px 15px", color:"#FFFFFF"}}
                    fullWidth
                  >
                    {t('navbar.home')}
                  </Button>
                </Link>
                <Link to="/skills" style={{ textDecoration: "none"}}>
                  <Button
                    size="lg"
                    leftSection={<AiOutlineUser style={{ marginRight: "8px" }} />}
                    variant="subtle"
                    style={{ fontSize: "1.1rem", padding: "10px 15px", color:"#FFFFFF"}}
                    fullWidth
                  >
                    {t('navbar.skills')}
                  </Button>
                </Link>
                <Link to="/project" style={{ textDecoration: "none"}}>
                  <Button
                    size="lg"
                    leftSection={<AiOutlineFundProjectionScreen style={{ marginRight: "8px" }} />}
                    variant="subtle"
                    style={{ fontSize: "1.1rem", padding: "10px 15px",  color: "#FFFFFF" }}
                    fullWidth
                  >
                    {t('navbar.projects')}
                  </Button>
                </Link>

                <Link to="/resume" style={{ textDecoration: "none" }}>
                  <Button
                    size="lg"
                    leftSection={<CgFileDocument style={{ marginRight: "8px" }} />}
                    variant="subtle"
                    style={{ fontSize: "1.1rem", padding: "10px 15px",  color: "#FFFFFF"  }}
                    fullWidth
                  >
                    {t('navbar.resume')}
                  </Button>
                </Link>

                <a href="https://github.com/nldq092203/Portfolio.git" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <Button
                    size="lg"
                    leftSection={<CgGitFork style={{ marginRight: "8px" }} />}
                    rightSection={<AiFillStar style={{ marginLeft: "8px" }} />}
                    variant="subtle"
                    style={{ fontSize: "1.1rem", padding: "10px 15px", color: "#FFFFFF" }}
                    fullWidth
                  >
                    {t('navbar.github')}
                  </Button>
                </a>

                {/* Language switch button with UK and France flags */}
                <Button
                  onClick={() => changeLanguage(languageToDisplay)}
                  variant="subtle"
                  style={{ fontSize: "1.1rem", padding: "8px 15px", color: "#FFFFFF" }}
                  leftSection={
                    languageToDisplay === 'en' ? (
                      <ReactCountryFlag countryCode="GB" svg style={{ width: "1.5em", height: "1.5em" }} />
                    ) : (
                      <ReactCountryFlag countryCode="FR" svg style={{ width: "1.5em", height: "1.5em" }} />
                    )
                  }
                >
                  {languageToDisplay === 'en' ? 'English' : 'Français'}
                </Button>
              </Group>
            )}
          </Group>
        </div>
    </div>
  );
}

export default NavBar;