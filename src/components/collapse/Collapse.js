import './collapse.scss'
import chevron from '../../assets/chevron.jpg';
import { useState } from 'react';

function Collapse({title, content}) {

    const [toogle, setToggle] = useState(false);

    return (
        <>
        <div className='collapse'>
            <h3 className='collapse_title' onClick={() => setToggle(!toogle)}>
                {title}
                <img className={toogle ? 'chevron chevron-up' : 'chevron chevron_down'}
                src={chevron}
                alt="show content"/>
            </h3>
            <div className={toogle ? 'collapse_content' : 'collapse_content_hidden'}>
                {Array.isArray(content) ? content.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                }) : content
            }
            </div>
        </div>
        </>
    )
}

export default Collapse;