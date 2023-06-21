import { useContext } from "react";
import { GithubContext } from "../contexts/GithubContext";

export function GithubCommitFunc (props) {
    const {
        commits,
        handleGithubItemClick,
        selectedSha,
        commitsSelected,
        viewGithubCommits,
    } = useContext(GithubContext)

    const GithubCommitOverrideCollectionOverride={
        GithubCommitCollection:{
            items: viewGithubCommits === true ? commitsSelected : commits }}

    const GithubCommitOverride = ({ item, index })  => {
        const selectDiselectedBG = selectedSha.includes(item.SHA) ?
         "rgba(175, 181, 192, 1)" : "white";
        let gitDate = "";
        let newDate = new Date(item.Date);
        if (!isNaN(newDate)) 
            gitDate = newDate.toISOString().slice(0, 16).replace('T', ' ');
        return {
            overrides: {
                commitee_name_text:{ children: item.Name },
                date_text: {children: gitDate},
                comitee_icon_image: {src:item.AvatarURL},
                sha_text:{ children: item.SHA },
                "Rectangle 1":{onClick: () => (handleGithubItemClick(item.CommitURL,item.SHA)),
                    backgroundColor:selectDiselectedBG},
                commit_message_text_field:{value: item.Message}
        }}}

    return {
        GithubCommitOverrideCollectionOverride,
        GithubCommitOverride,
    }}