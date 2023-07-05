import React from "react";

export default function Hero (props) {


    const title = props.title || "Alex Mellor";
    const subTitle = props.subtitle || "UX / UI / Dev";


    return (
        <header className='intro-header'>
            <div className="wrapper">
                <h1>{title}</h1>
                <p className="sub-title">{subTitle}</p>
            </div>
        </header>
    )
}