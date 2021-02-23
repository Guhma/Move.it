import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    return(
        <div className={styles.completedChallengesContianer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}