/*
 * @Descripttion:
 * @version:
 * @Author: liupf
 * @Date: 2021-02-01 15:57:34
 * @LastEditors: liupf
 * @LastEditTime: 2021-02-01 17:35:46
 */
import React, { useState } from 'react';
import { Page } from '@components';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Welcome(props) {
  return (
    <Page>
      <Example />
    </Page>
  );
}

export default Welcome;
