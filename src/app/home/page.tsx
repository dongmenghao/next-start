'use client';
import type { NextPage } from 'next';
import { Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ServerComponent from './ServerComponent';
import ClientComponent from './ClientComponent';

const Home: NextPage = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push('/user/login');
  };

  return (
    <div>
      <ServerComponent />
      <div>
        <Link href="/user/login">Link跳转登录</Link>
        <Button onClick={handleLoginClick}>router跳转登录</Button>
      </div>
      <ClientComponent />
    </div>
  );
};

export default Home;
