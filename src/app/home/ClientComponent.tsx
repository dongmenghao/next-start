'use client';

import { selectAuthState, setAuthState } from '@/store/modules/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { useEffect, useState } from 'react';

export default function ClientComponent() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <></>;

  return (
    <>
      <div className="mt-4">{authState ? 'Logged in' : 'Not Logged In'}</div>
      <Button
        onClick={() => (authState ? dispatch(setAuthState(false)) : dispatch(setAuthState(true)))}
      >
        <span>{authState ? 'Logout' : 'LogIn'}</span>
      </Button>
    </>
  );
}
