import { observer } from "mobx-react-lite";
import { Profile } from "../../app/models/profile";
import { Button, Reveal } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { SyntheticEvent } from "react";

interface Props {
    profile: Profile;
}

export default observer(function FollowButton({profile}: Props) {
    const {profileStore, userStore} = useStore();
    const {updateFollowing, loading} = profileStore;

    if(userStore.user?.userName === profile.username) return null;

    /**
     * ProfileCard component is placed every thing in link tag. So when click button in a link, 
     * it will be redirect to page which specify in link
     * to prevent this behaviour we use below function
     * @param e 
     * @param username 
     */
    function handleFollow(e: SyntheticEvent, username: string) {
        e.preventDefault();
        profile.following ? updateFollowing(username, false) : updateFollowing(username, true);

    }
    return (
        <Reveal animated="move">
        <Reveal.Content visible style={{width: '100%'}}>
                <Button 
                    fluid
                    color='teal'
                    content={profile.following ? 'Following' : 'Not following'}
                />
            </Reveal.Content>
            <Reveal.Content hidden style={{width: '100%'}}>
                <Button 
                    fluid
                    basic
                    color={profile.following ? 'red' : 'green'}
                    content={profile.following ? 'Unfollow' : 'Follow'}
                    loading={loading}
                    onClick={(e) => handleFollow(e, profile.username)}
                />
            </Reveal.Content>
        </Reveal>
    )

})