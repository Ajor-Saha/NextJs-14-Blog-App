"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import styles from "./register.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { register } from "@/lib/action";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" id="username" placeholder="username" />
      <input type="email" name="email" id="email" placeholder="email" />
      <input type="password" name="password" id="password" placeholder="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
