import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./main-header.module.css";
import useAuth from "hooks/useAuth";

function MainHeader() {
  const { pathname } = useRouter();
  const { isLoggedIn, getUser } = useAuth();
  return (
    <div className="shadow-sm sticky top-0 left-0 right-0 bg-[#e9d5ff]">
      <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">CodeSol.com</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          {isLoggedIn() ? (
            <div>
              <p>Welcome {getUser().firstname}</p>
            </div>
          ) : (
            <li>
              {pathname.includes("register") ? (
                <Link href="login" className={styles.send}>
                  Log In
                </Link>
              ) : (
                <Link href="register" className={styles.btn}>
                  Sign Up
                </Link>
              )}
            </li>
          )}
          </ul>
        </nav>
      </header>
    </div>
    
  );
}

export default MainHeader;
