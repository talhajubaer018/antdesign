import { Button, Empty } from 'antd';

const EmptyAD = () => {
  return (
    <div>
      <Empty
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        imageStyle={{
          height: 60,
        }}
        description={
          <span>
            Customize <a href='#API'>Description</a>
          </span>
        }
      >
        <Button type='primary'>Create Now</Button>
      </Empty>
      <Empty description={false} />;
    </div>
  );
};

export default EmptyAD;
