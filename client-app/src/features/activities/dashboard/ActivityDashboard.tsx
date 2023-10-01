import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm:(id: string) => void;
    closeForm: ()=> void;
    createOrEdit: (activity:Activity)=> void;
    deleteActivity: (id:string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities,
    selectedActivity, 
    selectActivity, 
    cancelSelectActivity,
    editMode,
    openForm,
    closeForm,
    createOrEdit,
    deleteActivity,
    submitting}: Props) {
    return (
        <Grid fluid={"true"}>
            <Grid.Column width={'10'}>
                <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity} 
                    deleteActivity={deleteActivity} 
                    submitting={submitting}/>
            </Grid.Column>
            <Grid.Column width={'6'}>
                {
                    selectedActivity && !editMode &&
                    <ActivityDetails 
                        activity={selectedActivity} 
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}>    
                    </ActivityDetails> 
                }
                {  
                    editMode &&
                    <ActivityForm 
                        activity={selectedActivity} 
                        closeForm={closeForm} 
                        createOrEdit={createOrEdit} 
                        deleteActivity={deleteActivity}
                        submitting={submitting}></ActivityForm>
                }
                
            </Grid.Column>
        </Grid>
    )
}