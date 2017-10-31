import React, {Component} from 'react';
import styled from 'styled-components';


const ChannelItemContainer = styled.div`
  height: 70px;
  background-color: darkseagreen;
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  border-bottom: 2px solid white;
`;

const ChannelIconArea = styled.div`
   display: grid;
   justify-items: center;
`;

const ChannelIcon = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  height: 50px;
`;

const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 100px 1fr;
  }
`;

const Title = styled.div`
  font-size: 18px;
  color: orange;
  margin-bottom: 5px;
  
  @media (min-width: 600px) {
    margin-bottom: 0;
  }
`;

const Status = styled.div`
  font-size: 18px;
  color: green;
  
  @media (min-width: 600px) {
    justify-self: center;
  }
`;

class ChannelItem extends Component {

    static defaultProps = {
        logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-70x70.jpeg",
        title: "TITLE",
        status: "Offline"
    };

    render() {
        const {logo, title, status} = this.props;

        return (
            <ChannelItemContainer>
                <ChannelIconArea>
                    <ChannelIcon
                        src={logo}/>
                </ChannelIconArea>
                <ChannelInfo>
                    <Title>{title}</Title>
                    <Status>{status}</Status>
                </ChannelInfo>
            </ChannelItemContainer>

        );
    }
}

export default ChannelItem;
