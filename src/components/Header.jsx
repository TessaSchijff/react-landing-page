import React, { Component } from 'react';


class Header extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name,
                occupation = this.props.data.occupation,
                description = this.props.data.description,
                city = this.props.data.address.city;
        }
        return (
            <div>
                <header id="home">

                    <nav id="nav-wrap">

                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul> 
                     
                    </nav> 
                    
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">Hoi, ik ben {name}.</h1>
                            <h2>Ik studeer Communication en Multimedia Design aan de Hogeschool van Amsterdam en ben op zoek naar een stage</h2>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>

                </header>
            </div>
        );
    }
}

export default Header;
