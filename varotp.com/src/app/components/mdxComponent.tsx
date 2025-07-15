// components/mdxComponents.js
import { JSX, ClassAttributes, HTMLAttributes } from 'react';

export const mdxComponents = {
  // You can also override default tags:
  h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-3xl font-extrabold mb-4" {...props} />,
  h2: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-bold mb-3" {...props} />,
  h3: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-xl font-semibold mb-2" {...props} />,
  p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => {
    // If the paragraph only contains &nbsp;, render it as an empty paragraph with height
    if (props.children === '&nbsp;') {
      return <p className="text-lg leading-relaxed mb-2 h-6" />;
    }
    return <p className="text-lg leading-relaxed mb-2 whitespace-pre-wrap" {...props} />;
  },
  strong: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) => <strong className="font-bold" {...props} />,
  // ...add more as needed
};