import React from "react";
import RootLayout from "../Layouts/RootLayout";
import { NotFound } from "../components/Error/NotFound";

const NotFoundPage = () => {
  return (
    <RootLayout>
      <NotFound />
    </RootLayout>
  );
};

export default NotFoundPage;
