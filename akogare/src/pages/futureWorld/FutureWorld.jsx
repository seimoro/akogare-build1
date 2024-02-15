import './style.css'
import img_1 from './future-world/1.png'
import img_2 from './future-world/2.png'
import img_3 from './future-world/3.png'
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Parallax } from 'swiper/modules';
import Footer from '../../components/footer/Footer';
import Playa from '../../components/Musicplaya/playa';

const FutureWorld = () => {

    let images = [
        {
            title: 'THE BEGGINING',
            description: 'WHERE IT ALL BEGAN',
            id: '_01',
            img: img_1
        },
        {
            title: 'NEXT IN LINE',
            description: "WHERE WE'RE HEADED",
            id: '_02',
            img: img_2
        },
        {
            title: 'COMMING SOON',
            description: 'SOMETHING THAT WILL CHANGE THE FUTURE',
            id: '_03',
            img: img_3
        },
    ]


    
    return ( 
        <div className="future-world">
        <main className="main">
            <div className="main-container container">
                <div className="page-title">
                    <div className="left-column">
                        <div className="page-title-text">
                            <span>///</span> FUTURE. WORLD
                        </div>
                        <div className="square"></div>
                    </div>
                    <div className="center-column">
                        <div className="square"></div>
                        <div className="square"></div>
                    </div>
                    <div className="right-column">
                        <div className="square"></div>
                        <div className="page-title-text">
                            LOADING...
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="left-column">
                        <Swiper
                            slidesPerView={1}
                            className='slider'
                            direction={'vertical'}
                            speed={750}
                            mousewheel={true}
                            loop={true}
                            parallax={true}
                            pagination={{
                                el: '.swiper-pagination',
                                    clickable: true,
                                    renderBullet: (index, className) => {
                                    return '<span class="' + className + '">' + "</span>";
                                },
                            }}
                            modules={[Mousewheel, Pagination, Parallax]}
                            
                        >
                            {images.map((image) => {
                                return(
                                    <SwiperSlide>
                                        <div className="main-img">
                                            <img src={image.img} alt=""  data-swiper-parallax="50%"/>
                                            
                                        </div> 
                                        <div className="main-title" >
                                            <h1>{image.id}</h1>
                                            <div className="main-title-text-block" >
                                                <h1>
                                                    {image.title}
                                                </h1>
                                                <p>
                                                    {image.description}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            
                        </Swiper>
                    </div>
                    <div className="center-column">

                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets ">
                        </div>
                        
                    </div>
                    <div className="right-column">

                        <div className="right-text-block">
                            <h1>_EXCITING HEADLINE</h1>
                            <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT. AENEAN COMMODO LIGULA EGET DOLOR. AENEAN MASSA.
CUM SOCIIS NATOQUE PENATIBUS ET MAGNIS DIS PARTURIENT MONTES, NASCETUR RIDICULUS MUS. DONEC QUAM FELIS, ULTRICIES NEC, PELLENTESQUE EU, PRETIUM QUIS, SEM.</p>
                            <p>NULLA CONSEQUAT MASSA QUIS ENIM. DONEC PEDE JUSTO, FRINGILLA VEL, ALIQUET NEC, VULPUTATE EGET, ARCU. IN ENIM JUSTO, RHONCUS UT, IMPERDIET A, VENENATIS VITAE, JUSTO.
</p>
                            <p>NULLAM DICTUM FELIS EU PEDE MOLLIS PRETIUM. INTEGER TINCIDUNT. CRAS DAPIBUS. VIVAMUS ELEMENTUM SEMPER NISI. AENEAN VULPUTATE ELEIFEND TELLUS. AENEAN LEO LIGULA, PORTTITOR EU, CONSEQUAT VITAE, ELEIFEND AC, ENIM. ALIQUAM LOREM ANTE, DAPIBUS IN, VIVERRA QUIS, FEUGIAT</p>
                        </div>

                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </div>
     );
}
 
export default FutureWorld;