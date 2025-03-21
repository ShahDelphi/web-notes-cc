import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "../components/ui";
import NoteCard from "../components/NoteCard";
import { BASE_URL } from "../utils";

const Home = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/notes`);
            setNotes(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    const deleteNote = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/notes/${id}`);
            fetchNotes();
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-extrabold text-blue-400">📒 Notes List</h1>
                    <Link to="/add">
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow flex items-center gap-2">
                            ➕ Add New Note
                        </Button>
                    </Link>
                </div>

                {notes.length === 0 ? (
                    <p className="text-center text-gray-400 text-lg">Belum ada catatan. Tambahkan sekarang! 😊</p>
                ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                        {notes.map((note) => (
                            <NoteCard key={note.id} note={note} onDelete={deleteNote} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;