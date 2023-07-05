import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
    return (
        <>
            <p>Hello, my name is Alex; I wear many hats.</p>
            <p>I am a <span>UX designer and researcher</span>, <span>interface designer</span> and <span>front end developer</span>.</p>
            <p>I have a few examples of design and development in <Link to="/eg">the playground</Link>. I also occasionally put stuff on <a href="https://github.com/arghlex">GitHub</a>, mostly work related. If you are really interested I can send you my CV, but you'll have to <Link to="/contact">talk to me</Link> first.</p>
        </>
    )
}