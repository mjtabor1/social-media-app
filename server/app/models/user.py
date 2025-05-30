from .. import db
from datetime import datetime

class Followers(db.Model):
    __tablename__ = 'followers'
    follower_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    followed_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)
    followers = db.relationship(
        'Followers',
        foreign_keys='Followers.followed_id',
        backref=db.backref('followed', lazy='dynamic'),
        lazy='dynamic'
    )
    following = db.relationship(
        'Followers',
        foreign_keys='Followers.follower_id',
        backref=db.backref('follower', lazy='dynamic'),
        lazy='dynamic'
    )