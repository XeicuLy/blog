'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';

import './index.css';

export default function SearchField() {
  const [composing, setComposition] = useState(false);
  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);
  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === 'Enter' && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`;
      }
    },
    [composing],
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get('q') || '';
  return (
    <input
      type='search'
      name='q'
      ref={inputRef}
      className='search box-border h-10 w-600 rounded-2xl border border-solid border-gray-400 py-0 pl-12 pr-6 sm:mx-6 sm:my-0 sm:w-full'
      placeholder='Search...'
      onKeyDown={_onEnter}
      onCompositionStart={startComposition}
      onCompositionEnd={endComposition}
      defaultValue={defaultQuery}
    />
  );
}
