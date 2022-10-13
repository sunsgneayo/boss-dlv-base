import React ,{Component} from "react";

interface IState {
    seconds:number
}
class Timer extends Component<{}, IState, unknown> {

    protected interval: number | undefined;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

export default Timer