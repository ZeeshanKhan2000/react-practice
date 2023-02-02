import './banner.css';
import { Heading} from './heading';
import { Form } from './form';
import { CitiesDetail } from './citiesDetails';

export  const Banner = () => {

  const headings = {
     firstHeading: "WEATHER APPLICATION", 
     spanContent: "React JS"
  }

    return (
        <section className="weadther-app-section">
        <div className="container">
            <div className="row ">
                <div className="col-md-12">
                    <div className="weadther-app-heading">      
                        <Heading   headingValue={headings.firstHeading}  spaNHeading={headings.spanContent} />
                        <Form /> 
                    </div>
                </div>
                <CitiesDetail des="DESCRIPTION" sky="clear sky" />
                <CitiesDetail des="COUNTRY " sky="clear sky" />
                <CitiesDetail des="SUNSET" sky="clear sky" />
                <CitiesDetail des="SUNRISE" sky="clear sky" />
                <CitiesDetail des="TEMPERATURE" sky="clear sky" />         
                <CitiesDetail des="LATITUDE" sky="clear sky" />         
                <CitiesDetail des="LONGITUDE" sky="clear sky" />         
                <CitiesDetail des="WIND SPEED" sky="clear sky" />                 
            </div>
        </div>
    </section>
    )
    
  }

