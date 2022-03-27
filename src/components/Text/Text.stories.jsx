import React from 'react'
import Text from './Text';

export default {
  title: 'components/Text',
  component: Text
}

export const Primary = () => <Text type="primary">This is primary text</Text>
export const SuccessXXL = () => <Text type="success" size="xxlarge">This is Success XXLarge text</Text>
export const CustomText = () => <Text style={{fontSize: "80px", fontWeight: "bold", color: "orangered"}}>This is Custom Text</Text>

// export const Primary = () => <Text type="primary">This is primary text</Text>
