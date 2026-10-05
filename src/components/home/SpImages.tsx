"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import CHAANGHANI from "../../../public/logoSponsor/CHAANGHANI.png"
import CORPORATENEST from "../../../public/logoSponsor/CORPORATE NEST.png"
import DURABLE from "../../../public/logoSponsor/DURABLE.png"
import GHAR from "../../../public/logoSponsor/GHAR.png"
import MRSKITCHEN from "../../../public/logoSponsor/MRS KITCHEN.png"
import OEMLINKER from "../../../public/logoSponsor/oem linker.png"
import REVOLUCION from "../../../public/logoSponsor/REVOLUCION.png"
import SLICKCLICK from "../../../public/logoSponsor/SLICK & CLICK.png"
import Sthaal from "../../../public/logoSponsor/Sthaal.png"
import WTM from "../../../public/logoSponsor/WTM.png"

export default async function SpImages() {

    let sponsersImages = [
        { img: CHAANGHANI, name: "CHAANGHANI" },
        { img: CORPORATENEST, name: "CORPORATE NEST" },
        { img: DURABLE, name: "DURABLE" },
        { img: GHAR, name: "GHAR" },
        { img: MRSKITCHEN, name: "MRS KITCHEN" },
        { img: OEMLINKER, name: "OEM LINKER" },
        { img: REVOLUCION, name: "REVOLUCION" },
        { img: SLICKCLICK, name: "SLICK & CLICK" },
        { img: Sthaal, name: "Sthaal" },
        { img: WTM, name: "WTM" }
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="mx-auto max-w-[1320px] pb-6 md:pb-10">
            <div className="slider-container">
                <div>
                    <Slider {...settings}>
                        {sponsersImages.map((_, i) =>
                            <div key={i} className="mx-2 flex! items-center justify-center">
                                <Image src={_.img} alt={_.name} width={400} height={200} className="h-auto w-2/3" />
                            </div>)}
                    </Slider>
                </div>
            </div>
        </div>
    )
}