import styles from './Perfil.module.css'

//props da acesso as propriedades do obj
//exportando agora de: App.jsx

const Perfil = ({ username }) => {
// export default (props) => {
    // (props.nome) / (props.enedreco)

    // const usuario = {
    //     nome: 'benji del rei',
    //     avatar: 'https://github.com/b0kki.png'

        // export default ({ endereco, nome }) => {
                    //OR
        // const { endereco, nome } = props;
        // <img className='perfil-avatar' src={endereco} /
    

    return (
        <header className={styles.header}>
            {/*mostra o conteudo do obj como string
         {JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${username}.png`} />
            <h1 className={styles.name}>{username}</h1>
        </header>
    )
}

export default Perfil;