"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import './products.css'

export default function Products() {
  const pathName=usePathname();
  console.log('giá trị:',pathName);
  return (
    <div>
      <Link className={pathName==='/products/menmen'?"active":""} href={"/products/menmen"}>Mèn mén</Link>
      <Link className={pathName==='/products/iphone'?"active":""} href={"/products/iphone"}>Iphone</Link>
    </div>
  )
}
