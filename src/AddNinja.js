import React, {Component} from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="">Name: </label>
                        <input type="text" id="name" placeholder="name" onInput={this.handleChange}/>
                    </p>
                    <p>
                        <label htmlFor="">Age: </label>
                        <input type="text" id="age" placeholder="age" onInput={this.handleChange}/>
                    </p>
                    <p>
                        <label htmlFor="">Belt: </label>
                        <input type="text" id="belt" placeholder="belt" onInput={this.handleChange}/>
                    </p>
                    <button>Add ninja</button>
                </form>
            </div>
        );
    }
}

export default AddNinja;
