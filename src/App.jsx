import React from 'react'
import {Dock, Home, Navbar, Welcome} from "#components/index.js";

import gsap from "gsap";
import {Draggable}  from "gsap/Draggable"
import {Terminal, Safari, Resume, Finder, Text, ImageViewer, Contact, Photos} from "#windows/index.js";
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
            <Home />
            <Photos />
        </main>
    )
}
export default App
