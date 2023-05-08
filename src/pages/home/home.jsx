import React, { useState } from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./home.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxBannerLayer } from "react-scroll-parallax";
import College from "../../assets/college4.JPG";
import { Flip } from "react-reveal";
import Gif from "../../assets/code.gif";
import { Button } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi2";
import designGif from "../../assets/Gifs/design.gif";
import codeGif from "../../assets/Gifs/job.gif";
import deployGif from "../../assets/Gifs/tick.gif";
import photo from "../../assets/alan2.jpg";

import parallaxImage from "../../assets/parallax.png";
export default function Home(props) {
  const [currentGif, setcurrentGif] = useState(Gif);
  const [currentStyle, setcurrentStyle] = useState(
    "h-full bg-black w-full overflow-hidden flex flex-col lg:flex-row"
  );
  const Source1 = require("../../assets/college4.JPG");
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const onMouseOver = (event) => {
    const el = event.target;
    let colorhex = [
      "#7AF377",
      "#3498DB",
      "#F1C530",
      "#F29C29",
      "#8E44AD",
      "#4AA086",
      "#E74C3C",
      "#65CC71",
      "#D3541B",
      "#EB4367",
      "#74F7D9",
      "#DDA8FC",
    ];
    el.style.color = colorhex[Math.floor(Math.random() * 12)];
  };

  const onMouseOut = (event) => {
    const el = event.target;
    let black = "#FFF";
    el.style.color = black;
    el.style.transition = "0.3s";
  };

  return (
    <div className="">
      <div className="min-w-screen flex relative min-h-screen bg-black  lg:max-w-screen ">
        <Particles
          className="h-full w-full absolute  justify-center z-1 "
          height="100%"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: { value: "#567698" },
              image: "linear-gradient(180deg, #283E51 0%, #0A2342 100%)",
              position: "",
              repeat: "",
              size: "",
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: { color: { value: "#fff" }, opacity: 1 },
              enable: false,
            },
            backgroundMode: { enable: false, zIndex: -1 },
            detectRetina: true,
            infection: {
              cure: false,
              delay: 0,
              enable: false,
              infections: 0,
              stages: [],
            },
            interactivity: {
              events: {
                onClick: { enable: true, mode: "repulse" },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: { enable: false, force: 2, smooth: 10 },
                },
                resize: true,
              },
              modes: {
                attract: { distance: 200, duration: 0.4, speed: 1 },
                bounce: { distance: 200 },
                bubble: { distance: 250, duration: 2, opacity: 0, size: 0 },
                connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
                grab: {
                  distance: 400,
                  links: { blink: false, consent: false, opacity: 1 },
                },
                light: {
                  area: {
                    gradient: {
                      start: { value: "#ffffff" },
                      stop: { value: "#000000" },
                    },
                    radius: 1000,
                  },
                  shadow: { color: { value: "#000000" }, length: 2000 },
                },
                push: { quantity: 4 },
                remove: { quantity: 2 },
                repulse: { distance: 400, duration: 0.4, speed: 1 },
                slow: { factor: 3, radius: 200 },
                trail: { delay: 1, quantity: 1 },
              },
            },
            manualParticles: [],
            motion: { disable: false, reduce: { factor: 4, value: false } },
            particles: {
              bounce: {
                horizontal: {
                  random: { enable: false, minimumValue: 0.1 },
                  value: 1,
                },
                vertical: {
                  random: { enable: false, minimumValue: 0.1 },
                  value: 1,
                },
              },
              collisions: {
                bounce: {
                  horizontal: {
                    random: { enable: false, minimumValue: 0.1 },
                    value: 1,
                  },
                  vertical: {
                    random: { enable: false, minimumValue: 0.1 },
                    value: 1,
                  },
                },
                enable: false,
                mode: "bounce",
              },
              color: {
                value: "#ffffff",
                animation: { enable: false, speed: 1, sync: true },
              },
              life: {
                count: 0,
                delay: {
                  random: { enable: false, minimumValue: 0 },
                  value: 0,
                  sync: false,
                },
                duration: {
                  random: { enable: false, minimumValue: 0.0001 },
                  value: 0,
                  sync: false,
                },
              },
              links: {
                blink: false,
                color: { value: "#ffffff" },
                consent: false,
                distance: 150,
                enable: false,
                frequency: 1,
                opacity: 0.4,
                shadow: { blur: 5, color: { value: "#00ff00" }, enable: false },
                triangles: { enable: false, frequency: 1 },
                width: 1,
                warp: false,
              },
              move: {
                angle: { offset: 45, value: 90 },
                attract: { enable: false, rotate: { x: 600, y: 600 } },
                direction: "none",
                distance: 0,
                enable: true,
                gravity: { acceleration: 9.81, enable: false, maxSpeed: 50 },
                noise: {
                  delay: {
                    random: { enable: false, minimumValue: 0 },
                    value: 0,
                  },
                  enable: false,
                },
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
                random: true,
                size: false,
                speed: 1,
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: { value: "#000000" },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: { enable: true, area: 800, factor: 1000 },
                limit: 0,
                value: 160,
              },
              opacity: {
                random: { enable: true, minimumValue: 1 },
                value: 1,
                animation: {
                  enable: true,
                  minimumValue: 0,
                  speed: 1,
                  sync: false,
                },
              },
              reduceDuplicates: false,
              rotate: {
                random: { enable: false, minimumValue: 0 },
                value: 0,
                animation: { enable: false, speed: 0, sync: false },
                direction: "clockwise",
                path: false,
              },
              shadow: {
                blur: 0,
                color: { value: "#000000" },
                enable: false,
                offset: { x: 0, y: 0 },
              },
              shape: {
                options: {
                  polygon: { nb_sides: 5 },
                  star: { nb_sides: 5 },
                  image: {
                    src: "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                    height: 100,
                  },
                  images: {
                    src: "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                type: "circle",
              },
              size: {
                random: { enable: true, minimumValue: 1 },
                value: 3,
                animation: {
                  destroy: "none",
                  enable: false,
                  minimumValue: 0.3,
                  speed: 4,
                  startValue: "max",
                  sync: false,
                },
              },
              stroke: {
                width: 0,
                color: {
                  value: "#000000",
                  animation: { enable: false, speed: 1, sync: true },
                },
              },
              twinkle: {
                lines: { enable: false, frequency: 0.05, opacity: 1 },
                particles: { enable: false, frequency: 0.05, opacity: 1 },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: false,
            themes: [],
          }}
        />{" "}
        <div className="z-10 text-xl h-screen lg:h-screen  w-full flex-col flex absolute overflow-hidden">
          <div className="h-[10%]   w-full flex">
            <div className="w-[30%] h-full flex my-auto  text-xl font-Jost text-white">
              <Slide duration={1000} left>
                <div className="mx-auto my-auto flex  text-4xl "> Alan</div>
              </Slide>{" "}
            </div>
          </div>
          <div className="w-full h-full    lg:h-full">
            <div className="w-full flex h-[80%] m-auto lg:h-full mx-auto">
              <div className="h-[90%] w-full my-auto flex">
                <Zoom duration={1500}>
                  <div className="m-auto font-Jost text-white   lg:text-[140px]">
                    <div
                      className="text-[70px] lg:text-[140px] mb-10"
                      onMouseEnter={(event) => onMouseOver(event)}
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      React
                    </div>
                    <div
                      className="text-[70px] lg:mt-[15%] lg:text-[140px]"
                      onMouseEnter={(event) => onMouseOver(event)}
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      Developer
                    </div>
                    <div className="bg-inherit">
                      <Button
                        pill={true}
                        size={"xl"}
                        className="bg-inherit mt-[15%] lg:mt-[10%]"
                        gradientDuoTone="cyanToBlue"
                      >
                        About Me
                        <HiArrowRight className="h-6 w-6 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-full lg:h-[600px] hidden lg:flex">
        <ParallaxBanner
          className="visibility:hidden"
          style={{ height: "600px" }}
        >
          <div className="absolute z-10 flex justify-center m-auto visibility:hidden  w-full h-full">
            <Zoom>
              <div className="my-auto visibility:hidden flex-col flex text-white font-Jost text-[50px] lg:text-[100px]">
                Made with
                <Flip delay={200} left>
                  <div
                    className="flex mx-auto"
                    onMouseEnter={(event) => onMouseOver(event)}
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    IHRD
                  </div>
                </Flip>
              </div>
            </Zoom>
          </div>
          <ParallaxBannerLayer speed={-15}>
            <img
              src={require("../../assets/college4.JPG")}
              alt="Sahara Desert landscape"
              loading="lazy"
            />
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>

      <div className="lg:w-full lg:h-[600px] lg:hidden  h-[600px] ">
        
        <ParallaxBanner
          className="visibility:hidden"
          style={{ height: "600px" }}
        >
          <div className="absolute z-10 flex justify-center m-auto visibility:hidden  w-full h-full">
            <Zoom>
              <div className="my-auto visibility:hidden flex flex-col text-white font-Jost text-[50px] ">
                Carved By &#160;
                <Flip delay={200} left>
                  <div
                    className="flex "
                    onMouseEnter={(event) => onMouseOver(event)}
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    IHRD
                  </div>
                </Flip>
              </div>
            </Zoom>
          </div>
          <ParallaxBannerLayer speed={-15}>
            <img
              src={parallaxImage}
              className="w-full"
              alt="Sahara Desert landscape"
              loading="lazy"
            />
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
      <div className={currentStyle}>
        <div className="text-white w-full flex my-auto lg:w-[50%]">
          <div className=" lg:h-[70%] lg:w-[70%] m-auto flex ">
            <img
              src={currentGif}
              style={{ transition: "0.3s" }}
              alt="My College mates"
            />
          </div>
        </div>
        <div className="w-full flex h-full lg:ml-auto lg:w-[50%]  my-auto">
          <div className="m-auto">
            <Fade left onc>
              <div
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text lg:h-[20.3%]  m-auto flex mx-auto justify-center "
                onMouseOver={() => {
                  setcurrentStyle(
                    "h-full bg-[#ffb565] w-full  flex flex-col lg:flex-row transition duration-200 "
                  );
                  setcurrentGif(designGif);
                }}
              >
                <div className="my-auto font-Jost text-[5rem] lg:text-[100px]">
                  Design
                </div>
              </div>
            </Fade>
            <Fade left>
              <div
                className=" h-[15.3%]  m-auto flex mx-auto justify-center bg-gradient-to-r from-[#C6EA8D] to-[#FE90AF] bg-clip-text text-transparent "
                onMouseOver={() => {
                  setcurrentStyle(
                    "h-full bg-[#1e1842] w-full  flex flex-col lg:flex-row transition duration-200 "
                  );
                  setcurrentGif(codeGif);
                }}
              >
                <div className="my-auto font-Jost text-[5rem] lg:text-[100px]">
                  Code
                </div>
              </div>
            </Fade>
            <Fade left>
              <div
                className=" h-[15.3%]  m-auto flex mx-auto justify-center bg-gradient-to-r from-[#D38312] to-[#A83279] bg-clip-text text-transparent"
                onMouseOver={() => {
                  setcurrentStyle(
                    "h-full bg-[#ffff] w-full  flex flex-col lg:flex-row transition duration-200 "
                  );
                  setcurrentGif(deployGif);
                }}
              >
                <div className="my-auto font-Jost text-[5rem] lg:text-[100px]">
                  Deploy
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="lg:h-[100vh] h-[1400px] w-full 	overflow-hidden bg-black">
        <div className="text-white absolute z-10">
          <div className="w-[100vw] h-[100vh] mx-auto  flex">
            <div className="m-auto w-[80vw] h-[1350px] mt-15 flex lg:h-[80vh] rounded-xl glass">
              <div className="flex lg:h-full  flex-col lg:flex-row ">
                <div className="w-[100%] lg:w-[40%] inline-block mb-4  lg:border-r-2 lg:h-[100%]">
                  <div className="flex h-full w-full ">
                    <div className="m-auto ">
                      {" "}
                      <div className="bm-pl ">
                        <div className="z-10 w-full h-[50%] lg:h-full absolute">
                          <div className=" flex h-full w-full">
                            <div className="m-auto flex ">
                              <img
                              className="m-auto mt-12 lg:mt-0"
                                style={{ borderRadius: "50%" }}
                                src={photo}
                                width={250}
                                height={250}
                              />
                            </div>
                          </div>{" "}
                        </div>
                        <div className="bm-pl__blob bm-pl__blob--r"></div>
                        <div className="bm-pl__blob bm-pl__blob--g"></div>
                        <div className="bm-pl__blob bm-pl__blob--b"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[60%] w-full  h-full">
                  <div className="flex w-[60%] -b-2 mx-auto h-[10%]">
                    <div className="m-auto font-Jost text-2xl  lg:text-4xl ">
                      About Me
                    </div>
                  </div>
                  {/* bg-[#46dace] */}
                  <div className="flex flex-col mx-auto w-[90%] h-[90%]">
                    <div className="glass2 flex rounded-xl  h-[15%]">
                      <div className="text-black font-semibold font-Jost mx-3 my-auto text-2xl text-center lg:text-[41px] rounded-xl">
                        React developer based in India
                      </div>
                    </div>
                    <div className="w-full text-black h-full mb-4 rounded-xl glass2 mt-4">
                      <div
                        className="lg:text-xl text-lg font-Jost font-semibold mt-8 mx-4">
                        Heyy,I'm Alan</div>
                      <div className="text-xl text-black font-Jost font-semibold mx-4 mt-2">
                        Hello and welcome to my website!
                        I am a graduate and a React developer who's creating
                        responsive and user-friendly web applications for the
                        past 1 year. I have a passion for building elegant and
                        efficient solutions that enhance user experience and
                        solve real-world problems. Throughout my career, I have
                        developed custom applications and integrated APIs to
                        deliver high-quality products. My expertise in React,
                        Redux, JavaScript Tailwind CSS, and other front-end
                        technologies has enabled me to create dynamic and
                        scalable web applications that are both visually
                        appealing and functional. 
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-10 mt-3">
          <div className="blob-1"></div>
          <div className="blob-2"></div>
          <div className="blob-3"></div>
          <div className="blob-4"></div>
          <div className="blob-5"></div>
          <div className="blob-6"></div>
          <div className="blob-7"></div>
          <div className="blob-8"></div>
          <div className="blob-9"></div>
          <div className="blob-10"></div>
        </div>
        <div className="flex justify-between mb-10">
          <div className="blob-3"></div>
          <div className="blob-2"></div>
          <div className="blob-1"></div>

          <div className="blob-5"></div>
          <div className="blob-4"></div>

          <div className="blob-6"></div>
          <div className="blob-8"></div>
          <div className="blob-7"></div>

          <div className="blob-10"></div>
          <div className="blob-9"></div>
        </div>
        <div className="flex justify-between mb-10">
          <div className="blob-4"></div>
          <div className="blob-8"></div>

          <div className="blob-7"></div>
          <div className="blob-2"></div>
          <div className="blob-3"></div>
          <div className="blob-6"></div>
          <div className="blob-9"></div>
          <div className="blob-10"></div>

          <div className="blob-1"></div>
          <div className="blob-5"></div>
        </div>
        <div className="flex justify-between mb-10">
          <div className="blob-8"></div>

          <div className="blob-2"></div>
          <div className="blob-1"></div>

          <div className="blob-6"></div>
          <div className="blob-7"></div>
          <div className="blob-4"></div>

          <div className="blob-5"></div>

          <div className="blob-9"></div>
          <div className="blob-3"></div>

          <div className="blob-10"></div>
        </div>
        <div className="flex justify-between mb-10">
          <div className="blob-10"></div>
          <div className="blob-5"></div>

          <div className="blob-1"></div>
          <div className="blob-2"></div>
          <div className="blob-4"></div>
          <div className="blob-6"></div>
          <div className="blob-8"></div>

          <div className="blob-7"></div>
          <div className="blob-9"></div>
          <div className="blob-3"></div>
        </div>
        <div className="flex justify-between mb-10">
          <div className="blob-1"></div>
          <div className="blob-10"></div>
          <div className="blob-4"></div>
          <div className="blob-7"></div>

          <div className="blob-2"></div>
          <div className="blob-3"></div>
          <div className="blob-6"></div>
          <div className="blob-8"></div>
          <div className="blob-9"></div>
          <div className="blob-5"></div>
        </div>

        {/* <div className="w-full h-[10%] flex-col">Education</div> */}
      </div>
    </div>
  );
}
