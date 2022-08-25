import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card bg-white shadow-xl m-2">
                <div className="card-body">
                    <div>Menu Edit</div>
                    <input
                        type="text"
                        placeholder="Judul"
                        className="m-2 input input-bordered w-full bg-slate-50"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="m-2 input input-bordered w-full bg-slate-50"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="m-2 input input-bordered w-full bg-slate-50"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn btn-success m-2"
                        onClick={() => handleSubmit()}
                    >
                        EDIT STATUS
                    </button>
                </div>
            </div>
        </div>
    );
}
