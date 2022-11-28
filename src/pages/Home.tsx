import React, { useState } from 'react'
import ProducList from '../components/ProducList';
import { ProductModels } from '../_core/models/ProductModels';

type Props = {}

let arrProduct: ProductModels[] = [
    {
        id: 1,
        name:"SP1",
        avatar: "https://picsum.photos/200/300",
        price: "20$"
    },
    {
        id: 2,
        name:"SP1",
        avatar: "https://picsum.photos/200/300",
        price: "20$"
    }
]

export default function Home({}: Props) {
    // generic
   let [number,setNumber] =useState<number>(1)
  return (
    <div>
        <p className='btn btn-danger'>Home</p>
        <ProducList arrProduct={arrProduct} />
    </div>
  )
}
