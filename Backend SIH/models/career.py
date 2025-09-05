from models import db

class Career(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    industry = db.Column(db.String(50))
    average_salary = db.Column(db.String(20))
    required_skills = db.Column(db.Text)  # Store comma-separated string
    growth_rate = db.Column(db.String(20))
    education = db.Column(db.String(100))
