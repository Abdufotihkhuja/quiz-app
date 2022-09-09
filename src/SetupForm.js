import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
    const { error, quiz, handleChange, handleSubmit } = useGlobalContext();

    return (
        <main>
            <section className="quiz quiz-small">
                <form className="setup-form">
                    {/* amount */}
                    <div className="form-control">
                        <h2>Setup quiz</h2>
                        <label htmlFor="amount">Number of the questions</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={quiz.amount}
                            onChange={handleChange}
                            className="form-input"
                            min={1}
                            max={50}
                        />
                    </div>
                    {/* category */}
                    <div className="form-control">
                        <label htmlFor="category">select category</label>
                        <select
                            name="category"
                            className="form-input"
                            id="category"
                            value={quiz.category}
                            onChange={handleChange}
                        >
                            <option value="sports">Sports</option>
                            <option value="history">history</option>
                            <option value="politics">politics</option>
                        </select>
                    </div>
                    {/* difficulty */}
                    <div className="form-control">
                        <label htmlFor="difficulty">select difficulty</label>
                        <select
                            name="difficulty"
                            className="form-input"
                            id="difficulty"
                            value={quiz.difficulty}
                            onChange={handleChange}
                        >
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                    </div>
                    {error && (
                        <p className="error">
                            Can't generate questions, please try different
                            options
                        </p>
                    )}
                    <button
                        type="submit"
                        className="submit-btn"
                        onClick={handleSubmit}
                    >
                        Start
                    </button>
                </form>
            </section>
        </main>
    );
};

export default SetupForm;
