import React from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ note, onDelete }) => {
    const formattedDate = new Date(note.created_at).toLocaleString();

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-white">{note.title}</h2>
            <p className="text-gray-300 mb-3">{note.content}</p>
            <p className="text-xs text-gray-500">Created at: {formattedDate}</p>
            <div className="flex justify-end gap-2 mt-4">
                <Link to={`/edit/${note.id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-1">
                    ✏️ Edit
                </Link>
                <button onClick={() => onDelete(note.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded flex items-center gap-1">
                    🗑 Delete
                </button>
            </div>
        </div>
    );
};

export default NoteCard;
