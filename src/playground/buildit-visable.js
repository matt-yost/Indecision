class Component extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisability = this.toggleVisability.bind(this);
        this.state = {
            visable: false,
        };
    }

    toggleVisability(){
        this.setState((prevState) => {
            return {
                visable: !prevState.visable
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Visability</h1>
                <button onClick={this.toggleVisability}>{this.state.visable ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visable && (
                    <div>
                        <p>Some details</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Component />, document.getElementById('app'));
