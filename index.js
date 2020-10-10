class Application extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        }
        // this.increment() = this.increment.bind(this);
        // this.decrement() = this.decrement.bind(this);
    }

    increment = () =>  {
        const {value} = this.state;
        const {step} = this.props;
        this.setState( {
            value: value + step,
        });
    };

    decrement = () => {
        const {value} = this.state;
        const {step} = this.props;
        if(value > 0) {
            this.setState( {
                value: value - step,
            });
        }
    };

    render() {
        return React.createElement('div', null,
            React.createElement('h1', null, this.props.children),
            React.createElement('button', {
                onClick: this.increment,
            }, '+'),
            React.createElement('button', {
                onClick: this.decrement,
            }, '-'),
            React.createElement('p', null, this.state.value),
        );
    }
}

ReactDOM.render(
    React.createElement(
        Application,
        {step: 6},
        'str1',
        'str2',
        'str3'),
        document.getElementById('root')
    );