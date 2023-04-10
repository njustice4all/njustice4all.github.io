import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function H3({ children }: Props) {
  return <h3 className="mb-4 border-l-[10px] border-primary pl-2 text-lg font-bold">{children}</h3>;
}
