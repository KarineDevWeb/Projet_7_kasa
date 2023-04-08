 import './accommodation.scss'
 import { useEffect, useState } from "react"
 import { useParams } from "react-router-dom";
 import data from '../../database/database'
 import Header from '../../components/header/Header';
 import Collapse from '../../components/collapse/Collapse';
 import Slide from '../../components/carrousel/Carrousel'
 import Footer from '../../components/footer/Footer';
 import redStar from '../../assets/red_star.png';
 import greyStar from '../../assets/grey_star.png';
 import ErrorPage from '../errorPage/ErrorPage';


function Accommodation() {

    const [imageSlide, setImageSlide] = useState([]);

    const { id } = useParams();
    const dataCurrentAccommodation = data.find(database => database.id === id);
     
      useEffect(() => {
    
        if (dataCurrentAccommodation && dataCurrentAccommodation.pictures) {
            setImageSlide(dataCurrentAccommodation.pictures);
        }
      
	  }, [dataCurrentAccommodation]);

      if (!dataCurrentAccommodation) {
        return <ErrorPage />;
      }
   
	  const name = dataCurrentAccommodation.host.name.split(' '); 
	  const rating = dataCurrentAccommodation.rating;
	  const description  = dataCurrentAccommodation.description;
	  const equipments = dataCurrentAccommodation.equipments;
    
    return (
        <>
                <Header/>
                <Slide imageSlide={imageSlide}/>
                <main className="accommodation">
                    <div className="accommodation_content">
                        <div className="accommodation_content_infos">
                            <h2>{dataCurrentAccommodation.title}</h2>
                            <p>{dataCurrentAccommodation.location}</p> 
                            <div>{dataCurrentAccommodation.tags.map((tag, index) => {
                                return (
                                    <button key={index}>{tag}</button>
                                )
                            })}
                        </div> 
                    </div>
                    <div className='accommodation_content_host'>
                       <div>
                            <div className='accommodation_content_host_name'>
                                <span>{name[0]}</span>
                                <span>{name[1]}</span>
                            </div>
                            <img src={dataCurrentAccommodation.host.picture} alt="host of this accommodation" />
                        </div> 
                        <div className="accommodation_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="étoile rouge ou grise indiquant la note" />
								)
							})}
                        </div>
                    </div>
                </div>
                <div className="accommodation_collapse">
					<div className="accommodation_collapse_article">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="accommodation_collapse_article">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
    )
}

export default Accommodation;
