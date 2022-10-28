//弃用

import React ,{Component} from "react";

import  "./Apple.scss"

interface IState {
    seconds:number
}
class Apple extends Component<{}, IState, unknown> {

    protected interval: number | undefined;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { seconds: 0 };
    }

    // tick() {
    //     this.setState(state => ({
    //         seconds: state.seconds + 1
    //     }));
    // }

    componentDidMount() {
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <div className='g-wrap'>
                    <p>灵动的 iPhone 新玩法，迎面而来。重大的安全新功能，为拯救生命而设计。创新的 4800 万像素主摄，让细节纤毫毕现。更有 iPhone 芯片中的速度之王，为一切提供强大原动力。
                    </p>
                </div>

            </div>
        );
    }
}

export default Apple