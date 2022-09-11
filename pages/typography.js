import React, { useState } from "react";
import { Divider, Typography, Space } from "antd";
import { CheckOutlined, HighlightOutlined, SmileFilled, SmileOutlined } from "@ant-design/icons";

const typography = () => {
  const { Title, Paragraph, Text, Link, blockquote } = Typography;

  const blockContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eius iusto earum dolorum odio natus? Harum, est facilis fugiat quo deserunt rerum animi alias nisi veniam iste, quisquam doloribus consectetur.`;

  const [editableStr, setEditableStr] = useState("This is an editable text.");
  const [customIconStr, setCustomIconStr] = useState("Custom Edit icon and replace tooltip text.");

  const [ellipsis, setEllipsis] = useState(true);

  const EllipsisMiddle = ({ suffixCount, children }) => {
    const start = children.slice(0, children.length - suffixCount).trim();
    const suffix = children.slice(-suffixCount).trim();
    return (
      <Text
        style={{
          maxWidth: "20%",
        }}
        ellipsis={{
          suffix,
        }}
      >
        {start}
      </Text>
    );
  };

  return (
    <div className="container_white">
      <Typography>
        <article>
          <Link href="/">Go Back</Link>
        </article>
        <Paragraph
          editable={{
            onChange: setEditableStr,
          }}
        >
          {editableStr}
        </Paragraph>
        <Paragraph
          editable={{
            icon: <SmileFilled />,
            tooltip: "click to edit text",
            onChange: setCustomIconStr,
            enterIcon: <CheckOutlined />,
            maxLength: 50,
            autoSize: {
              maxRows: 5,
              minRows: 3,
            },
          }}
        >
          {customIconStr}
        </Paragraph>
        <Paragraph
          copyable={{
            icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
            tooltips: ["click here", "you clicked!!"],
          }}
        >
          Custom Copy icon and replace tooltips text.
        </Paragraph>
        <Paragraph
          ellipsis={
            ellipsis
              ? {
                  rows: 10,
                  expandable: true,
                  symbol: "more",
                  width: 50,
                }
              : false
          }
        >
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Paragraph>
        <EllipsisMiddle suffixCount={12}>In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.</EllipsisMiddle>
      </Typography>

      <Typography>
        <Title>Introduction</Title>
        <Divider />
        <Paragraph>In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.</Paragraph>
        <Paragraph>
          <Text strong>Uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development</Text>
        </Paragraph>
        <Paragraph>
          <Title level={3}>Guidelines and Resources</Title>
          <Divider />
        </Paragraph>
        <Paragraph>
          We supply a series of design principles, practical patterns and high quality design resources (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product prototypes beautifully and efficiently.
        </Paragraph>
      </Typography>
      <Typography>
        <Paragraph>
          Press <Text keyboard>Esc</Text> to exit...
        </Paragraph>
        <Paragraph>
          <blockquote>{blockContent}</blockquote>
          <pre>{blockContent}</pre>
        </Paragraph>
      </Typography>
      <Typography>
        <Space direction="vertical">
          <Text>Ant Design (default)</Text>
          <Text type="success">Ant Design (success)</Text>
          <Text disabled>Ant Design (disabled)</Text>
          <Text mark>Ant Design (mark)</Text>
          <Text code>Ant Design (code)</Text>
          <Text keyboard>Ant Design (keyboard)</Text>
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>
        </Space>
      </Typography>
      <Typography>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
        <Title level={5}>h5. Ant Design</Title>
      </Typography>
    </div>
  );
};

export default typography;
