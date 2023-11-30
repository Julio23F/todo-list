import React from 'react'
import './liste.css'
import { IoClose } from "react-icons/io5"

export default function Listes({liste}) {
  return (
    <div class="card my-3">
        <div class="card-header">
            <span className='fs-5 fw-bold'>{liste.tache}</span>
            <button className='float-end suppr'><IoClose/></button>
        </div>
        <div class="card-body">
            <h6 class="card-title">{liste.description}</h6>
        </div>
    </div>
  )
}
