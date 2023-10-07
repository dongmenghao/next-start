'use client';
import type { NextPage } from 'next';
import { selectAuthState, setAuthState } from '@/store/modules/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ServerComponent from './ServerComponent';
import ClientComponent from './ClientComponent';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const authState = useSelector(selectAuthState);
  const [isClient, setIsClient] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const handleLoginClick = () => {
    router.push('/user/login');
  };

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      <ServerComponent />
      <div>
        <Link href="/user/login">Link跳转登录</Link>
        <Button onClick={handleLoginClick}>router跳转登录</Button>
      </div>
      {/* <div className="mt-4" suppressContentEditableWarning>
        {authState ? 'Logged in' : 'Not Logged In'}
      </div> */}
      <ClientComponent />
    </div>
  );
};

export default Home;
