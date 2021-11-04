import { connect } from "react-redux"
import { setEditing, setSubText, setSubTitle } from "../actions/sub-title.actions"

const SubTitle = (props) => {
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