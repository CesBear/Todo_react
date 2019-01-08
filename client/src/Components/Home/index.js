import React, {Component} from 'react';
import LeftColumn from "../LeftColumn";
import { Row, Input } from 'react-materialize';

class Home extends Component {

    render() {
        return (
            <div className='wrapper'>
                <LeftColumn/>
                <div className='fixedLeftSide '>
                    <h1>Today</h1>
                    <Row>
                        <Input icon='add' placeholder ="Cooking meat" s={8} label="Add task" />
                        <Input s={8} label="Add task" />
                        <Input s={8} label="Add task" />
                        <Input s={8} label="Add task" />
                        <Input s={8} label="Add task" />
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;