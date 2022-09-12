import React from 'react'

import { Button } from 'antd'
import Link from 'next/link';

const ButtonAD = () => {
  return (
    <div className='container'>
      <Link href='/'><a className='back-btn'>Go Back</a></Link>
      <Button type="primary">Primary Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  )
}

export default ButtonAD