import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../components/ui";
import { BASE_URL } from "../utils";

const EditNote = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchNote();
    }, []);

    const fetchNote = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/notes/${id}`);
            setTitle(response.data.title);
            setContent(response.data.content);
        } catch (error) {
            console.error("Error fetching note:", error);
        }
    };

    const updateNote = async () => {
        if (!title.trim() || !content.trim()) return;
        try {
            await axios.put(`${BASE_URL}/notes/${id}`, { title, content });
            navigate("/");
        } catch (error) {
            console.error("Error updating note:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-bold text-blue-400 mb-4">✏️ Edit Note</h1>
                
                <label className="block text-gray-300 text-sm font-semibold mb-2">Title</label>
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter note title"
                    className="mb-4 bg-gray-700 border border-gray-600 text-white"
                />

                <label className="block text-gray-300 text-sm font-semibold mb-2">Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter note content"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white h-32 mb-4"
                ></textarea>

                <div className="flex justify-end gap-2">
                    <Button onClick={updateNote} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                        ✅ Update
                    </Button>
                    <Button onClick={() => navigate("/")} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow">
                        ❌ Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EditNote;
