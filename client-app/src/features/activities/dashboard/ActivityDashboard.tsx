import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useEffect } from "react";

export default observer(function ActivityDashboard() {
        const {activityStore} = useStore();
        const {loadActivities, activityRegistry} = activityStore;

        useEffect(() => {
          if (activityRegistry.size <= 1) {
            loadActivities();
          } 
        }, [loadActivities])
      
      
      if (activityStore.loadingInitial) {
        return <LoadingComponent content='Loading app' inverted={true}></LoadingComponent>
      }

        return (
            <Grid fluid={"true"}>
                <Grid.Column width={'10'}>
                    <ActivityList />
                </Grid.Column>
                <Grid.Column width={'6'}>
                    <h1>Activity Filter</h1>
                </Grid.Column>
            </Grid>
        )
})