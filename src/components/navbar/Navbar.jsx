import { auth } from '@/lib/auth'
import React from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link';
import Links from './links/Links';

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Blog</Link>
      <div className="">
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar
