import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

//armazenamento o repositorio
const Reposlist = ({ username }) => {
    const [repos, setRepos] = useState([]);

    //executa quano for iniciado [username]
    useEffect(() => {
        //faz a requisição dos arrays dentro o url
        fetch(`https://api.github.com/users/${username}/repos`)
            //retorno promise / retorna resposta
            .then(res => res.json())
            .then(resJson => {
                //add o conteudo dentro do repositorio
                setRepos(resJson);
            })
    }, [username]);


    return (
        <div className="container">
            <div className={styles.list}>
                {/* mapeamento do console elementos */}
                {/* {repos.map(repositorio => ( */}
                {repos.map(({ id, name, language, html_url }) => (
                    <ul className={styles.listItem} key={id}>
                        <li className={styles.listName}>
                            <b>nome:</b>
                            {name}
                        </li>
                        <li className={styles.listLanguage}>
                            <b>idioma:</b>
                            {language}
                        </li>
                        <a className={styles.listLink} target="_blank" href={html_url}>Visitar no github</a>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Reposlist;