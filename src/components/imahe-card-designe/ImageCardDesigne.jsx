import styles from "./ImageCardDesigne.module.css"

const ImageCardDesigne = ({imageUrl, onClick}) => {
    return ( 
        <div className={styles.imageCardDesigne} onClick={onClick}>
            <img className={styles.designeImage} src={imageUrl} alt="" />
        </div>
     );
}
 
export default ImageCardDesigne;