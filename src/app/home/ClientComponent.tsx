'use client';

import { selectAuthState, selectCount, setAuthState } from '@/store/modules/authSlice';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { addAsync, addAsyncParam } from '@/store/modules/authSlice';
import { useAppDispatch } from '@/store';

export default function ClientComponent() {
  const authState = useSelector(selectAuthState);
  const count = useSelector(selectCount);
  const dispatch = useAppDispatch();
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
      <div className="mt-4">
        <Button onClick={async () => console.log(await dispatch(addAsync()))}>addAsync</Button>
        <div className="font-bold">{count}</div>
        <Button onClick={async () => console.log(await dispatch(addAsyncParam(2)))}>
          addAsyncParam
        </Button>
      </div>
    </>
  );
}
