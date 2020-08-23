/*eslint react-hooks/exhaustive-deps: "off"*/
import React from 'react'

export default function useLockBodyScroll() {
  const isMobile = window.innerWidth < 500
  React.useLayoutEffect(() => {
    const originaloverflow = window.getComputedStyle(document.body).overflow
    const originalmarginRight = window.getComputedStyle(document.body).marginRight
    document.body.style.overflow = 'hidden';
    if (!isMobile) document.body.style.marginRight = '8px';
    return () => {
      document.body.style.overflow = originaloverflow;
      if (!isMobile) document.body.style.marginRight = originalmarginRight;
    }
  }, [])
}