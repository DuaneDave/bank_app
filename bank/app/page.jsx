'use client';

import { useContext } from 'react';
import Link from 'next/link';

import userContext from '../store/userContext';

export default function Home() {
  const {as, getName, setUserName, userName} = useContext(userContext);

  console.log('this is a log', as);
  const handleName = async (e) => {
    e.preventDefault();
    setUserName(getName.current.value)
  }

  return (
    <main>
      <div className={`container`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>      <svg xmlns="http://www.w3.org/2000/svg" width="92" height="204" viewBox="0 0 92 204" fill="none">
  <path d="M90.5 203L1.5 58L34.5 1" stroke="url(#paint0_linear_102_651)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_651" x1="46" y1="0.999999" x2="91" y2="169.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4"/>
      <stop offset="0.157226" stop-color="#704EF4" stop-opacity="0.3"/>
      <stop offset="0.44297" stop-color="#704EF4" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#704EF4" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
</svg>
    
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="183" viewBox="0 0 68 183" fill="none">
  <path d="M66.5 182L2 67L44 1" stroke="url(#paint0_linear_102_652)" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_102_652" x1="11.8542" y1="1" x2="73.5131" y2="161.54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#704EF4" stop-opacity="0.03"/>
      <stop offset="0.246064" stop-color="#704EF4" stop-opacity="0.15"/>
      <stop offset="0.757101" stop-color="#704EF4" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#704EF4"/>
    </linearGradient>
  </defs>
</svg>
    <div className="homepage_container">
        <h1 className="homepage_header">Welcome to Web5-bank</h1>
        <h2 className="homepage_sub_header">Where you Can Send money anonymous and<br /> keep  your transaction secret</h2>
        { !userName ?
        <form action="" className="homepage_form" onSubmit={handleName}>
            <label htmlFor="name">Please Tell Us Your Nick-Name</label>
            <input type="text" className="name" placeholder='Your Nick-name' ref={getName} />
            <button className='form_btn' type='submit'>Enter</button>
        </form>
            :
        <button className="homepage_prof"><Link href='/my_profile'>My Profile</Link></button>
        }

    </div>
        </div>
    </main>
  );
}
