import { Alert, Button } from 'antd';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import React, { useState } from 'react';

const onClose = (e) => {
  console.log(e, 'I was closed.');
};

const AlertAD = () => {
  const ThrowError = () => {
    const [error, setError] = useState();

    const onClick = () => {
      setError(new Error('An Uncaught Error'));
    };

    if (error) {
      throw error;
    }

    return (
      <Button danger onClick={onClick}>
        Click me to throw a error
      </Button>
    );
  };
  return (
    <>
      <Alert message='Warning text' banner />
      <Alert showIcon message='Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text' type='warning' closable onClose={onClose} />
      <Alert
        showIcon
        message='Error Text'
        description='Error Description Error Description Error Description Error Description Error Description Error Description'
        type='error'
        closable
        onClose={onClose}
      />
      <Alert message='Success Tips' type='success' showIcon />
      <Alert message='Success Tips' description='Detailed description and advice about successful copywriting.' type='success' showIcon />
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    </>
  );
};

export default AlertAD;
