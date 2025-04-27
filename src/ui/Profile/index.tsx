import Image from "next/image"
import styles from './profile.module.scss'


const Profile = () => {
    return (
        <button className={styles.profile}>
            <Image src="/dashboard/user.svg" width={20} height={20} alt="Imagem do perfil do usuário"/>
        </button>
    )
}

export default Profile