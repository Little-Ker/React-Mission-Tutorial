import React from 'react'
import clsx from 'clsx'
import styles from './navbar.module.sass'
import {
  Link, useLocation  
} from 'react-router-dom'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import CallIcon from '@mui/icons-material/Call'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import ContactsIcon from '@mui/icons-material/Contacts'

const linkList = [
  {
    name: '新人任務',
    to: '/home?PersonalWebsite',
    icon: <ContactsIcon />,
  },
  {
    name: '前端任務',
    to: '/home?Mission',
    icon: <FactCheckIcon />,
  },
  {
    name: '通訊錄',
    to: '/home?AddressBook',
    icon: <CallIcon />,
  },
  {
    name: '參考資料',
    to: '/home?Resource',
    icon: <ManageSearchIcon />,
  },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <div className={styles.navbar}>
      {linkList.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className={clsx(styles.link, location.pathname === `${link.to}` && styles.active)}>
          <div className={styles.linkIcon}>
            <div className={clsx(styles.linkActiveBg, (location.pathname === `${link.to}` && styles.active))}>
              <svg width="60" height="60" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M76.1814 139.273C94.2298 140.76 114.361 140.936 127.262 128.226C140.213 115.467 138.744 95.3199 139.243 77.1459C139.763 58.1893 142.187 37.8317 130.146 23.1813C117.259 7.50215 96.3101 -2.17593 76.1814 0.419312C57.4677 2.83211 47.837 22.1176 34.543 35.5076C21.3353 48.8108 0.372965 58.4034 0.00540438 77.1459C-0.363986 95.9818 18.2776 108.543 32.8772 120.45C45.557 130.791 59.8746 137.929 76.1814 139.273Z" fill="#A2C9F4"/>
              </svg>
            </div>
            <svg width="50" height="52" viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5408 52.8363H15.5292C1.67829 48.8805 1.87433 34.2977 2.0358 26.5149C2.19727 18.7319 3.68502 12.447 7.90602 8.16344C15.4947 1.09439 31.0756 2.0424 31.0756 2.0424C44.2923 2.10092 50.2202 6.46639 51.6849 7.83572C56.5516 12.131 59.2504 21.6344 57.4282 36.6853C55.6751 51.2681 44.8459 52.6727 42.9313 53.3046C42.101 53.5737 34.8236 55.4229 25.3437 54.6154M17.19 48.9155C17.19 48.9155 17.1439 58.1383 17.1439 58.9457C17.1323 60.1748 17.8012 60.2332 18.4125 59.613C20.2808 57.705 26.2779 50.3669 26.2779 50.3669C34.3164 50.8936 40.717 49.2784 41.409 49.0561C43.0237 48.5293 51.8 47.7569 53.2877 35.5851C54.8218 23.0271 52.7226 14.46 48.6055 10.8787C47.3599 9.73171 42.0086 6.31425 30.8335 6.26742C30.8335 6.26742 17.6052 5.38964 11.1814 11.3C7.60617 14.8813 6.39521 20.2065 6.26838 26.7021C6.14151 33.1978 5.44952 45.6153 17.19 48.9155ZM17.19 48.9155C17.1785 48.9155 17.1785 48.9155 17.19 48.9155Z" stroke="#072E4F" strokeWidth="3.04167" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className={styles.icon}>{link.icon}</div>
          </div>
          <p className={styles.label}>{link.name}</p>
        </Link>
      ))}
    </div>
  )
}
