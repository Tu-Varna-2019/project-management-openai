import '@aws-amplify/ui-react/styles.css';
import { UserClass } from '../classes/UserClass';


export function NotFound404Func () {

    const {
        UserSettingsMenu,
        handleSettings
    } = UserClass();

    const NotFound404Override={
        SelectField:{
            onChange : (event) => (handleSettings(event)),
            style:{ color: "white"},
            options: [UserSettingsMenu.SignOut,UserSettingsMenu.ChangePassword,UserSettingsMenu.DeleteAccount]
        }
    }

    return {
        NotFound404Override
    }
}