import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import {useWindowStore} from "#store/window.js";

const Text = () => {
    const {windows} = useWindowStore();
    const data = windows.txtfile.data;

    // If no data, return null
    if (!data) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{data.name}</h2>
            </div>

            <div className="p-4">
                {data.subtitle && <h3 className="text-lg font-medium mb-3">{data.subtitle}</h3>}
                
                {data.image && (
                    <div className="mb-4">
                        <img 
                            src={data.image} 
                            alt={data.name} 
                            className="max-w-full h-auto rounded-md"
                        />
                    </div>
                )}
                
                <div className="text-content">
                    {data.description && data.description.map((paragraph, index) => (
                        <p key={index} className="mb-3">{paragraph}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;