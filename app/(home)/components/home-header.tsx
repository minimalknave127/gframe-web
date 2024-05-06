"use client";

import FlakeIcon from "@/app/svg/flake";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import HomeRatingCard from "./home-rating-card";
import Link from "next/link";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms | 1000));

export default function HomeHeader() {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = [
    {
      title: "Firemní procesy",
    },

    {
      title: "Doprava",
      icon: "/svg/fleet.svg",
    },
    {
      title: "Sklady",
      icon: "/svg/inventory.svg",
    },
  ];

  useEffect(() => {
    let direction = 1;
    function init() {
      setCurrentIndex((prev) => {
        const next = prev + direction;
        if (next >= content.length - 1) {
          direction = -1;
        } else if (next <= 0) {
          direction = 1;
        }
        return next;
        // return next >= content.length ? 0 : next;
      });
    }
    const interval = setInterval(init, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header ref={scope} className="w-full mt-20">
      <Container className="flex items-center flex-col-reverse xl:flex-row gap-10">
        <div className="flex-1">
          <HomeRatingCard className="mb-2 hidden xl:flex" />
          <h1 className="xl:text-[80px] md:text-7xl text-4xl font-bold">
            <span className="overflow-hidden relative block">
              <motion.span
                animate={{
                  y: `${currentIndex * 100}%`,
                  //   //   y: ["0%", "105%"],
                  //   y: [
                  //     "0%",
                  //     ...content.slice(1).map((_, index) => `${index + 1}05%`),
                  //   ],
                }}
                transition={{
                  repeatDelay: 1,
                  duration: 1.5,
                  repeatType: "mirror",
                  ease: "anticipate",
                }}
                className="text-primary -changing-text block"
              >
                {content.slice(1).map((item, index) => (
                  <motion.span
                    animate={{
                      opacity: currentIndex - 1 === index ? 1 : 0,
                    }}
                    transition={{
                      repeatDelay: 1,
                      duration: 1.5,
                      repeatType: "mirror",
                      ease: "anticipate",
                    }}
                    key={index}
                    className="absolute flex items-center"
                    style={{
                      //   translate: `translateY(-${index + 2}05%)`,
                      transform: `translateY(-${index + 1}00%)`,
                    }}
                  >
                    <span> {item.title}</span>
                    {/* {item?.icon && (
                      <Image
                        className="inline-block w-[38px] h-[38px] xl:w-[80px] xl:h-[80px] ms-2"
                        src={item.icon}
                        alt="icon"
                        width={80}
                        height={80}
                      />
                    )} */}
                  </motion.span>
                ))}
                <motion.span
                  transition={{
                    repeatDelay: 1,
                    duration: 1.5,
                    repeatType: "mirror",
                    ease: "anticipate",
                  }}
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: currentIndex === 0 ? 1 : 0,
                  }}
                >
                  {content[0].title}
                </motion.span>
              </motion.span>
            </span>
            {/* <br /> */}
            na cloudu
          </h1>
          <h2 className="text-lg md:text-xl mt-2 spacing tracking-normal">
            Kompletní správa vaší společnosti na cloudu.
          </h2>
          <div className="mt-8">
            <Button asChild size="lg" className="w-full xl:w-auto">
              <Link href="https://app.gframe.app/auth/register">
                Začít využívat zdarma <ChevronRight className="ms-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="xl:ms-4 mt-4 xl:mt-0 w-full xl:w-auto"
            >
              <Link href="/blog/gframe-revolucni-system-nyni-zdarma-pro-nove-uzivatele">
                Zobrazit ceník
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex xl:justify-end justify-center w-[80%] max-h-[70vh]">
          <div className="relative w-full">
            {content.map((item, index) => {
              const startingPosition = index * 100;
              return (
                <motion.div
                  className="absolute z-10 w-full h-full"
                  key={index}
                  //   style={{ opacity: 0.5 }}
                  initial={{
                    // x: `${index === 0 ? 0 : 100}%`,
                    x: 0,
                    opacity: index === 0 ? 1 : 0,
                  }}
                  animate={{
                    // x: content.map(
                    //   (_, index) => `${startingPosition - 100 * index}%`
                    // ),
                    // x: `${
                    //   currentIndex < index ? 30 : currentIndex > index ? -30 : 0
                    // }%`,
                    opacity: currentIndex === index ? 1 : 0,
                  }}
                  transition={{
                    repeatDelay: 1,
                    duration: 1.5,
                    repeatType: "mirror",
                    ease: "anticipate",
                  }}
                >
                  <Image
                    src={`/heros/${1}.png`}
                    fill
                    className="object-contain w-full h-full z-10 inset-0"
                    alt="hero"
                  />
                </motion.div>
              );
            })}
            <motion.div
              className="text-primary"
              transition={{
                repeatDelay: 1,
                duration: 1.5,
                repeatType: "mirror",
                ease: "anticipate",
              }}
              // animate={{ rotate: [0, 90] }}
              animate={{
                // rotate: content.map((_, index) => index * 90),
                rotate: currentIndex * 90,
              }}
            >
              <FlakeIcon className="text-primary w-full aspect-square h-fit  -flake max-h-[60vh]" />
            </motion.div>
          </div>
        </div>
      </Container>
    </header>
  );
}
