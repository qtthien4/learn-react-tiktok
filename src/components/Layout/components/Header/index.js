import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import Tippy from '@tippyjs/react';
import Menu from '~/components/Popper/Menu'
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image'
import { NotifiIcon, SendIcon } from '~/components/Icons'
import Seach from '../Search'


const cx = classNames.bind(styles)
const currentUser = true

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: "Language",
            data: [{
                type: "language",
                code: 'en',
                title: 'English'
            },
            {
                type: "language",
                code: 'vi',
                title: 'Tiêngs Việt'
            }]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]

export default function Header() {


    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem)
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'View Profile',
            to: '/@thien'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt='TikTok' />
                </div>

                <Seach />

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>

                            <Tippy content="Tin Nhắn" placement='bottom' delay={[0, 250]}>
                                <button className={cx('action-btn')}>
                                    <SendIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement='bottom' delay={[0, 250]}>
                                <button className={cx('action-btn')}>
                                    <NotifiIcon />
                                </button>
                            </Tippy>
                        </>


                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/daacbd5ed400fd7157ef6e5dde9ced69~c5_100x100.jpeg?x-expires=1654160400&x-signature=4ZNoBmMENpkm4ppZxtWnf3FVqXI%3D"
                                alt="nguyen van a" srcset="" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>

                        )}
                    </Menu>
                </div>
            </div>
        </header >
    )
}
