import React, { useState } from "react";
import styles from "./VideoUploadPage.module.css";
import { Typography, Button, Form, message, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Dropzone from "react-dropzone";
import axios from "axios";
const { TextArea } = Input;
const { Title } = Typography;

const PrivateOptions = [
    { value: 0, label: "Private" },
    { value: 1, label: "Public" },
];

const CategoryOptions = [
    { value: 0, label: "Film & Animation" },
    { value: 1, label: "Autos & Vehicles" },
    { value: 2, label: "Music" },
    { value: 3, label: "Pets & Animals" },
];

const VideoUploadPage = () => {
    const [videoTitle, setVideoTitle] = useState("");
    const [description, setDescription] = useState("");
    const [Private, setPrivate] = useState(0);
    const [category, setCategory] = useState("Film & Animation");

    const onTitleChange = (e) => {
        setVideoTitle(e.currentTarget.value);
    };

    const onChangeDescription = (e) => {
        setDescription(e.currentTarget.value);
    };

    const onPrivateChange = (e) => {
        setPrivate(e.currentTarget.value);
    };

    const onCategoryChange = (e) => {
        setCategory(e.currentTarget.value);
    };

    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: { "content-type": "multipart/form-data" },
        };
        formData.append("file", files[0]);

        axios
            .post("/api/video/uploadfiles", formData, config)
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data);
                } else {
                    alert("비디오 업로드를 실패했습니다.");
                }
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Title level={2}>Upload Video</Title>

                <Form>
                    <div className={styles.dropZone}>
                        {/* Drop zone */}
                        <Dropzone
                            onDrop={onDrop}
                            multiple={false}
                            maxSize={10000000}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <div
                                    className={styles.zone}
                                    {...getRootProps()}
                                >
                                    <input {...getInputProps()} />
                                    <PlusOutlined
                                        style={{ fontSize: "100px" }}
                                    />
                                </div>
                            )}
                        </Dropzone>
                        {/* Thumbnail */}
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <br />
                    <br />
                    <label>Title</label>
                    <Input onChange={onTitleChange} value={videoTitle}></Input>
                    <br />
                    <br />
                    <label>Description</label>
                    <TextArea
                        onChange={onChangeDescription}
                        value={description}
                    />

                    <br />
                    <br />

                    <select onChange={onPrivateChange}>
                        {PrivateOptions.map((item, index) => (
                            <option key={index} valuse={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <select onChange={onCategoryChange}>
                        {CategoryOptions.map((item, index) => (
                            <option key={index} valuse={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <Button type="primary" size="large" onClick>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default VideoUploadPage;
