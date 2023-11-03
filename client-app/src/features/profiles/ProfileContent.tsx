import { Tab } from "semantic-ui-react"
import ProfilePhoto from "./ProfilePhoto"
import { Profile } from "../../app/models/profile"
import { observer } from "mobx-react-lite";
import ProfileFollowing from "./ProfileFollowing";
import { useStore } from "../../app/stores/store";

interface Props {
    profile: Profile;
}

export default observer(function ProfileContent({profile}: Props) {
    const {profileStore} = useStore();
    const panes = [
        {menuItem: 'About', render:() => <Tab.Pane>About Content</Tab.Pane>},
        {menuItem: 'Photos', render:() => <ProfilePhoto profile={profile}/>},
        {menuItem: 'Events', render:() => <Tab.Pane>Events Content</Tab.Pane>},
        {menuItem: 'Followers', render:() => <ProfileFollowing />},
        {menuItem: 'Following', render:() => <ProfileFollowing />},
    ]
    
    return (
        <Tab
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
            onTabChange={(_, data) => profileStore.setActiveTab(data.activeIndex)}
        />
    )
})