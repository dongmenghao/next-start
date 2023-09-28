import { Card } from 'antd';
export default function Login() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="text-xl mb-2">登录</div>
      <Card style={{ width: 300 }} bodyStyle={{ padding: '2rem' }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}
