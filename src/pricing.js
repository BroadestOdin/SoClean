import React from "react";

import ReactDOM from 'react-dom/client';
export default function Pricing() {
    return (
        <>
            <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full title">
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                            Nos services offerts
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600" id="textservice">
                            SoClean Esthétique offre une grande variete de services pour l'esthetique et ce, pour toute les marques autant pour les particuliers que pour les entreprises
                        </p>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 listsitem">
                            <div className="md:flex items-center justify-between textlistitem">
                                <h2 className="text-2xl font-semibold leading-6 text-gray-800">Service d'esthetique automobile</h2>
                            </div>
                        </div>
                        <div role="listitem" id="two" className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30 listsitem">
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between textlistitem">
                                    <h2 className="text-2xl font-semibold leading-6 text-gray-800">Service d'esthetique pour bateau</h2>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" id = "three" className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30 listsitem">
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between textlistitem">
                                    <h2 className="text-2xl font-semibold leading-6 text-gray-800 textlistitem">Service d'esthetique pour VR et autres</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
