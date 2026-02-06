import { GoogleGenAI } from "@google/genai";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const LearningUS = () => {
  const [topic, setTopic] = useState("");
  const [userRequest, setUserRequest] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");
  const [aiResponse, setAiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedTopic = localStorage.getItem("topic");
    if (savedTopic) setTopic(JSON.parse(savedTopic));
  }, []);

  const handleRequest = async () => {
    if (isLoading) return;

    if (!topic) {
      setError("Please select a subject first.");
      return;
    }

    if (!userRequest.trim()) {
      setError("Please type a question.");
      return;
    }

    setError("");
    setIsLoading(true);
    setAiResponse(null);

    const question = userRequest.trim();
    setSubmittedQuestion(question);
    setUserRequest("");
    localStorage.setItem("topic", JSON.stringify(topic));

    const prompt = `
You are an expert ${topic} educator with 10+ years of teaching experience.
Respond to this user request: "${question}"

OUTPUT FORMAT REQUIREMENTS:
- Return ONLY valid JSON
- Output must be an array with exactly one object

Schema:
{
  "summary": "Exactly four word headline",
  "answer": "Detailed explanation"
}

The answer must include:
EXPLANATION:
Simple step-by-step explanation.

EXAMPLE:
Practical example with input/output.

SUMMARY:
What, When, Where, Why, How.

Use plain text only.
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      });

      const text = response.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      const match = text.match(/\[.*\]/s);
      if (!match) throw new Error("Invalid AI response");

      const data = JSON.parse(match[0]);
      setAiResponse(data[0]);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* ADD TOP PADDING EQUAL TO NAVBAR HEIGHT */}
      <div className="min-h-screen bg-black text-white flex flex-col pt-24">

        {/* SUBJECT SELECT */}
        <div className="p-6 border-b border-zinc-800">
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm focus:border-red-500 outline-none"
          >
            <option value="" disabled>Select Subject</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Python">Python</option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>
        </div>

        {/* BIG ANSWER AREA */}
        <div className="flex-1 p-8 overflow-y-auto">

          {/* ANSWER BOX */}
          <div className="h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-10 flex flex-col">
            
            {/* USER QUESTION */}
            {submittedQuestion && (
              <div className="mb-8 p-6 bg-zinc-950 border border-zinc-800 rounded-xl">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                  Your Question
                </p>
                <p className="text-lg font-semibold text-white">
                  {submittedQuestion}
                </p>
              </div>
            )}

            {/* AI ANSWER */}
            <div className="flex-1 text-zinc-300 text-base leading-relaxed whitespace-pre-wrap">
              {isLoading && (
                <p className="text-zinc-400 italic animate-pulse">
                  🤖 Thinking...
                </p>
              )}
              {!isLoading && aiResponse && (
                <>
                  <h1 className="text-3xl font-extrabold text-red-500 mb-6">
                    {aiResponse.summary}
                  </h1>
                  <div>{aiResponse.answer}</div>
                </>
              )}
              {!isLoading && !aiResponse && !submittedQuestion && (
                <p className="text-zinc-600 flex items-center justify-center h-full">
                  Ask a question to start learning 📘
                </p>
              )}
            </div>

          </div>
        </div>

        {/* INPUT AREA */}
        <div className="border-t border-zinc-800 p-6 bg-zinc-950 sticky bottom-0">
          {error && (
            <p className="text-red-500 text-sm mb-2">{error}</p>
          )}

          <div className="flex gap-3">
            <textarea
              value={userRequest}
              onChange={(e) => setUserRequest(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleRequest();
                }
              }}
              placeholder="Ask a technical question..."
              rows={1}
              className="flex-1 resize-none bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-sm focus:border-red-500 outline-none"
            />

            <button
              onClick={handleRequest}
              disabled={isLoading}
              className="bg-white text-black px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white disabled:opacity-50 transition-all"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LearningUS;
