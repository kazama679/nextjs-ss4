"use client"
import { log } from 'console'
import React from 'react'
type Product={
  idProduct:string
}
type Props={
  params:Product
}

/*
  component trong nextjs có 2 loại
  1: client component: chạy đc ở môi trường trình duyệt
  2: server component: chỉ chạy được trong môi trường server
  mặc định khi tạo function thì nó mặc định là server component
*/ 

export default function page(props:Props) {
  console.log(props);
  // dùng destructoring
  const {params}=props
  return (
    <div>
      chi tiết sản phẩm là: {params.idProduct}
    </div>
  )
}
