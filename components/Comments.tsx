import { FormControl, Button, Col, Row, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface IProps {
    githubrepos_id:string,
    repo_id:number,
    hasUser:boolean
}
const Comments: React.FC<IProps> = (props) => {
    
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const {githubrepos_id, repo_id, hasUser} = props;
    
    
    const buttonStyle = {
        border: '1px solid',

    };

    async function loadComments(){
        try{
        const comments:any = await axios.get(`/comments/${repo_id}`);
        setComments(comments.data);
        }catch(ex){
            console.log("byorn: " + ex)
        }
     }
    useEffect(()=>{
        loadComments();
     },[]); //pass empty array to avolid call after each update.
     
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment(e.target.value);
    };

    const addComment=async()=>{
        console.log("before");
        let result:any = await axios.post("/comments",{githubrepos_id, repo_id,comment:newComment}, {withCredentials: true});
        console.log("after" + result);
        await loadComments();  
    }

    console.log(comments);

    let commentsData = comments.map((comment)=>{
        return <Row key={comment._id}>
                <Col lg={4}>  <img className="ownerImage" src={comment.comment_from.user.photos[0]}/></Col>
                <Col lg={4}> {comment.comment}</Col>
                <Col lg={4}> </Col>
            </Row>
        
    })

    return (
        <>
            <Row>
                <Col sm={0}  lg={4}></Col>
                <Col sm={12} lg={4}><Form.Label>Share your thoughts on this project! Leave a comment below:</Form.Label></Col>
                <Col sm={0}  lg={4}> </Col>
            </Row>

            <Row>
                <Col sm={0} lg={4}> </Col>
                <Col sm={12} lg={4}>  {hasUser?<Form.Control as="textarea" rows="3" onChange={onInputChange}/>:<Form.Control disabled as="textarea" rows="3" onChange={onInputChange}/>}
                </Col>
                <Col sm={0} lg={4}> </Col>
            </Row>
            <Row>
                <Col lg={4}> </Col>
                <Col lg={4}> <Button type="button" variant="secondary" className="btn-block btn-lg" onClick={addComment} style={buttonStyle}>Post Comment</Button></Col>
                <Col lg={4}> </Col>
            </Row>

            {commentsData}
        </>
    );

}
export default Comments;