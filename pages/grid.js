import React from "react";
import { Col, Divider, Row, Grid, Tag } from "antd";
import Link from "next/link";

const GridAD = () => {
  const style = {
    background: "#0092ff",
    padding: "8px 0",
    textAlign: "center",
    color: "white",
  };
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  return (
    <div>
      <Link href="/">
        <a className="back-btn">Go Back</a>
      </Link>
      <Row gutter={[16, 24]}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Responsive</Divider>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Row>
        <Col span={18} push={6}>
          <div style={style}>col-18 col-push-6</div>
        </Col>
        <Col span={6} pull={18}>
          <div style={style}>col-6 col-pull-18</div>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
      <Divider orientation="left">Percentage columns</Divider>
      <Row>
        <Col flex={2}>2 / 5</Col>
        <Col flex={3}>3 / 5</Col>
      </Row>
      {console.log(screens)}
      <>
        Current break point:{" "}
        {Object.entries(screens)
          .filter((screen) => !!screen[1])
          .map((screen) => (
            <Tag color="blue" key={screen[0]}>
              {screen[0]}
            </Tag>
          ))}
      </>
    </div>
  );
};

export default GridAD;
