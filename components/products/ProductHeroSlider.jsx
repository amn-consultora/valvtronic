"use client"

import { useRef } from "react";
import { FaRegArrowAltCircleRight , FaRegArrowAltCircleLeft   } from "react-icons/fa";
import { productHeroSlider } from "@/utils/productsHeroSlider";

export const ProductHeroSlider = () => {

    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const carouselRef = useRef(null);
    const listHTMLRef = useRef(null);

    let unAcceppClick;
    const showSlider = (type) => {
        nextButtonRef.current.style.pointerEvents = 'none';
        prevButtonRef.current.style.pointerEvents = 'none';

        carouselRef.current.classList.remove('next', 'prev');
        let items = document.querySelectorAll('.carousel .list .item');
        if(type === 'next'){
            listHTMLRef.current.appendChild(items[0]);
            carouselRef.current.classList.add('next');
        }else{
            listHTMLRef.current.prepend(items[items.length - 1]);
            carouselRef.current.classList.add('prev');
        }
        clearTimeout(unAcceppClick);
        unAcceppClick = setTimeout(()=>{
            nextButtonRef.current.style.pointerEvents = 'auto';
            prevButtonRef.current.style.pointerEvents = 'auto';
        }, 1000)
    };    

  return (
    <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listHTMLRef}>
            {
                productHeroSlider.map( ({description, id, name, img}) => (
                    <div className="item" key={id}>
                        <img src={img} alt={`${name}-imagen`} />
                        <div className="introduce">
                            <div className="topic">{name}</div>
                            <div className="des">
                                {description}
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="arrows z-40">
                <button ref={prevButtonRef} type="button" onClick={() => showSlider('prev')} id="prev"> <FaRegArrowAltCircleLeft size={30} /> </button>
                <button ref={nextButtonRef} type="button" onClick={() => showSlider('next')} id="next"> <FaRegArrowAltCircleRight size={30} /> </button>
            </div>
    </div>
    </div>
  )
}
