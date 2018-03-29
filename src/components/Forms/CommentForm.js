import React , {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class CommentForm extends Component {
    constructor(){
        super();
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleClick = this.onHandleClick.bind(this);
        this.state = {
            data : {
                comment : '',
                author : ''
            },                        
            comments: []
        }
    }
    onHandleChange(e){
        this.setState({data: {...this.state.data , [e.target.name]:e.target.value} } );        
        
    }
    onHandleClick(e){  
        
        this.setState({comments : [...this.state.comments , this.state.data] });        
        
    }
    render(){
        let {comments} = this.state;        
        let post = comments.map((data , index) => (
            <Jumbotron key={index}>
                <div className="container">
                    <h1>{data.comment}</h1>
                    <p>{data.author}</p>
                    <Link to={"/items/" + index + "/?comment=" + data.comment + "?author="+data.author}>Read More..</Link>
                </div>
            </Jumbotron>
        ));
    
        return (
            <div>
                <div className="container">
                    <div className="mx-auto">
                        <input type="text"  name="comment" onChange={this.onHandleChange} placeholder="Comment"/>
                    </div>
                    <div className="mx-auto">
                        <input type="text"  name="author"  onChange={this.onHandleChange} placeholder="Author"/>
                    </div>
                    <div className="mx-auto">
                        <button onClick={this.onHandleClick}>Comment</button>
                    </div>
                </div>
                <br/>                
                {post}                
            </div>
        )
    }    
}

export default CommentForm;