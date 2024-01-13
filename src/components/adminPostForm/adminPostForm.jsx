"use client"

import React from 'react';
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from '@/lib/action';

const AdminPostForm = ({ userId }) => {
    const [state, formAction] = useFormState(addPost,undefined);

  return (
    <form action={formAction} className={styles.container}>
        <h1>Add New Post</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" name="title" id="title" placeholder="Title" />
        <input type="text" name="slug" id="slug" placeholder='slug' />
        <input type="text" name="img" id="img" placeholder="img" />
        <textarea type="text" name="desc" id="desc" placeholder="desc" rows="10"></textarea>
        <button>Add</button>
        {state?.error}
    </form>
  )
}

export default AdminPostForm
