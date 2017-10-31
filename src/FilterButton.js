import React, {Component} from 'react';
import styled from 'styled-components';
import BullEye from 'react-icons/lib/fa/bullseye';

const Container = styled.div`
  background-color: beige;
  color: darkslategray;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 5px;
    transition: width 1s ease-in-out;
    overflow: hidden;
`;

class FilterButton extends Component {

    static defaultProps = {
        status: "on",
        onClick: () => {},
        text: "ALL"
    };


    constructor(props) {
        super(props);

        if (props.status === "on") {
            this.state = {width: "100%", showText: true};
        } else {
            this.state = {width: "30%", showText: false};
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status === "on") {
            this.setState({width: "100%", showText: true});
        } else {
            this.setState({width: "30%", showText: false});
        }
    }

    render() {
        return (
            <Container style={{width: this.state.width}} onClick={this.props.onClick} >
                <div><BullEye/></div>
                {this.state.showText && <div>{this.props.text}</div>}
            </Container>
        );
    }

}

export default FilterButton;
