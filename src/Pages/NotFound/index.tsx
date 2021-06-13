import styles from './notfound.module.css';
import image from '../../Photos/page-not-found.jpg';

const NotFound = (props: any) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="Page Not Found" />
        </div>
    );
}

export default NotFound;