import { Button, PageHeader } from "antd";
import React from "react";

const PageheaderAD = () => {
  const routes = [
    {
      path: "index",
      breadcrumbName: "First-level Menu",
    },
    {
      path: "first",
      breadcrumbName: "Second-level Menu",
    },
    {
      path: "second",
      breadcrumbName: "Third-level Menu",
    },
  ];
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      />
      <PageHeader className="site-page-header" title="Title" breadcrumb={{ routes }} subTitle="This is a subtitle" />
    </div>
  );
};

export default PageheaderAD;
