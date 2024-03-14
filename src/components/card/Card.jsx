import styles from "./Card.module.css";

const Card = ({ backgroundColor, image, name }) => {
  return (
    <div style={{ backgroundColor: backgroundColor }} className={styles.card}>
      <img className={styles.cardImage} src={image} alt="" />
      <p className={styles.personName}>{name}</p>
    </div>
  );
};

export default Card;
