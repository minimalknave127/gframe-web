"use client";

import { motion } from "framer-motion";

export default function BurgerButton({ burgerOpen }) {
  const variant = burgerOpen ? "burger-open" : "burger-closed";

  return (
    <motion.svg
      initial="burger-closed"
      animate={variant}
      width="28"
      height="21"
      viewBox="0 0 28 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="burger">
        <g id="burger-lines">
          <motion.path
            variants={{
              "burger-closed": {
                pathLength: 1,
                strokeWidth: 3,
                transition: {
                  delay: 0.4,
                },
              },
              "burger-open": {
                pathLength: 0,
                strokeWidth: 3,
              },
            }}
            id="Vector 10"
            d="M2.39331 6.65894H26"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
          <motion.path
            variants={{
              "burger-closed": {
                pathLength: 1,
                pathOffset: 0,
                strokeWidth: 3,
                transition: {
                  delay: 0.4,
                },
              },
              "burger-open": {
                pathLength: 1,
                pathOffset: 1,
                strokeWidth: 3,
              },
            }}
            id="Vector 11"
            d="M2.39331 14.6589H26"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
        </g>
        <g id="burger-cross">
          <motion.path
            variants={{
              "burger-open": {
                pathLength: 1,
                pathOffset: 0,
                strokeWidth: 3,
                transition: {
                  delay: 0.4,
                },
              },
              "burger-closed": {
                pathLength: 1,
                pathOffset: 1,
                strokeWidth: 3,
                transition: {
                  delay: 0.2,
                },
              },
            }}
            id="Vector 12"
            d="M5.85059 19.0052L22.543 2.3128"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
          <motion.path
            variants={{
              "burger-open": {
                pathLength: 1,
                strokeWidth: 3,
                transition: {
                  delay: 0.2,
                },
              },
              "burger-closed": {
                pathLength: 0,
                strokeWidth: 3,
              },
            }}
            id="Vector 13"
            d="M5.85059 2.31274L22.543 19.0052"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
        </g>
      </g>
    </motion.svg>
  );
}
