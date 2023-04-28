import { Register } from "../ui-components";
import React, { useEffect, useState,MyApp, useRef } from 'react'

export default function RegisterPage(props) {

    return (
        <div className='Login' style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 1000
          }}>
  
          <Register/>
          </div>
    )
        }
        