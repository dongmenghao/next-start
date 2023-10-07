'use client';
import { useSelector } from 'react-redux';
import { selectAuthState } from '@/store/modules/authSlice';

export default function AuthState() {
  const isLogin = useSelector(selectAuthState);
  return <div className="text-xl mb-2">登录: {isLogin ? '已登录' : '未登录'}</div>;
}
