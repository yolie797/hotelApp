import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free CockTail",
                
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
             
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
              
            },
            {
                icon:<FaBeer/>,
                title: "Unlimited Beer",
              
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}