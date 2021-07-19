import React, { useState } from "react"
import styles from '@styles/menu.module.css'
import Link from 'next/link'

export const MenuBar = () => {
    const [mode, setMode] = useState()
    
    return (
        <>
            <div className={styles.menubar}>
                <div className={styles.flex}>
                    <div id={styles.menuname}> sk. </div>
                    <div className={styles.linkDiv}>
                        <Link href="/blog">
                            <a className={styles.links}>blog</a>
                        </Link>
                        <Link href="/about">
                            <a className={styles.links}>about me</a>
                        </Link>
                        <div id={styles.toggleMode}> 🌙 </div>
                    </div>
                </div>
            </div>
        </>
    )
}