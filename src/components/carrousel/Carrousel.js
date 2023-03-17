import './carrousel.scss'
import ChevronRight from '../../assets/chevron_carrousel_right.png'
import ChevronLeft from '../../assets/chevron_carrousel_left.png'
import { useState } from 'react'

function Slide({imageSlide}) {

    const [currentIndex,setCurrentIndex]=useState(0)
// quand on arrive au dernier, on repart au premier
    const nextSlide=()=>{
        setCurrentIndex(currentIndex+1)
        if(currentIndex===imageSlide.length-1) 
          setCurrentIndex(0)  
    }

    const prevSlide=()=>{
        setCurrentIndex(currentIndex-1)
        if(currentIndex===0)
        setCurrentIndex(imageSlide.length-1)
    }

    return(
        <section style={{backgroundImage:`url(${imageSlide[currentIndex]})`}}className='carrousel'>
            {imageSlide.length>1&&
            <>
            <img className='carrousel_chevron carrousel_chevron_right'src={ChevronRight}alt="show next slide"onClick={nextSlide}/>
            <img className='carrousel_chevron carrousel_chevron_left'src={ChevronLeft} alt="show previous slide" onClick={prevSlide}/>
            <p className='slideShow'>{currentIndex+1}/{imageSlide.length}</p>
            </>
            }
        </section>
    )
}

export default Slide;