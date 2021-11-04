import { connect } from 'react-redux';
import './App.css';
import SubTitle from './components/SubTitle';

function App(props) {
  return (
    <div className="App">
     <h1>{props.title}</h1>
     <SubTitle />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.shared.title
  }
}

export default connect(mapStateToProps, {})(App);
