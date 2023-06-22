import { useContext } from "react";
import { GithubContext } from "../contexts/GithubContext";
import { UserContext } from "../contexts/UserContext";

export function UsersAdminInfoFunc (props) {
    const {
        setAllUsers,
        userSubImageURL,
    } = useContext(UserContext);

    const UsersAdminInfoOverrideCollectionOverride={
        GithubCommitCollection:{
            items: setAllUsers }}

    const UsersAdminInfoOverride = ({ item, index })  => {
        let asignee_image_url = "";
        userSubImageURL.map((data, index) => {
            if (data.sub === item.Asignee) 
            asignee_image_url = data.url;
           return asignee_image_url;
        });
        // const selectDiselectedBG = selectedSha.includes(item.SHA) ?
        //  "rgba(175, 181, 192, 1)" : "white";

        return {
            overrides: {
                username_text:{ children: item.usename },
                sub_text: {children: item.sub},
                user_icon_image: {src: asignee_image_url },
                // "Rectangle 1":{onClick: () => (handleGithubItemClick(item.CommitURL,item.SHA)),
                //     backgroundColor:selectDiselectedBG},
        }}}

    return {
        UsersAdminInfoOverrideCollectionOverride,
        UsersAdminInfoOverride,
    }}