import React from 'react';

interface ApplicationLogoProps {
  className: string;
}

export default function ApplicationLogo({ className }: ApplicationLogoProps) {
  return <img className={className} src="/assets/images/logo.png" />;
}
