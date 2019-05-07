class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinuesOne = this.handleMinuesOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if(!isNaN(count)) {
            this.setState(() => ({ count }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count != this.state.count) {
            let count = this.state.count;
            localStorage.setItem('count', count);
        }
    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count:  prevState.count + 1
            };
        });
    }

    handleMinuesOne(){
        this.setState((prevState) => {
            return {
                count:  prevState.count - 1
            };
        });
    }

    reset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinuesOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
