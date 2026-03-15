import os

from flask import Flask, request, jsonify
import anthropic

app = Flask(__name__)

anthropic_client = anthropic.Anthropic(
    api_key=os.environ.get("ANTHROPIC_API_KEY")
)


@app.route("/")
def home():
    return "Compliance Quest is Running!"


@app.route("/ai-tutor", methods=["POST"])
def ai_tutor():
    data = request.get_json(force=True)

    question = data.get("question", "")
    user_answer = data.get("user_answer", "")
    correct_answer = data.get("correct_answer", "")
    explanation = data.get("explanation", "")

    prompt = f"""
You are an expert nurse educator teaching hospital staff about accreditation standards.

The user saw this quiz question and explanation:

Question: {question}
User's answer: {user_answer}
Correct answer: {correct_answer}
Standard explanation: {explanation}

Explain the concept clearly in bedside language that a busy nurse or scrub tech will understand.
Use one brief OR or SPD scenario to make it concrete.
Stay under 180 words.
Do not mention AI or that you are an AI system.
"""

    try:
        resp = anthropic_client.messages.create(
            model="claude-3-5-sonnet-20240620",
            max_tokens=300,
            temperature=0.4,
            messages=[{"role": "user", "content": prompt}],
        )

        ai_text = resp.content[0].text if resp.content else "Sorry, I could not generate an explanation."

        return jsonify({"ai_explanation": ai_text})

    except Exception:
        return jsonify({
            "ai_explanation": "Sorry, the AI tutor is unavailable right now. Please use the standard explanation above."
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)