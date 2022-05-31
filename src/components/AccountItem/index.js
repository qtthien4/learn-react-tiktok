import React from 'react'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

export default function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/daacbd5ed400fd7157ef6e5dde9ced69~c5_100x100.jpeg?x-expires=1654160400&x-signature=4ZNoBmMENpkm4ppZxtWnf3FVqXI%3D" alt="hoa" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyen van a</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>thienvo</span>
            </div>
        </div>
    )
}
