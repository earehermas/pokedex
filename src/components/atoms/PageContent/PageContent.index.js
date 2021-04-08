import React from "react";
import { PageContentContainer } from "./PageContent.style";

const PageContent = (props) => {
  return <PageContentContainer>{props.children}</PageContentContainer>;
};

export default PageContent;
