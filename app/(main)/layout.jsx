import React from "react";

// Configure this route to be dynamic to avoid static export issues
export const dynamic = 'force-dynamic';

const MainLayout = async ({ children }) => {
  return <div className="container mx-auto mt-24 mb-20">{children}</div>;
};

export default MainLayout;
