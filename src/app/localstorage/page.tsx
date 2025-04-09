'use client';

import { useEffect, useState } from "react";


/**
 * localStorage demo
 * 
 */



export default function Page() {

    // Storing 
    const [currentItem, setCurrentItem] = useState('');
    const [storedValue, setStoredValue] = useState('');

    const getStoredValue = () => {
        const value = localStorage.getItem('item');
        setStoredValue(value || '');
    };

    const storeValue = () => {
        localStorage.setItem('item', currentItem || '');
        setCurrentItem(currentItem);
    };

    const clearValue = () => {
        localStorage.removeItem('item');
        // or clear everything
        // localStorage.clear();

        // Update our view
        getStoredValue();

    }

    return (
        <>
            <div className="p-5">
                <div className="my-10">
                    <h1
                        className="text-2xl font-bold">
                        Local Storage Sample
                    </h1>
                </div>


                <div>

                    {/* Form */}
                    <div>
                        {/* Input Field */}
                        <div
                            className="flex items-center gap-4 mb-5">
                            <div>
                                <input
                                    value={currentItem}
                                    className="border-solid border-[1.2px] border-gray-300 px-5 py-2 rounded-2xl min-w-[30vw]"
                                    onChange={value => setCurrentItem(value.target?.value || '')}
                                />
                            </div>
                            <div
                                className="flex items-center gap-2">
                                <div>
                                    <button
                                        className="bg-gray-300 px-5 py-2 rounded-2xl"
                                        onClick={() => storeValue()}>
                                        Store Value
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="bg-gray-300 px-5 py-2 rounded-2xl"
                                        onClick={() => setCurrentItem('')}>
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* .Input Field */}


                        {/* Stored Section */}
                        <div
                            className="flex items-center gap-4">
                            <div>
                                <div className="border-solid border-[1.2px] border-gray-300 px-5 py-2 rounded-2xl min-w-[30vw] min-h-[100px]">
                                    {storedValue || ''}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    className="bg-gray-300 px-5 py-2 rounded-2xl"
                                    onClick={() => getStoredValue()}>
                                    Get Stored Value
                                </button>
                                <button
                                    className="bg-gray-300 px-5 py-2 rounded-2xl"
                                    onClick={() => clearValue()}>
                                    Clear
                                </button>
                            </div>
                        </div>


                        
                        {/* .Stored Section */}

                    </div>
                    {/* .Form */}
                </div>
            </div>
        </>
    );
}