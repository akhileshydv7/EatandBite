import React from "react";


class Card extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                    });
                }}>Increase</button>
                
                <h1>{this.props.name}</h1>
                <h2>{this.props.location}</h2>
            </div>
        )
    }
}

export default Card;
