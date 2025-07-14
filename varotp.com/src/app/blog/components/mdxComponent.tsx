// components/mdxComponents.js
import { JSX, ClassAttributes, HTMLAttributes } from 'react';
import TestComponent from './testComponent';

export const mdxComponents = {
  TestComponent,
  // You can also override default tags:
  h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-3xl font-extrabold mb-4" {...props} />,
  p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => <p className="text-lg leading-relaxed mb-2" {...props} />,
  strong: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) => <strong className="font-bold" {...props} />,
  // ...add more as needed
};