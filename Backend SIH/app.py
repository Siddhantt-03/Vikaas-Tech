import json
from flask import Flask, jsonify, request
from flask_cors import CORS

from models import db
from models.career import Career
from models.course import Course

app = Flask(__name__)
app.config.from_object('config.Config')
CORS(app)  # Enables CORS for all domains on all routes by default

db.init_app(app)

@app.route('/api/status')
def status():
    return jsonify({"message": "Backend is running!"})

@app.route('/api/careers')
def get_careers():
    careers = Career.query.all()
    results = []
    for career in careers:
        results.append({
            "id": career.id,
            "title": career.title,
            "description": career.description,
            "industry": career.industry,
            "averageSalary": career.average_salary,
            "requiredSkills": career.required_skills.split(",") if career.required_skills else [],
            "growthRate": career.growth_rate,
            "education": career.education
        })
    return jsonify(results)

@app.route('/api/courses')
def get_courses():
    courses = Course.query.all()
    results = []
    for course in courses:
        results.append({
            "id": course.id,
            "title": course.title,
            "provider": course.provider,
            "duration": course.duration,
            "difficulty": course.difficulty,
            "rating": course.rating,
            "price": course.price,
            "topics": course.topics.split(",") if course.topics else [],
            "description": course.description,
            "category": course.category,
        })
    return jsonify(results)

@app.route('/api/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    user_text = data.get('text', '').lower()
    if not user_text:
        return jsonify({'careers': [], 'courses': []})

    keywords = [word.strip(",. ") for word in user_text.split() if len(word) > 2]
    careers = Career.query.all()
    courses = Course.query.all()

    def relevance(item, fields):
        score = 0
        for field in fields:
            content = getattr(item, field, "")
            searchable = content.lower() if content else ""
            score += sum(kw in searchable for kw in keywords)
        return score

    ranked_careers = [(relevance(c, ['title', 'description', 'required_skills']), c) for c in careers]
    ranked_careers = [pair for pair in ranked_careers if pair[0] > 0]
    ranked_careers.sort(reverse=True, key=lambda x: x[0])

    ranked_courses = [(relevance(course, ['title', 'description', 'topics']), course) for course in courses]
    ranked_courses = [pair for pair in ranked_courses if pair[0] > 0]
    ranked_courses.sort(reverse=True, key=lambda x: x[0])

    careers_output = [{
        "id": c.id,
        "title": c.title,
        "description": c.description,
        "industry": c.industry,
        "averageSalary": c.average_salary,
        "requiredSkills": c.required_skills.split(",") if c.required_skills else [],
        "growthRate": c.growth_rate,
        "education": c.education
    } for _, c in ranked_careers[:5]]

    courses_output = [{
        "id": course.id,
        "title": course.title,
        "provider": course.provider,
        "duration": course.duration,
        "difficulty": course.difficulty,
        "rating": course.rating,
        "price": course.price,
        "topics": course.topics.split(",") if course.topics else [],
        "description": course.description,
        "category": course.category,
    } for _, course in ranked_courses[:5]]

    return jsonify({
        "careers": careers_output,
        "courses": courses_output
    })

def load_careers_data():
    with open('data/careers.json', 'r', encoding='utf-8') as file:
        careers_data = json.load(file)
        for data in careers_data:
            existing = Career.query.filter_by(id=data['id']).first()
            if not existing:
                career = Career(
                    id=data['id'],
                    title=data['title'],
                    description=data['description'],
                    industry=data['industry'],
                    average_salary=data['averageSalary'],
                    required_skills=",".join(data['requiredSkills']),
                    growth_rate=data['growthRate'],
                    education=data['education']
                )
                db.session.add(career)
        db.session.commit()

def load_courses_data():
    with open('data/courses.json', 'r', encoding='utf-8') as file:
        courses_data = json.load(file)
        for data in courses_data:
            existing = Course.query.filter_by(id=data['id']).first()
            if not existing:
                course = Course(
                    id=data['id'],
                    title=data['title'],
                    provider=data['provider'],
                    duration=data['duration'],
                    difficulty=data['difficulty'],
                    rating=data['rating'],
                    price=data['price'],
                    topics=",".join(data['topics']),
                    description=data['description'],
                    category=data['category']
                )
                db.session.add(course)
        db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        load_careers_data()
        load_courses_data()
    app.run(debug=True)
