"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function Bai5() {
  const router = useRouter();

  const isActive = (path: string): boolean => router.pathname === path;

  return (
    <div>
      {/* bài 5 */}
      <Link href="/navbar/about" className={isActive('/navbar/about') ? 'active' : ''}>About</Link>
      <Link href="/navbar/contact" className={isActive('/navbar/contact') ? 'active' : ''}>Contact</Link>
      <Link href="/navbar/login" className={isActive('/navbar/login') ? 'active' : ''}>Login</Link>
      <Link href="/navbar/home" className={isActive('/navbar/home') ? 'active' : ''}>Home</Link>
      <style jsx>{`
        .active {
          color: red
        }
      `}</style>
    </div>
  );
}
