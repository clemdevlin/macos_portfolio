import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import {useWindowStore} from "#store/window.js";

const ImageViewer = () => {
    const {windows} = useWindowStore();
    const data = windows.imgfile.data;

    // If no data, return null
    if (!data) return null;


    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{data.name}</h2>
            </div>

            <div className="p-5 bg-white">
                {data.imageUrl && (
                    <div className="w-full">
                        <img
                            src={data.imageUrl}
                            alt={data.name}
                            className="max-h-[50vh] h-auto w-full object-contain rounded-md"
                        />
                    </div>
                )}
            </div>
        </>
    )
}

const ImageViewerWindow = WindowWrapper(ImageViewer, "imgfile");

export default ImageViewerWindow;