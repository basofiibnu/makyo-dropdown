import React, { ReactNode, MouseEvent } from 'react';

type CardProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  className?: string;
  isOutlined?: boolean;
};

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  children,
  onClick,
  className,
  isOutlined = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={` ${
        isOutlined
          ? 'bg-[#e4e4e4] outline-none border-none'
          : 'border border-gray-300'
      } rounded-md py-1 px-2 hover:shadow-md transition-shadow ${className}`}
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
