import React, { useState } from "react";

const ReviewPage = () => {
    const [reviews, setReviews] = useState([
        { name: "John Doe", review: "Great product!" },
        { name: "Jane Smith", review: "Excellent service!" },
        { name: "Mike Johnson", review: "Highly recommended!" },
    ]);
    const [newReview, setNewReview] = useState("");
    const [newName, setNewName] = useState("");

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleReviewChange = (event) => {
        setNewReview(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newName.trim() !== "" && newReview.trim() !== "") {
            const newReviewObj = { name: newName, review: newReview };
            setReviews((reviews) => [...reviews, newReviewObj]);

            setNewName("");
            setNewReview("");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Review Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded shadow-md"
                        >
                            <strong className="text-lg mb-2">{review.name}</strong>
                            <p>{review.review}</p>
                        </div>
                    ))
                )}
            </div>
            <div className="w-[50%] ">
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    value={newName}
                    onChange={handleNameChange}
                    placeholder="Your name"
                    className="w-full py-2 px-4 rounded border border-gray-300 mb-2"
                />
                 <input
                    type="text"
                    value={newName}
                    onChange={handleNameChange}
                    placeholder="Your email"
                    className="w-full py-2 px-4 rounded border border-gray-300 mb-2"
                />
                <textarea
                    value={newReview}
                    onChange={handleReviewChange}
                    placeholder="Write your review..."
                    className="w-full py-16 px-4 rounded border border-gray-300  mb-2"
                ></textarea>
               <button type="submit" className="border font-bold hover:bg-gray-700 rounded rounded-5 px-4 py-2 mt-4 inline-block py-2 px-4  hover:text-white
          hover:shadow-md duration-300 ease-in-out  border-gray-700  bg-white">Submit Review</button>

                    
                   
                    
                
            </form>
        </div>
        </div>
    );
};

export default ReviewPage;