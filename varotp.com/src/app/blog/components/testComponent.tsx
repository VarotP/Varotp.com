import React, { ReactNode } from "react";

type MySpecialComponentProps = {
  children: ReactNode;
};

const TestComponent = ({ children }: MySpecialComponentProps) => (
  <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 mb-4">
    {children}
  </div>
);

export default TestComponent;