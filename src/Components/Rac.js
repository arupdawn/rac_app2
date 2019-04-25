import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/*import { Container, Row, Col } from 'reactstrap';*/

import './rac.css';

class Rac extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rooms:1,
            adults:1,
            children:0
        }
        this.room_inc=this.room_inc.bind(this);
        this.room_dec=this.room_dec.bind(this);
        this.adult_inc=this.adult_inc.bind(this);
        this.adult_dec=this.adult_dec.bind(this);
        this.child_inc=this.child_inc.bind(this);
        this.child_dec=this.child_dec.bind(this);
        
    }

    room_inc(e){
        if((this.state.rooms < 5)&&(this.state.rooms >= 1)){
            this.setState({
                rooms:++this.state.rooms
            })

            if(this.state.rooms > this.state.adults){
                this.setState({
                    adults:++this.state.adults
                })
            }
        }
    }

    room_dec(e){
        if(this.state.rooms >= 2){
            this.setState({
                rooms:(--this.state.rooms)
            })

            if((this.state.adults+this.state.children) >= (4*(this.state.rooms))&&(this.state.adults >= this.state.rooms)){
                let val1=((this.state.adults+this.state.children)-(4*(this.state.rooms)));
                if(this.state.children <= val1){
                    this.setState({
                        children:0
                    })
                    val1=val1-(this.state.children);
                    this.setState({
                        adults:(this.state.adults-val1)
                    })
                }
                else if(this.state.children > val1){
                    this.setState({
                        children:(this.state.children-val1)
                    })
                }
            }
        }
    }

    adult_inc(e){
        if((this.state.rooms <= 5)&&(this.state.rooms >= 1)&&((this.state.adults+this.state.children) < (20))){
            this.setState({
                adults:++this.state.adults
            })

            if(((this.state.adults+this.state.children) > (4*(this.state.rooms)))&&(this.state.rooms <= 4)){
                this.setState({
                    rooms:++this.state.rooms
                })
            }
        }
    }

    adult_dec(e){
        if((this.state.rooms <= 5)&&(this.state.rooms >= 1)&&(this.state.adults > 1)){
            this.setState({
                adults:--this.state.adults
            })

            if(this.state.adults < this.state.rooms)
            {
                this.setState({
                    rooms:--this.state.rooms
                })

                if((this.state.adults+this.state.children) > (4*(this.state.rooms))){
                    this.setState({
                        children:(4*(this.state.rooms))-this.state.adults
                    })
                }
            }

        }
    }

    child_inc(e){
        if((this.state.adults+this.state.children) < (20)){
            this.setState({
                children:++this.state.children
            })

            if((this.state.adults+this.state.children) > (4*(this.state.rooms))){
                this.setState({
                    rooms:++this.state.rooms
                })

                if(this.state.adults < this.state.rooms){
                    this.setState({
                        adults:++this.state.adults
                    })
                }
            }
        }
    }

    child_dec(e){
        if(this.state.children > 0)
        {
            this.setState({
                children:--this.state.children
            })
        }
    }

    render(){
        return(
            <div className="Main_styling">
                
                <br></br>

                <div id="HeadStyle">
                    <i className="fas fa-users"></i>{" "}
                    <strong>Choose number of people</strong>
                </div>
                

            <div id="Main_Container">
                <br></br>

                <Grid container spacing={0}>
                            <Grid item xs className="Align-left">
                            <i class="fas fa-bed fa-x"></i>{" "}Rooms
                            </Grid>
                            <Grid item xs>

                            </Grid>
                            <Grid item xs>
                                    
                                    <button className="margin-btn" onClick={this.room_dec} variant="outlined">
                                    <i class="fas fa-minus-square fa-2x"></i>
                                    </button>

                                    {" "}<strong>{this.state.rooms}</strong>{" "}

                                    <button className="margin-btn" onClick={this.room_inc} variant="outlined">
                                    <i class="fas fa-plus-square fa-2x"></i>
                                    </button>
                                
                            </Grid>
                        
                </Grid>  
                <hr></hr>

                <Grid container spacing={0}>
                            <Grid item xs className="Align-left">
                            <i class="fas fa-user fa-x"></i>{" "}Adults
                            </Grid>
                            <Grid item xs>

                            </Grid>
                            <Grid item xs>

                                    <button className="margin-btn" onClick={this.adult_dec}>
                                    <i class="fas fa-minus-square fa-2x"></i>
                                    </button>
                
                                    {" "}<strong>{this.state.adults}</strong>{" "}
                
                                    <button className="margin-btn" onClick={this.adult_inc}>
                                    <i class="fas fa-plus-square fa-2x"></i>
                                    </button>
                                
                            </Grid>
                        
                </Grid>
                <hr></hr>

                <Grid container spacing={0}>
                            <Grid item xs className="Align-left">
                            <i class="fas fa-child fa-x"></i>{" "}Children
                            </Grid>
                            <Grid item xs>

                            </Grid>
                            <Grid item xs>
                            
                                    <button className="margin-btn" onClick={this.child_dec}>
                                    <i class="fas fa-minus-square fa-2x"></i>
                                    </button>

                                    {" "}<strong>{this.state.children}</strong>{" "}

                                    <button className="margin-btn" onClick={this.child_inc}>
                                    <i class="fas fa-plus-square fa-2x"></i>
                                    </button>
                                
                            </Grid>
                        
                </Grid>
                <br></br>
            </div>
            </div>
        );
    }

}

export default Rac;

