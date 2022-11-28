import React from 'react'
import { ProductModels } from '../_core/models/ProductModels';

type Props = {
    arrProduct:ProductModels[]

}

export default function ProducList(props: Props) {
    let {arrProduct} = props
    console.log(arrProduct);
    
  return (
    <div>ProducList</div>
  )
}