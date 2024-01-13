"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";
import { useFormState } from "react-dom";
import { contactForm } from "@/lib/action";
import Image from "next/image";

const ContactForm = () => {
 
  const [state, formAction] = useFormState(contactForm, undefined);
  
  

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action={formAction} className={styles.form}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name and Surname"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
          {state?.error && <p className="text-red-500">{state.error}</p>}
          {state?.success && <p className="text-slate-50">Form Submitted successfully</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
