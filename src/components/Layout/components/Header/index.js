import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Button from '~/components/Button'
import Tippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem'


const cx = classNames.bind(styles)

export default function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 2000)
    })

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt='TikTok' />
                </div>
                <Tippy content="Tim kiem"
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input placeholder='Search accounts and videos' spellCheck={false} />
                        <button className={cx("clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />


                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx("actions")}>
                    <Button text>Upload</Button>
                    <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>Log in</Button>
                </div>
            </div>
        </header>
    )
}
