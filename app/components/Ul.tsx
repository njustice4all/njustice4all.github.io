import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function Ul({ children }: Props) {
  return <ul className="mb-4 list-disc pl-6">{children}</ul>;
}
