import React, {Component} from 'react';

import Ninjas from "./Ninjas";
import AddNinja from './AddNinja';

class App extends Component {
    state = {
        ninjas: [
            {name: 'Ryu', age: 20, belt: 'black', id: 1},
            {name: 'Takeshi', age: 43, belt: 'green', id: 2},
            {name: 'Yoshi', age: 60, belt: 'pink', id: 3}
        ]
    };

    addNinja = (ninja) => {
        ninja.id = this.state.ninjas.length + 1;
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas: ninjas
        });
        console.log(ninja.id);
    };

    deleteNinja = (id) => {
        // console.log(id);
        let ninjas = this.state.ninjas.filter(ninja => {
            return ninja.id !== id
        });
        this.setState({
            ninjas
        })

    };

    render() {
        return (
            <div>
                <h1>My React app</h1>
                <p>Welcome</p>
                <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
                <AddNinja addNinja={this.addNinja}/>
            </div>
        )
    }
}

export default App;
