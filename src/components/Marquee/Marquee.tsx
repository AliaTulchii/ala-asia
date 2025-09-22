import React from "react";
import FastMarquee from "react-fast-marquee";
import type { MarqueeProps as FastMarqueeProps } from "react-fast-marquee";
import "./marquee.scss";

type MarqueeWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const Marquee: React.FC<MarqueeWrapperProps> = ({
  className = "",
  ...props
}) => <div className={`marquee-wrapper ${className}`} {...props} />;

type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent: React.FC<MarqueeContentProps> = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}) => (
  <FastMarquee
    loop={loop}
    autoFill={autoFill}
    pauseOnHover={pauseOnHover}
    {...props}
  />
);

interface MarqueeFadeProps extends React.HTMLAttributes<HTMLDivElement> {
  side: "left" | "right";
}

export const MarqueeFade: React.FC<MarqueeFadeProps> = ({
  className = "",
  side,
  ...props
}) => (
  <div
    className={`marquee-fade ${
      side === "left" ? "fade-left" : "fade-right"
    } ${className}`}
    {...props}
  />
);

type MarqueeItemProps = React.HTMLAttributes<HTMLDivElement>;

export const MarqueeItem: React.FC<MarqueeItemProps> = ({
  className = "",
  ...props
}) => <div className={`marquee-item ${className}`} {...props} />;
