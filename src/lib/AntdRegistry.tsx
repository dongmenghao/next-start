'use client';

import React from 'react';
import { createCache, extractStyle, StyleProvider, px2remTransformer } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';

const px2rem = px2remTransformer({
  rootValue: 10, // 10px = 1rem; @default 16
});


const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  ));
  return <StyleProvider cache={cache} transformers={[px2rem]}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
