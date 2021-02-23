import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Guhma.png" alt="Ghma" />
            <div>
                <strong>Gustavo Almeida</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>
                Level 1
                </p>
            </div>
        </div>
    );
}