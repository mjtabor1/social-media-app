from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from ..config import Config

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    db.init_app(app)
    jwt.init_app(app)

    # from .routes import auth, user, post
    # app.register_blueprint(auth.bp)
    # app.register_blueprint(user.bp)
    # app.register_blueprint(post.bp)

    return app
