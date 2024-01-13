"use server"

import { signIn, signOut } from "./auth";
import { Contact, Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";


export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img} = Object.fromEntries(formData)

  try {
      connectToDb();
      const newPost = new Post({
          title,
          desc,
          slug,
          userId,
          img,
      })

      await newPost.save();
      console.log("saved to db");
      revalidatePath("/blog");
      revalidatePath("/admin");
  } catch (err) {
      console.log(err);
      return { error: "Something went wrong!"};
  }
}




export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData)

  try {
      connectToDb();
      const newUser = new User({
          username,
          email,
          password,
          img,
      })

      await newUser.save();
      console.log("saved to db");
      revalidatePath("/admin");
  } catch (err) {
      console.log(err);
      return { error: "Something went wrong!"};
  }
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
      connectToDb();
      await Post.deleteMany({ userId: id});
      await User.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/admin");
  } catch (err) {
      console.log(err);
      return { error: "Something went wrong!"};
  }
}

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
}

export const handleLogout = async () => {
    "use server";
    await signOut();
};

export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
      Object.fromEntries(formData);
  
    if (password !== passwordRepeat) {
      return { error: "Passwords do not match" };
    }
  
    try {
      connectToDb();
  
      const user = await User.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
};

export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      console.log(err);
  
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
};
  
export const contactForm = async (previousState, formData) => {
  const { name, email, phone, message } =Object.fromEntries(formData);
  try {
    connectToDb();
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await newContact.save();
    console.log("Contact form saved to the database");
    return { success: true};
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!"};
  }
}

export const deleteContact = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Contact.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
}


