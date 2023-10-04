import { Button, Icon, Item, Segment, SegmentGroup } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}:Props) {
    return(
        <SegmentGroup>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>
                                Host by 
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock"></Icon>{activity.date}
                    <Icon name="marker"></Icon>{activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendess go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                as={Link}
                to={`/activities/${activity.id}`}
                color="teal"
                floated="right"
                content="view"></Button>
            </Segment>
        </SegmentGroup>
    )
}