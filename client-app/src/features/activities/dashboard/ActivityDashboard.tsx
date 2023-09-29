import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid fluid>
            <Grid.Column width={'10'}>
                <ActivityList activities={activities} />
            </Grid.Column>
            <Grid.Column width={'4'}>
                <ActivityDetails activity={activities[0]}></ActivityDetails>
            </Grid.Column>
        </Grid>
    )
}