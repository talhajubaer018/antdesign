import React from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, InputNumber, Radio, Rate, Row, Select, Slider, Switch, Upload } from 'antd';

const FormAD = () => {
  const { Option } = Select;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };
  return (
    <div>
      <Form
        size='large'
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Form
        name='validate_other'
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
        }}
      >
        <Form.Item label='Plain Text'>
          <span className='ant-form-text'>China</span>
        </Form.Item>
        <Form.Item
          name='select'
          label='Select'
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please select your country!',
            },
          ]}
        >
          <Select placeholder='Please select a country'>
            <Option value='china'>China</Option>
            <Option value='usa'>U.S.A</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name='select-multiple'
          label='Select[multiple]'
          rules={[
            {
              required: true,
              message: 'Please select your favourite colors!',
              type: 'array',
            },
          ]}
        >
          <Select mode='multiple' placeholder='Please select favourite colors'>
            <Option value='red'>Red</Option>
            <Option value='green'>Green</Option>
            <Option value='blue'>Blue</Option>
          </Select>
        </Form.Item>

        <Form.Item label='InputNumber'>
          <Form.Item name='input-number' noStyle>
            <InputNumber min={1} max={10} />
          </Form.Item>
          <span className='ant-form-text'> machines</span>
        </Form.Item>

        <Form.Item name='switch' label='Switch' valuePropName='checked'>
          <Switch />
        </Form.Item>

        <Form.Item name='slider' label='Slider'>
          <Slider
            marks={{
              0: 'A',
              20: 'B',
              40: 'C',
              60: 'D',
              80: 'E',
              100: 'F',
            }}
          />
        </Form.Item>

        <Form.Item name='radio-group' label='Radio.Group'>
          <Radio.Group>
            <Radio value='a'>item 1</Radio>
            <Radio value='b'>item 2</Radio>
            <Radio value='c'>item 3</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name='radio-button'
          label='Radio.Button'
          rules={[
            {
              required: true,
              message: 'Please pick an item!',
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value='a'>item 1</Radio.Button>
            <Radio.Button value='b'>item 2</Radio.Button>
            <Radio.Button value='c'>item 3</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item name='checkbox-group' label='Checkbox.Group'>
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value='A'
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  A
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value='B'
                  style={{
                    lineHeight: '32px',
                  }}
                  disabled
                >
                  B
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value='C'
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  C
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value='D'
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  D
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value='E'
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  E
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value='F'
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  F
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name='rate' label='Rate'>
          <Rate />
        </Form.Item>

        <Form.Item name='upload' label='Upload' valuePropName='fileList' getValueFromEvent={normFile} extra='longgggggggggggggggggggggggggggggggggg'>
          <Upload name='logo' action='/upload.do' listType='picture'>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item label='Dragger'>
          <Form.Item name='dragger' valuePropName='fileList' getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name='files' action='/upload.do'>
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>Click or drag file to this area to upload</p>
              <p className='ant-upload-hint'>Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormAD;