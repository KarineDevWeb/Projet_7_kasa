import './collapse.scss'
import chevron from '../../assets/chevron.jpg';
import { useState } from 'react'; 
// ici, useState gére l'état de rétractation de "toogle"
// la fonction "collapse" affiche le titre et le contenu du composant
function Collapse({title, content}) {

    const [toogle, setToggle] = useState(false);
// le titre est affiché dans la balise h3 avec un onclick qui appelle la fonction 
// setToogle lorsque l'on clique. La fonction setToogle modifie la valeur de l'état "toogle" (rétractation)
    return (
        <>
        <div className='collapse'>
            <h3 className='collapse_title' onClick={() => setToggle(!toogle)}>
                {title}
                <img className={toogle ? 'chevron chevron_up' : 'chevron chevron_down'}
                src={chevron}
                alt="show content"/>
            </h3>
            <div className={toogle ? 'collapse_content' : 'collapse_content_hidden'}>
                {Array.isArray(content) ? content.map((article, index) => {
                    return (
                        <p key={index}>{article}</p>
                    )
                }) : content
            }
            </div>
        </div>
        </>
    )
}

export default Collapse;