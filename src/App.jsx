import React from 'react'
import {Dock, Navbar, Welcome} from "#components/index.js";

import gsap from "gsap";
import {Draggable}  from "gsap/Draggable"
import {TerminalWindow} from "#windows/index.js";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <TerminalWindow />
        </main>
    )
}
export default App
