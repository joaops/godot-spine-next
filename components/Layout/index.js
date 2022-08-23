import Search from '../Search'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

import styles from './Layout.module.scss'

export default function Layout({ children }) {
    // console.log(children.props.data)
    return (
        <div className={styles.container}>
            <nav className={styles.sidenav}>
                <Search />
            </nav>
            <div className={styles.content}>
                <Breadcrumb />
                {children}
                <Footer prev={children?.props?.data?.prev} next={children?.props?.data?.next} />
            </div>
        </div>
    )
}