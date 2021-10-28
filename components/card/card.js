import styles from './card.module.scss'

const Card = (props) => {
    return (
        <div className={styles.card}>
            {props.name}<br />
            {props.owner.avatarUrl}<br />
            {props.owner.login}<br />
        </div>
    );
};

export default Card;
