import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function UsersAdminInfoFunc (props) {
    const {
        selectedAdminUser,
        allUsers,
        userSubImageURL,
        handleAdminUserItemClick,
    } = useContext(UserContext);

    const UsersAdminInfoOverrideCollectionOverride={
        UsersAdminInfoCollection:{
            items: allUsers }}

    const UsersAdminInfoOverride = ({ item, index })  => {
        let asignee_image_url = "";
        userSubImageURL.map((data, index) => {
            if (data.sub === item.sub) 
            asignee_image_url = data.url;
           return asignee_image_url;
        });
        const selectDiselectedBG = selectedAdminUser.includes(item.id) ?
         "rgba(175, 181, 192, 1)" : "white";

        return {
            overrides: {
                username_text:{ children: item.username },
                sub_text: {children: item.sub},
                user_icon_image: {src: asignee_image_url },
                 "Rectangle 1":{onClick: () => (handleAdminUserItemClick(item.id)),
                     backgroundColor:selectDiselectedBG},
        }}}

    return {
        UsersAdminInfoOverrideCollectionOverride,
        UsersAdminInfoOverride,
    }}