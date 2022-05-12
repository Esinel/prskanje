import styles from './styles.module.css'

function Card({ title, image, content }) {

    return (
        <div className={`${styles.frame}`}>
            <div className={`${styles.overlapGroup}`}>
                <div className={`${styles.rectangle199}`}></div>
                <div className={`${styles.synlighetOgBevisstgjring} valign-text-middle alfaslabone-normal-tarawera-20px`}>
                    {title}
                </div>
                <img
                    className={`${styles.vsSubscribeAndUnsubscribe}`}
                    src={image}
                />
                <p className={`${styles.fange} roboto-normal-nile-blue-13px`}>
                    {content}
                </p>
                <img className={styles.arrow} src={'icons/img/arrow.png'} />
            </div>
        </div>
    );
}

export default Card;
