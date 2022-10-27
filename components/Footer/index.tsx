import Link from "next/link";
import styles from "./Footer.module.sass";
import cn from "classnames";

import { NavigationListFooter, LegalList } from "../../constants/navigation";

type FooterProps = {
    className?: string;
};

const Footer = ({ className }: FooterProps) => (
    <div className={cn(className, styles.footer)}>
        <div className="container-xl">
            <div className={styles.body}>
                <div className={styles.menu}>
                    {NavigationListFooter.map((link, index) => (
                        <Link href={link.url} key={index}>
                            <a className={styles.link}>{link.title}</a>
                        </Link>
                    ))}
                </div>
                {/* <Link href="/getting-started"> */}
                    <a className={cn("button-stroke button-sm", styles.button)} href="https://astrono.gitbook.io/docs/" target="_blank" rel="noreferrer">
                        Play now
                    </a>
                {/* </Link> */}
            </div>
            <div className={styles.foot}>
                <div className={styles.copyright}>© 2022 ASTRONO</div>
                <div className={styles.list}>
                    {LegalList.map((link, index) => (
                        // <Link href={link.url} key={index}>
                            <a className={styles.link} key={index} target="_blank" href={link.url} rel="noreferrer">{link.title}</a>
                        // </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
