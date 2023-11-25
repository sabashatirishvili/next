import React from 'react'
import styles from './navbar.module.css'

function Navbar() {
  const links = [
    {id:1,
     title: "Home"
    },
    {id:2,
      title: "About"
     },
     {id:3,
      title: "Portfolio"
     },
     {id:4,
      title: "Contact"
     },
     {id:5,
      title: "About us"
     },
     {id:6,
      title: "Blog"
     },
     {id:7,
      title: "Dashboard"
     },
  ]


  return (
    <div className={styles.main}>
      Main
      <div>
        {links.map((link) => (
          <div key={link.id}
               className={styles.link}
          >
            {link.title}
            </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar