import React, {Component} from 'react';
import styled from 'styled-components';
import BullEye from 'react-icons/lib/fa/bullseye';
import FilterButton from './FilterButton';


const FilterAreaContainer = styled.div`
  grid-area: filter;
  background-color: darkslategray;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  border-bottom: 2px solid white;

`;

class FilterArea extends Component {

    static defaultProps = {
        stateChange: () => {}
    };

    state = {
        status: ["on", "off", "off"]
    };

    handleClick = (index) => {
        switch (index) {
            case 0:
                this.setState({status: ["on", "off", "off"]});
                this.props.stateChange("all");
                break;
            case 1:
                this.setState({status: ["off", "on", "off"]});
                this.props.stateChange("online");
                break;
            case 2:
                this.setState({status: ["off", "off", "on"]});
                this.props.stateChange("offline");
                break;
        }
    };

    render() {
        const {status} = this.state;

        return (
            <FilterAreaContainer>
                <FilterButton status={status[0]} text="ALL" onClick={() => {
                    this.handleClick(0);
                }}/>
                <FilterButton status={status[1]} text="ONLINE"  onClick={() => {
                    this.handleClick(1);
                }}/>
                <FilterButton status={status[2]} text="OFFLINE"  onClick={() => {
                    this.handleClick(2);
                }}/>
            </FilterAreaContainer>
        );
    }
}

export default FilterArea;
