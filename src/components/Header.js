import React from 'react';

export default function Header (props) {

    const title = props.title;
    const subTitle = props.subtitle;


    return (
        <header className="header">
            <div className="wrapper">
                <h1>{title}</h1>
            </div>
        </header>
    )

}