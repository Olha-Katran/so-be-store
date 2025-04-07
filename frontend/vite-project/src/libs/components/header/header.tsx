import React from 'react';

import logo from "../../../assets/logo/so-be-logo.png"

import styles from "./styles.module.scss";

const Header: React.FC = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_left_block}>
                <img src={logo} alt='logo' />
                <h1>so be</h1>
            </div>
            <div className={styles.header_right_block}>
                <button>shop</button>
                <button>our story</button>
                <span className={styles.header_divider} />
                <button>search</button>
                <button>profile</button>
                <button>settings</button>

            </div>
        </div>
    )
};

export default Header;