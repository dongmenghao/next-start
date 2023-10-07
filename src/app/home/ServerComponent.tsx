import Image from 'next/image';

export default function ServerComponent() {
  return (
    <div>
      <div>服务端组件</div>
      <Image src="/next.svg" width="100" height="100" alt="next" />
    </div>
  );
}
