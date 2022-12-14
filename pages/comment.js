import { Avatar, Button, Comment, Form, List, Tooltip } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import React, { useState } from 'react';
const data = [
  {
    actions: [<span key='comment-list-reply-to-0'>Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment('2016-11-22').subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment('2016-11-22').subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key='comment-list-reply-to-0'>Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment('2016-11-22').subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment('2016-11-22').subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];
const CommentList = ({ comments }) => (
  <List dataSource={comments} header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`} itemLayout='horizontal' renderItem={(props) => <Comment {...props} />} />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType='submit' loading={submitting} onClick={onSubmit} type='primary'>
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const CommentAD = () => {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([
        ...comments,
        {
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{value}</p>,
          datetime: moment('2016-11-22').fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <List
        className='comment-list'
        header={`${data.length} replies`}
        itemLayout='horizontal'
        dataSource={data}
        renderItem={(item) => (
          <li>
            <Comment actions={item.actions} author={item.author} avatar={item.avatar} content={item.content} datetime={item.datetime} />
          </li>
        )}
      />
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />}
          content={<Editor onChange={handleChange} onSubmit={handleSubmit} submitting={submitting} value={value} />}
        />
      </>
    </div>
  );
};

export default CommentAD;
