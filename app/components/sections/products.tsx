"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ScrollReveal from '../animations/ScrollReveal';

const PRODUCT_CARDS = [
    {
        id: "seller",
        title: "Seller Web Space",
        subtitle: "Complete E-Commerce Management Platform",
        description: "Manage your entire business from one powerful dashboard. Track inventory, process orders, manage deliveries, and grow your business with our comprehensive seller platform.",
        link: "/seller"
    },
    {
        id: "customer",
        title: "Customer Delivery App",
        subtitle: "Shop & Track Your Orders",
        description: "Browse products, place orders, and track your deliveries in real-time. Experience seamless shopping with instant notifications and reliable delivery tracking.",
        link: "/customer"
    },
    {
        id: "delivery",
        title: "Delivery Partner App",
        subtitle: "For Delivery Personnel",
        description: "Streamlined delivery management for our delivery partners. Get route optimization, real-time order updates, and efficient delivery tracking tools to ensure timely deliveries.",
        link: null
    }
];

export default function Products() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();
    const totalSlides = PRODUCT_CARDS.length;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleCardClick = (link: string | null) => {
        if (link) {
            router.push(link);
        }
    };

    const currentCard = PRODUCT_CARDS[currentIndex];

    return (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 pb-32">
            <div className="flex flex-col md:flex-row items-start gap-12">
                {/* Left Column: Heading & Description */}
                <ScrollReveal direction="left" className="md:w-1/2 md:self-center">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6 text-gray-900">
                            <span className="text-5xl sm:text-6xl">Our Products</span>
                        </h2>
                        <p className="text-gray-900 mb-6">
                            At Espaze, we empower sellers, customers, and delivery partners on one seamless platform — simplifying
                            everything from order management to fast, reliable deliveries.
                        </p>
                        <div className="mb-6">
                            <a href="#" className="inline-block bg-linear-to-br from-purple-600 to-pink-500 text-white px-6 py-3 text-base rounded-md hover:from-purple-700 hover:to-pink-600 transition-all">
                                Learn more
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handlePrev}
                                className="h-9 w-9 flex items-center justify-center rounded-full border-2 border-purple-400 text-sm text-purple-600 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white hover:border-transparent transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="h-9 w-9 flex items-center justify-center rounded-full border-2 border-purple-400 text-sm text-purple-600 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white hover:border-transparent transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Right Column: Product Carousel */}
                <ScrollReveal direction="right" className="md:w-1/2 relative overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(calc(-${currentIndex * 80}% - ${currentIndex * 24}px))`
                        }}
                    >
                        {PRODUCT_CARDS.map((card, index) => (
                            <div
                                key={card.id}
                                className="shrink-0 w-[80%]"
                            >
                                <div
                                    onClick={() => handleCardClick(card.link)}
                                    className={`flex flex-col items-start rounded-xl bg-purple-50 p-3 sm:p-6 shadow-lg transition-all duration-300 ${card.link
                                            ? 'cursor-pointer hover:shadow-xl hover:bg-purple-100'
                                            : ''
                                        }`}
                                >
                                    <div className="relative w-full h-48 bg-linear-to-br from-purple-50 to-pink-50 rounded-lg shadow-sm overflow-hidden">
                                        {(card.id === 'seller' || card.id === 'customer') ? (
                                            <Image
                                                src={card.id === 'seller' ? '/seller.png' : '/customer.png'}
                                                alt={card.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="bg-linear-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold text-lg">
                                                    {card.title}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-6 text-left w-full">
                                        <h3 className="text-2xl text-gray-900 font-bold leading-snug">{card.title}</h3>
                                        <p className="text-sm bg-linear-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent font-medium mt-2">{card.subtitle}</p>
                                        <p className="text-sm text-gray-700 mt-3 leading-relaxed">{card.description}</p>
                                    </div>
                                    {card.link && (
                                        <div className="mt-4 w-full">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCardClick(card.link);
                                                }}
                                                className="inline-block bg-linear-to-br from-purple-600 to-pink-500 text-white px-6 py-3 text-sm rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all font-medium shadow-md hover:shadow-lg"
                                            >
                                                Learn more →
                                            </button>
                                        </div>
                                    )}
                                    {!card.link && (
                                        <div className="mt-4 w-full">
                                            <p className="text-sm text-gray-500 italic">Coming soon for our delivery partners</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}