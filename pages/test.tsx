import React from 'react';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const data = new Date();
  console.log(data.toLocaleDateString());

  return <div>Test</div>;
}
