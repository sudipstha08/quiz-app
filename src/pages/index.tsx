import Router from 'next/router'
import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    Router.push('/home')
  }, [])

  return <div>Loading.....</div>
}
