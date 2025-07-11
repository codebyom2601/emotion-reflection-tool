# Emotion Reflection Tool 🧠

A simple full-stack web app that lets users reflect on how they feel and get a mock emotion analysis.

---

## 💻 Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: FastAPI (Python)
- **Emotion Response**: Random (mock) emotion + confidence score

---

## 🚀 How to Run Locally

### 1. Start Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn
uvicorn main:app --reload --port 8000
