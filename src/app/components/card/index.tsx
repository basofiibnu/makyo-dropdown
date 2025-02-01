import React, { ReactNode, MouseEvent } from 'react';

type CardProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  className?: string;
};

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Card component that wraps children components with a styled div.
 *
 * @param {ReactNode} children - The content to be displayed inside the card.
 * @param {(e: MouseEvent<HTMLDivElement>) => void} [onClick] - Optional click handler for the card.
 * @param {string} [className] - Optional additional class names for custom styling.
 */

/******  118d123a-b981-419b-8ab8-e3105abc26f6  *******/
export const Card: React.FC<CardProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`border border-gray-300 rounded-md py-1 px-2 hover:shadow-lg transition-shadow ${className}`}
    >
      {children}
    </div>
  );
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * CardContent component for rendering child elements with text styling.
 *
 * @param {ReactNode} children - The content to be displayed within the card content.
 * @param {string} [className] - Optional additional class names for custom styling.
 */

/******  8938f8da-1b5f-4cfb-b3e4-24b390a1fabb  *******/
export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`text-gray-800 text-sm ${className}`}>
      {children}
    </div>
  );
};
