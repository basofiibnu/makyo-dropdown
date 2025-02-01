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
