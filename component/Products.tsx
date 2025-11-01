"use client";
import React, { useState } from 'react';

const PRODUCT_CARDS = [
    {
        id: "card1",
        title: "text quote of that product",
        description: "sub info para",
    },
    {
        id: "card2",
        title: "text quote of that product",
        description: "sub info para",
    },
    {
        id: "card3",
        title: "text quote of that product",
        description: "sub info para",
    },
    {
        id: "card4",
        title: "text quote of that product",
        description: "sub info para",
    },
    {
        id: "card5",
        title: "text quote of that product",
        description: "sub info para",
    },
    {
        id: "card6",
        title: "text quote of that product",
        description: "sub info para",
    },
    {
        id: "card7",
        title: "text quote of that product",
        description: "sub info para",
    },
    {
        id: "card8",
        title: "text quote of that product",
        description: "sub info para",
    },

];

export default function Products() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 2;
    const totalSlides = Math.ceil(PRODUCT_CARDS.length / cardsPerView);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const startIndex = currentIndex * cardsPerView;
    const currentCards = PRODUCT_CARDS.slice(startIndex, startIndex + cardsPerView);

    return (
        <section className="min-h-screen flex items-start pt-20 pb-12">
            <div className="w-full">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-stretch">
                    <div className="md:w-1/2 flex flex-col justify-start pr-8 md:pt-6">
                        <h2 className="text-6xl font-bold text-black mb-6">Our Products</h2>
                        <p className="text-base text-black mb-8 max-w-lg">
                            At Espaze, we connect sellers, customers, and delivery partners on one seamless platform — simplifying
                            everything from order management to fast, reliable deliveries.
                        </p>
                        <div className="mt-6">
                            <a href="#" className="inline-block bg-black text-white px-6 py-3 text-base rounded-md">
                                Learn more
                            </a>
                            <div className="flex items-center gap-3 mt-8">
                                <button 
                                    onClick={handlePrev}
                                    className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="relative w-full pt-6 md:pt-0 overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{
                                    // move by a fraction of 100% depending on total slides
                                    transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                                    width: `${totalSlides * 100}%`
                                }}
                            >
                                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                    <div
                                        key={slideIndex}
                                        className="flex-none px-3"
                                        style={{ width: `${100 / totalSlides}%` }}
                                    >
                                        <div className="w-full flex gap-6">
                                            {PRODUCT_CARDS.slice(slideIndex * 2, slideIndex * 2 + 2).map((card) => (
                                                <div key={card.id} className="w-1/2">
                                                    <div className="flex flex-col items-start">
                                                        {/* reduced image height to keep card size reasonable */}
                                                        <div className="w-full h-48 bg-gray-200 rounded-lg shadow-sm" />
                                                        <div className="mt-4 text-left">
                                                            <h3 className="text-xl text-black leading-snug">{card.title}</h3>
                                                            <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                                                        </div>
                                                        <div className="mt-3">
                                                            <a href="#" className="text-sm text-black underline hover:text-gray-600 transition-colors">
                                                                Learn more
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}