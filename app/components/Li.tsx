import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function Li({ children }: Props) {
  return <li className="mb-1">{children}</li>;
}
