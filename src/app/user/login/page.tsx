'user client';

import { Card } from 'antd';
import AuthState from './AuthState';

export default function Login() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <AuthState />
      <Card style={{ width: 300 }} bodyStyle={{ padding: '2rem' }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}
