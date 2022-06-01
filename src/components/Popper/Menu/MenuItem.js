import React from 'react'
import Button from '~/components/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

export default function MenuItem({ data, onClick }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')} onClick={onClick}>{data.title}</Button>
    )
}
