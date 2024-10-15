import React from 'react'
import Link from 'next/link'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="menu flex gap-x-[14%] text-nowrap max-[1200px]:hidden ">
      <Link href="/cv-sablonlari" className="menu-item">
        CV Şablonları
      </Link>
      <Link href="/pricing" className="menu-item">
        Rehber
      </Link>
      <Link href="/sss" className="menu-item">
      Sıkça Sorulanlar
      </Link>
    </div>
  );
}

export default Navigation