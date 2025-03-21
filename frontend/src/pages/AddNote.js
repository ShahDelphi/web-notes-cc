import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components/ui";
import { BASE_URL } from "../utils";

const AddNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const addNote = async () => {
        if (!title.trim() || !content.trim()) return;
        try {
            await axios.post(`${BASE_URL}/notes`, { title, content });
            navigate("/");
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-bold text-green-400 mb-4">📝 Add New Note</h1>

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
                    <Button onClick={addNote} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow">
                        ✅ Save
                    </Button>
                    <Button onClick={() => navigate("/")} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow">
                        ❌ Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
