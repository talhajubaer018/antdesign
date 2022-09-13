import { Button, message, Steps } from "antd";
import React, { useState } from "react";
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";

const StepsAD = () => {
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: "First",
      content: "First-content",
      description: 'description'
    },
    {
      title: "Second",
      content: "Second-content",
      description: 'description'
    },
    {
      title: "Last",
      content: "Last-content",
      description: 'description'
    },
  ];
  const { Step } = Steps;

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };
  return (
    <div>
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <Steps>
        <Step status="finish" title="Login" icon={<UserOutlined />} />
        <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} />
      </Steps>

      <div>
        <Steps labelPlacement="vertical" onChange={onChange} progressDot  status="error" direction="vertical" current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} description={item.description} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success("Processing complete!")}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepsAD;
