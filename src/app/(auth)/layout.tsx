import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div>
      <div className="text-center mt-12">20% off on first repair</div>
      {children}
    </div>
  );
};

export default layout;
