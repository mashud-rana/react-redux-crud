import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, updatePost } from "./../redux/features/postSlice";
import { Form, Button, Card, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import LoadingCard from "./LoadingCard";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { id } = useParams("id");
  const navigate = useNavigate();
  const { post, loading } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { TextArea } = Input;

  useEffect(() => {
    dispatch(getPost(id));
    if (Object.values(post).length > 0) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [id]);

  const submitForm = (event) => {
    event.preventDefault();
    const data = {
      id: id,
      data: {
        title,
        body,
      },
    };
    dispatch(updatePost(data));
    if(loading==false){
        navigate('/');
    }

  };

  return (
    <>
      {loading ? (
        <LoadingCard count={1}></LoadingCard>
      ) : (
        <Card type="inner" title={post.title}>
          <h2>Edit post {id}</h2>
          <form onSubmit={submitForm}>
            <Input
              placeholder="Post Title"
              style={{ width: "300px" }}
              type="text"
              onChange={(event) => setTitle(event.target.value)}
              defaultValue={post.title}
            ></Input>
            <br />
            <br />
            <TextArea
              rows={4}
              placeholder="Post Details"
              style={{ width: "300px" }}
              onChange={(event) => setBody(event.target.value)}
              defaultValue={post.body}
            />
            <br />
            <br />
            <Space>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
              <Button type="danger" onClick={() => navigate("/")}>
                Back Home Page
              </Button>
            </Space>
          </form>
        </Card>
      )}
    </>
  );
};

export default EditPost;
