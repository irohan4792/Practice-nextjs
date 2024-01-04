import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const navbar = () => {
    return (
        <nav className={styles.navhoon} >
        <ul>
          <Link href='/'><li className="tabs">Home</li></Link>
          <Link href='/About'><li className="tabs">About</li></Link>
          <Link href='/Blogs'><li className="tabs">Blogs</li></Link>
          <Link href='/Contact'><li className="tabs">Contact</li></Link>
        </ul>
      </nav>
    );
}

export default navbar;