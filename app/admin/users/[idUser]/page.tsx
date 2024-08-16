import React from 'react'

export default function page(props:any) {
  const {params}=props
  return (
    <div>
      chi tiết user là: {params.idUser}
    </div>
  )
}
