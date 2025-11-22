import React from 'react'
import {Dock, Navbar, Welcome} from "#components/index.js";

import gsap from "gsap";
import {Draggable}  from "gsap/Draggable"
import {Terminal, Safari, Resume, Finder, Text, ImageViewer, Contact} from "#windows/index.js";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <ImageViewer />
            <Contact />
        </main>
    )
}
export default App
