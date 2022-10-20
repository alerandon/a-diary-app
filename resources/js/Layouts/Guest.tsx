import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

interface GuestProps {
  children: React.ReactNode;
}

export default function Guest({ children }: GuestProps) {
  const [guestHeight, setGuestHeight] = useState(innerHeight);

  const topbarRef = useRef(null);

  useLayoutEffect(
    () => setGuestHeight(innerHeight - topbarRef.current.clientHeight),
    [],
  );

  return (
    <>
      <div ref={topbarRef} id="topbar" className="px-10 pt-6">
        <div className="w-24 h-20">
          <Link href="/">
            <ApplicationLogo className="fill-current text-gray-500" />
          </Link>
        </div>
      </div>
      <div
        id="guest-body"
        className="flex flex-col sm:justify-center items-center bg-gray-100"
        style={{ minHeight: `${guestHeight}px` }}
      >
        <div className="w-full sm:max-w-md mt-6 bg-white overflow-hidden sm:rounded-lg">
          {children}
        </div>
      </div>
    </>
  );
}
