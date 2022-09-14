import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import React from 'react';
const props2 = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },

  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
};

const props = {
  beforeUpload: (file) => {
    const isPNG = file.type === 'image/png';

    if (!isPNG) {
      message.error(`${file.name} is not a png file`);
    }

    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

const UploadAD = () => (
  <div>
    <Upload {...props2}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload png only</Button>
    </Upload>
  </div>
);

export default UploadAD;
