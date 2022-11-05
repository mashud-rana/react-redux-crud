import { useState, useEffect } from "react";
import { Button, Input, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost,deletePost } from "../redux/features/postSlice";
import LoadingCard from "./LoadingCard";

const Index = () => {
  const { post, loading,error } = useSelector((store) => ({ ...store.app }));
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const navigate = useNavigate();

  const fetchUserPost = (value) => {
    if (!id) {
      window.alert("please Provide an Id");
    } else {
      dispatch(getPost(id));
    }
  };

  const submitDeletePost=(id)=>{
    if(post){
      dispatch(deletePost(id));
    }
  }

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Fetch Post</h1>
        <Input
          placeholder="Enter User Id"
          type="number"
          onChange={(event) => setId(event.target.value)}
          value={id}
          style={{ width: "300px" }}
          min="1"
        ></Input>

        <br />
        <br />
        <br />
        <Space>
          <Button type="primary" onClick={fetchUserPost}>
            Fetch User Post
          </Button>
          <Button type="secondary" onClick={() => navigate("/create-post")}>
            Create User Post
          </Button>
        </Space>

        <br />
        <br />
        <br />
        {loading ? (
          <LoadingCard count={1}></LoadingCard>
        ) : (
          <>
            {Object.keys(post).length > 0? (
              <div className="site-card-border-less-wrapper">
                <Card type="inner" title={post.title}>
                  <p>User Id: {post.id}</p>
                  <span>{post.body}</span>
                  <br />
                  <br />
                  <Space>
                    <Button type="primary" onClick={()=>navigate(`/edit-post/${post.id}`)}>Edit</Button>
                    <Button type="danger" onClick={()=>submitDeletePost(post.id)}>Delete</Button>
                  </Space>
                  
                </Card>
                
              </div>
            ) : (
              <p>Post Not Found</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Index;
