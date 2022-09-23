import React, { Component ,useState} from 'react'
import defaultBcg from '../images/room-3.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
import { useParams } from 'react-router-dom';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function ComponentWithRouter(props) {
    let params = useParams()
    return <Component {...props} params={params} />
  }
 
export default class SingleRoom extends Component {
    
    constructor (props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.id);
        if(!room){
            return (<div className="container roomerror">
                    <div className="row my-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4 error">
                                <h1 className="text-center display-4">SORRY</h1>
                                <h3>No such room could be found...</h3>
                                <Link to="/rooms" className="btn btn-warning mt-4 ">Back to Rooms</Link>
                            </div> 
                        </div>
                    </div>
                </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg, ...defaultBcg] = images;


        
        const add=((props)=>{
            const collectionRef=collection(db,"bookings");
            
            const bookings ={
             room:room,
             
            };
            addDoc(collectionRef,room).then(()=>{
              alert("Task Added Succcessfully")
            }).catch((error)=>{
              console.log(error);
            })
            // props.add(room);
          })
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg }>
           
            <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn btn-primary">Back To Rooms</Link>
            </Banner>
            </StyledHero>
            <section className="single-room container">
               <div className="row">
                    {defaultBcg.map((item,index) => {
                        return (
                        <div className="col-md-4 col-12 mx-auto" key={index}>
                            <div className="card border-0 shadow-lg">
                               <img key={index} src={item} alt={name} className="img-fluid" />
                            </div>
                        </div>)
                    })}
               </div>
               <div className="single-room-info">
                   <article className="desc">
                      <h3>Details</h3>
                      <p>{description}</p>
                   </article>
                   <article className="info">
                      <h3>Info</h3>
                      <h6>price : Rs{price}</h6>
                      <h6>size  : {size} SQFT</h6>
                      <h6>
                          max capacity : {" "}
                              {capacity > 1 ? `${capacity} people`: `${capacity} person`}
                      </h6>
                      <h6>{pets? 'pets allowed': 'no pets allowed'}</h6>
                      <h6>{breakfast && "free breakfast included"}</h6>
                   </article>
               </div>
            </section>
            <section className="room-extras">
                <h3>Extras</h3>
                <ul className="extras">
                    {extras.map((item,index) => {
                          return <li key={index}>{item}</li>
                    })}
                </ul>
                <div className="p-4 clearfix">
                    <div className="row">
                       <div className="col-md-3 col-12 ml-auto">
                          <Link to={`/booknow/${this.state.id}`} className="btn btn-outline-primary btn-block btn-lg float-right " onClick={add}>Book Now</Link>
                       </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
