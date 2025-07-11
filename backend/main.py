from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

emotions = [
    "Happy", "Sad", "Angry", "Excited", "Anxious", "Confident", "Tired", "Motivated"
]

@app.post("/analyze")
def analyze_text(input: TextInput):
    emotion = random.choice(emotions)
    confidence = round(random.uniform(0.7, 0.99), 2)
    return {
        "emotion": emotion,
        "confidence": confidence
    }
