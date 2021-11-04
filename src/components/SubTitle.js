import axios from "axios"
import { connect } from "react-redux"
import { setEditing, setSubText, setSubTitle } from "../actions/sub-title.actions"
import { axiosWithAuth } from "../services/auth-with-token"
import { logOut, signIn } from "../services/firebase.service"

const SubTitle = (props) => {
    // const getData = () => {
    //     axios.get('myurl').then(res => console.log(res))
    // }
    // const getData = () => {
    //     axiosWithAuth().get('myurl').then(res => console.log(res));
    // }
    return (
        <div>
            {props.editing ? (
                <div>
                    <input value={props.subText} onChange={(e) => props.setSubText(e.target.value)} />
                    <button onClick={() => props.setSubTitle()}>Submit</button>
                </div>

            ) : (
                <div>
                    <h3>{props.subTitle}</h3>
                    <button onClick={() => props.setEditing()}>editing</button>
                </div>
            )}
            <button onClick={() => signIn()}>SignIn</button>
            <button onClick={() => logOut()}>SignOut</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        subTitle: state.subTitle.subTitle,
        editing: state.subTitle.editing,
        subText: state.subTitle.subText
    }
}

export default connect(mapStateToProps, { setEditing, setSubText, setSubTitle })(SubTitle);