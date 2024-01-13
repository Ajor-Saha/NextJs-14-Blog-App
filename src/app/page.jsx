import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import BlogPost from "@/components/blogPost/blogPost";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Thoughts Agency.</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>
              <Link href="/contact">Contact</Link>
            </button>
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill className={styles.brandImg} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
        </div>
      </div>
      <div className="lg:py-12">
        <BlogPost />
      </div>
    </div>
  );
}
