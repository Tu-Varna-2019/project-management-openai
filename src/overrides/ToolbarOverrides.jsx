import { TicketClass } from '../classes/TicketClass';
import { User2Class } from '../classes/User2Class';
import { ToolbarSelectClass } from '../classes/ToolbarSelectbarClass';


export function ToolbarFunc (props) {

    const {
        handleGoToCreateTicketClick,
    } = TicketClass();

    const {
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,
        handleProfileSelectChange,
        assignedToMe,
    } = ToolbarSelectClass();

    const {
        userProfileURL,
        alertVariant,
        alertVisibility,
        alertDescription,
        currentUser,
    } = User2Class();

    
    const ToolbarOverride={
        profile_icon_image:{
            src: userProfileURL
        },
        success_alert : { 
            style:{"display": alertVisibility },
            children: alertDescription,
            variant: alertVariant,
        },
        projects_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleProjectsSelectChange(event)),
            options:["","switch project"],
        },
        your_work_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleYourWorkSelectChange(event)),
            options: assignedToMe ,
        },
        issue_templates_select_field:{
            style:{color:"transparent"},
            //onChange : (event) => (handleSelectedProjectOnChange(event)),
            options:["","all templates","project templates"],
        },
        profile_select_field: {
            style:{color:"transparent"},
            onChange : (event) => (handleProfileSelectChange(event)),
            options:["",currentUser.username,"Manage account","Log out"],
        },
        teams_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleTeamsSelectChange(event)),
            options:["","all users"],
        },
        create_ticket_button:{
            onClick: (event) => (handleGoToCreateTicketClick(event))},
        }

    return {
        ToolbarOverride
    }
}