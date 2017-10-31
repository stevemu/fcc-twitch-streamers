import React, { Component } from 'react';
import styled from 'styled-components';
import ChannelItem from './ChannelItem';

const ChannelItemsContainer = styled.div`
  grid-area: list;
  display: flex;
  flex-direction: column;
`;

class ChannelItems extends Component {

    static defaultProps = {
        channels: []
    };

    getItems = () => {
      return this.props.channels.map((channel, index) => {
          return <ChannelItem key={index} {...channel} />
      })
    };

    render() {
        return (
            <ChannelItemsContainer>
                {this.getItems()}
            </ChannelItemsContainer>
        );
    }
}

export default ChannelItems;
