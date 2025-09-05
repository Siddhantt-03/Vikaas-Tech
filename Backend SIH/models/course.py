from models import db

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    provider = db.Column(db.String(100))
    duration = db.Column(db.String(50))
    difficulty = db.Column(db.String(50))
    rating = db.Column(db.Float)
    price = db.Column(db.String(50))
    topics = db.Column(db.Text)  # Comma-separated string for simplicity
    description = db.Column(db.Text)
    category = db.Column(db.String(50))
