import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from './ui/Highlight';

export default function Highlights() {
  return (
    <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Why choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight icon={<FontAwesomeIcon icon="bolt"></FontAwesomeIcon>}
                    title="Easy and Quick"
                    para="Get access to the book you purchased online instantly."/>

                    <Highlight icon={<FontAwesomeIcon icon="book-open"></FontAwesomeIcon>}
                    title="10,000+ Books"
                    para="Library has books in all your favorite catigories."/>

                    <Highlight icon={<FontAwesomeIcon icon="tags"></FontAwesomeIcon>}
                    title="Affordable"
                    para="Get your hands on popular books for as little as $10."/>
                </div>  
            </div>
        </div>
    </section>
  )
}
