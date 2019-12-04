import React from 'react';

class Jokes extends React.Component{



    render(){
        return(
            <div className="border margin">
                Q. {this.props.question}
                <br />
                P: {this.props.punchline}
            </div>
        )
    }
}

export default Jokes;
