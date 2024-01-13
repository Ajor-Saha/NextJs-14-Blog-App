"use client"

import React from 'react';
import { useFormState } from "react-dom";
import styles from "./login.module.css"
import Link from 'next/link';
import { login } from '@/lib/action';

const LoginForm = () => {
    const [state, formAction] = useFormState(login,undefined);

  return (
    <form action={formAction} className={styles.form}>
        <input type="text" name="username" id="username" placeholder='username' />
        <input type="password" name="password" id="password" placeholder='password' />
        <button>Login</button>
        {state?.error}
        <Link href="/register">
            {"Don't have an account?"} <b>Register</b>
        </Link>
    </form>
  )
}

export default LoginForm
