import {  Button, Col, Row, Form } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import axios from 'axios';
import React from 'react';
import CommentAlert from './CommentAlert';

interface IProps {
    githubrepos_id:string,
    repo_id:number,
    hasUser:boolean
}
const Comments: React.FC<IProps> = (props) => {
    
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const {githubrepos_id, repo_id, hasUser} = props;
    const [commentResponse, setCommentResponse] = useState(
        {commentResponseText: "Share your thoughts on this project! Leave a comment below:",
        isError:false});

    
    const buttonStyle = {
        border: '1px solid',

    };

    

    async function loadComments(){
       
        const comments:any = await axios.get(`/comments/${repo_id}`);
        setComments(comments.data);
       
     }
    useEffect(()=>{
        loadComments();
     },[]); //pass empty array to avolid call after each update.
     
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment(e.target.value);
    };

    const addComment=async()=>{

        if(newComment.length<1){
            setCommentResponse({isError:true,commentResponseText:"Err ... ! You need say something about this project !"})
        }
        else{
       
            let result:any = await axios.post("/comments",{githubrepos_id, repo_id,comment:newComment}, {withCredentials: true});
            
            setNewComment("");
        
            await loadComments();  

            setCommentResponse({isError:false,commentResponseText:"Cool! Thanks for your feedback"})
        }
    }

    console.log(comments);

    let commentsData = comments.map((comment)=>{
        return <Row key={comment._id} className="mt-2 mb-5">
                <Col sm={0} lg={4}> </Col>
                <Col sm={12} lg={4}> <Row>
                             <Col xs={3} sm={3} lg={2}><a href={comment.comment_from.user.profileUrl}><img style={{width:'70px',height:'70px'}} src={comment.comment_from.user.photos[0].value}/></a></Col>
                             <Col xs={9} sm={9} lg={10} className="text-left">
                                <Row>
                                <Col sm={12} lg={12}>
                                 <Form.Label>{comment.comment_from.user.displayName} </Form.Label>
                                 </Col>
                                 </Row>
                                 <Row>
                                <Col sm={12} lg={12}>
                                 <i>{comment.comment} </i>
                                 </Col>
                                 </Row>
                             </Col> 
                             </Row>
                </Col>
                <Col sm={0} lg={4}> </Col>
            </Row>
        
    })

    return (
        <>
            <Row>
                <Col sm={0}  lg={4}></Col>
                <Col sm={12} lg={4}><CommentAlert isError={commentResponse.isError} text={commentResponse.commentResponseText}/></Col>
                <Col sm={0}  lg={4}> </Col>
            </Row>

            <Row>
                <Col sm={0} lg={4}> </Col>
                <Col sm={12} lg={4}>  {hasUser?<Form.Control value={newComment} as="textarea" rows="3" onChange={onInputChange}/>:<Form.Control disabled as="textarea" rows="3" onChange={onInputChange}/>}
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