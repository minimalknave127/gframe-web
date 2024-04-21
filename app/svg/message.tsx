"use client";
import { motion } from "framer-motion";
export default function MessageSvg() {
  return (
    <motion.svg
      //   variants={{
      //     stop: {
      //       scale: 1,
      //     },
      //     play: {
      //       scale: 1.1,
      //     },
      //   }}
      className="font-inter w-full"
      width="275"
      height="171"
      viewBox="0 0 275 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        transition={{ duration: 0.8, ease: "anticipate" }}
        variants={{
          play: {
            y: "-100%",
          },
        }}
      >
        <g id="Frame 5118" clip-path="url(#clip0_432_1415)">
          <mask
            id="mask0_432_1415"
            //   style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="9"
            width="275"
            height="153"
          >
            <rect
              id="Rectangle 19"
              x="0.937988"
              y="9.99329"
              width="274"
              height="151.688"
              fill="url(#paint0_linear_432_1415)"
            />
          </mask>
          <g mask="url(#mask0_432_1415)">
            <g id="Group 93">
              <g id="text-message">
                <g id="Frame 5117" filter="url(#filter0_d_432_1415)">
                  <rect
                    x="46.5225"
                    y="57.502"
                    width="293"
                    height="74"
                    rx="8"
                    fill="white"
                  />
                  <rect
                    x="47.0225"
                    y="58.002"
                    width="292"
                    height="73"
                    rx="7.5"
                    stroke="#E2E8F0"
                  />
                  <g id="title">
                    <text
                      fill="black"
                      xmlSpace="preserve"
                      // style="white-space: pre"
                      font-family="inherit"
                      font-size="14"
                      font-weight="bold"
                      letter-spacing="-0.04em"
                    >
                      <tspan x="116.396" y="86.0929">
                        {" "}
                      </tspan>
                    </text>
                    <text
                      fill="black"
                      xmlSpace="preserve"
                      // style="white-space: pre"
                      fontFamily="inherit"
                      font-size="14"
                      font-weight="600"
                      letter-spacing="-0.04em"
                    >
                      <tspan x="56.9595" y="86.0929">
                        John Doe
                      </tspan>
                    </text>
                    <text
                      fill="#64748B"
                      xmlSpace="preserve"
                      // style="white-space: pre"
                      // font-family="inherit"
                      className="font-inter"
                      font-size="14"
                      font-weight="500"
                      letter-spacing="-0.04em"
                    >
                      <tspan x="119.076" y="86.0929">
                        p&#x159;idal koment&#xe1;&#x159;
                      </tspan>
                    </text>
                  </g>
                  <text
                    id="desc"
                    fill="#334155"
                    xmlSpace="preserve"
                    //   style="white-space: pre"
                    font-family="inherit"
                    font-size="14"
                    letter-spacing="-0.04em"
                  >
                    <tspan x="56.8287" y="113.093">
                      Super, d&#x11b;kuji za zpr&#xe1;vu! 👍
                    </tspan>
                  </text>
                </g>
              </g>
              <g id="Group 92">
                <g id="avatar">
                  <circle
                    id="Ellipse 126"
                    cx="12.2826"
                    cy="85.8372"
                    r="11.3446"
                    fill="#F1F5F9"
                  />
                  <text
                    id="M"
                    fill="black"
                    xmlSpace="preserve"
                    //   style="white-space: pre"
                    className="font-dmsans"
                    font-size="14"
                    font-weight="bold"
                    letter-spacing="-0.04em"
                  >
                    <tspan x="6.10303" y="90.6112">
                      M
                    </tspan>
                  </text>
                </g>
                <g id="avatar-line">
                  <path
                    id="Vector 8"
                    d="M12.2827 77.1722V19.2716"
                    stroke="#E2E8F0"
                  />
                  <path
                    id="Vector 9"
                    d="M12.2827 152.403V94.502"
                    stroke="#E2E8F0"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_432_1415"
            x="40.5225"
            y="55.502"
            width="305"
            height="86"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_432_1415"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_432_1415"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_432_1415"
            x1="0.93799"
            y1="85.8371"
            x2="274.938"
            y2="85.8371"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.0848034" stop-color="white" />
            <stop offset="0.615" stop-color="white" />
            <stop offset="0.91" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <clipPath id="clip0_432_1415">
            <rect
              width="274"
              height="170.05"
              fill="white"
              transform="translate(0.937988 0.812134)"
            />
          </clipPath>
        </defs>
      </motion.g>
      <motion.g
        transition={{ duration: 0.8, ease: "anticipate" }}
        variants={{
          stop: {
            y: "100%",
          },
          play: {
            y: "0%",
          },
        }}
      >
        <g id="Frame 5118" clip-path="url(#clip0_432_1415)">
          <mask
            id="mask0_432_1415"
            //   style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="9"
            width="275"
            height="153"
          >
            <rect
              id="Rectangle 19"
              x="0.937988"
              y="9.99329"
              width="274"
              height="151.688"
              fill="url(#paint0_linear_432_1415)"
            />
          </mask>
          <g mask="url(#mask0_432_1415)">
            <g id="Group 93">
              <g id="text-message">
                <g id="Frame 5117" filter="url(#filter0_d_432_1415)">
                  <rect
                    x="46.5225"
                    y="57.502"
                    width="293"
                    height="74"
                    rx="8"
                    fill="white"
                  />
                  <rect
                    x="47.0225"
                    y="58.002"
                    width="292"
                    height="73"
                    rx="7.5"
                    stroke="#E2E8F0"
                  />
                  <g id="title">
                    <text
                      fill="black"
                      xmlSpace="preserve"
                      // style="white-space: pre"
                      font-family="inherit"
                      font-size="14"
                      font-weight="bold"
                      letter-spacing="-0.04em"
                    >
                      <tspan x="116.396" y="86.0929">
                        {" "}
                      </tspan>
                    </text>
                    <text
                      fill="black"
                      xmlSpace="preserve"
                      // style="white-space: pre"
                      fontFamily="inherit"
                      font-size="14"
                      font-weight="600"
                      letter-spacing="-0.04em"
                    >
                      <tspan x="56.9595" y="86.0929">
                        Petr Palk
                      </tspan>
                    </text>
                    <text
                      fill="#64748B"
                      xmlSpace="preserve"
                      // style="white-space: pre"
                      // font-family="inherit"
                      className="font-inter"
                      font-size="14"
                      font-weight="500"
                      letter-spacing="-0.04em"
                    >
                      <tspan x="119.076" y="86.0929">
                        p&#x159;idal koment&#xe1;&#x159;
                      </tspan>
                    </text>
                  </g>
                  <text
                    id="desc"
                    fill="#334155"
                    xmlSpace="preserve"
                    //   style="white-space: pre"
                    font-family="inherit"
                    font-size="14"
                    letter-spacing="-0.04em"
                  >
                    <tspan x="56.8287" y="113.093">
                      Není vůbec zač. 😀
                    </tspan>
                  </text>
                </g>
              </g>
              <g id="Group 92">
                <g id="avatar">
                  <circle
                    id="Ellipse 126"
                    cx="12.2826"
                    cy="85.8372"
                    r="11.3446"
                    fill="#F1F5F9"
                  />
                  <text
                    id="M"
                    fill="black"
                    xmlSpace="preserve"
                    //   style="white-space: pre"
                    className="font-dmsans"
                    font-size="14"
                    font-weight="bold"
                    letter-spacing="-0.04em"
                  >
                    <tspan x="8.30303" y="90.6112">
                      P
                    </tspan>
                  </text>
                </g>
                <g id="avatar-line">
                  <path
                    id="Vector 8"
                    d="M12.2827 77.1722V19.2716"
                    stroke="#E2E8F0"
                  />
                  <path
                    id="Vector 9"
                    d="M12.2827 152.403V94.502"
                    stroke="#E2E8F0"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_432_1415"
            x="40.5225"
            y="55.502"
            width="305"
            height="86"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_432_1415"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_432_1415"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_432_1415"
            x1="0.93799"
            y1="85.8371"
            x2="274.938"
            y2="85.8371"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.0848034" stop-color="white" />
            <stop offset="0.615" stop-color="white" />
            <stop offset="0.91" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <clipPath id="clip0_432_1415">
            <rect
              width="274"
              height="170.05"
              fill="white"
              transform="translate(0.937988 0.812134)"
            />
          </clipPath>
        </defs>
      </motion.g>
    </motion.svg>
  );
}
