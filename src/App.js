import React, {Component} from 'react';
import styled from 'styled-components';
import BullEye from 'react-icons/lib/fa/bullseye';
import FilterButton from './FilterButton';
import FilterArea from './FilterArea';
import ChannelItems from './ChannelItems';
import axios from 'axios';

const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 110px;
  grid-template-areas:
   "title filter"
   "list list";
   max-width: 500px;
   
   @media (min-width: 600px) {
    margin-top: 20px;
   }
`;

const TitleArea = styled.div`
  grid-area: title;
  font-size: 30px;
  color: white;
  background-color: darkslategray;
  padding: 20px;
    border-bottom: 2px solid white;

`;

const channels = [
    {
        logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-70x70.jpeg",
        title: "ESL",
        status: "offline"
    },
    {
        logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-70x70.png",
        title: "FreeCodeCamp",
        status: "online"
    }
];

const channelNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

let newChannels = {
    "ESL_SC2": {},
    "OgamingSC2": {}
};

class App extends Component {

    state = {
        channels: [],
        filter: "all"
    };

    async componentDidMount() {
        let channels = await this.getChannelInfos();
        channels = await this.getOnOfflineStatus(channels);
        this.setState({channels});
    }

    getChannelInfos = async () => {

        let channels = [];

        for (let i = 0; i < channelNames.length; i++) {
            const channelName = channelNames[i];
            const res = await axios.get("https://wind-bow.glitch.me/twitch-api/channels/" + channelName);
            const logo = res.data.logo;
            const title = res.data.display_name;
            const channelInfo = {
                logo,
                title,
                channelName
            };
            channels.push(channelInfo);
        }

        return channels;
    };

    getOnOfflineStatus = async (channels) => {
        // go through each element in the channels array
        // get the channelName, then use that get stream status
        // put results in a new array
        let updatedChannels = [];
        for (let i = 0; i < channels.length; i++) {
            let channel = {...channels[i]};

            const res = await axios.get("https://wind-bow.glitch.me/twitch-api/streams/" + channel.channelName);
            const data = res.data;
            if (data.stream === null) {
                channel.status = "offline";
            } else {
                channel.status = "online";
            }
            updatedChannels.push(channel);
        }

        return updatedChannels;

    };

    getFilteredChannels = (filter) => {
        if (filter == "all") {
            return this.state.channels;
        } else if (filter === "online") {

            return this.state.channels.filter((channel) => {
                return channel.status == "online"
            })

        } else if (filter === "offline") {

            return this.state.channels.filter((channel) => {
                return channel.status == "offline"
            })

        }
    };

    render() {
        return (
            <Container>
                <TitleArea>Twitch Streamers</TitleArea>
                <FilterArea stateChange={(state) => {
                    this.setState({filter: state});
                }}/>
                <ChannelItems channels={this.getFilteredChannels(this.state.filter)}/>
            </Container>
        );
    }
}

export default App;
