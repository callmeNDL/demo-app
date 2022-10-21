import React from 'react';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const data = new Date();
  console.log(data.toLocaleDateString());

  const a = { name: '1' };
  const b = { name: '1' };
  const c = a;
  const d = a;
  console.log(c == d);

  return <div>Test</div>;
}
