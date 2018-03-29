import React , {Component} from 'react';
import Layouts from '../Layouts/Layouts';
import CommentForm from '../Forms/CommentForm';
class Homepage extends Component {
    render(){
        return (
            <Layouts >
                <CommentForm />
            </Layouts>
        )        
    }
}

export default Homepage;