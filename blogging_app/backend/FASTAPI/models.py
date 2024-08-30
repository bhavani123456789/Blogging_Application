
from sqlalchemy import Column, String, Integer, Text, TIMESTAMP, Enum, ForeignKey, func, Table
from sqlalchemy.orm import relationship
from database import Base
import enum

class BlogStatusEnum(enum.Enum):
    draft = "draft"
    published = "published"
    archived = "archived"

class UserStatusEnum(enum.Enum):
    active = "active"
    inactive = "inactive"

class CommentStatusEnum(enum.Enum):
    active = "active"
    inactive = "inactive"

class Blog(Base):
    __tablename__ = "blogs"
    bid = Column(Integer, primary_key=True, index=True, autoincrement=True)
    image = Column(String(255), nullable=False)
    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    category_id = Column(Integer, ForeignKey("categories.id"), nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now())  # Default current timestamp on insert
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())  # Default and update current timestamp on update
    status = Column(Enum(BlogStatusEnum), default=BlogStatusEnum.draft)

    categories = relationship("Category", back_populates="blogs")
    comments = relationship("Comment", back_populates="blog")
    tags = relationship("BlogTag", back_populates="blog")



class User(Base):
    __tablename__ = "users"
    userid = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    username = Column(String(255), nullable=False, unique=True)
    phone = Column(String(20))
    profile_image = Column(String(255))
    bio = Column(Text)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())
    status = Column(Enum(UserStatusEnum), default=UserStatusEnum.active)

    comments = relationship("Comment", back_populates="user")

class Comment(Base):
    __tablename__ = "comments"
    cid = Column(Integer, primary_key=True, autoincrement=True)
    userid = Column(Integer, ForeignKey("users.userid"), nullable=False)
    bid = Column(Integer, ForeignKey("blogs.bid"), nullable=False)
    comment = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())
    status = Column(String(50), default=CommentStatusEnum.active.value)

    user = relationship("User", back_populates="comments")
    blog = relationship("Blog", back_populates="comments")

class Tag(Base):
    __tablename__ = "tags"
    tag_id = Column(Integer, primary_key=True, autoincrement=True)
    tname = Column(String(255), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())
    status = Column(String(50), default="active")

    blog_tags = relationship("BlogTag", back_populates="tag")

class BlogTag(Base):
    __tablename__ = "blog_tag"
    tag_id = Column(Integer, ForeignKey("tags.tag_id"), primary_key=True)
    bid = Column(Integer, ForeignKey("blogs.bid"), primary_key=True)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())
    status = Column(String(50), default="active")

    blog = relationship("Blog", back_populates="tags")
    tag = relationship("Tag", back_populates="blog_tags")

class Category(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())
    status = Column(String(50), default="active")

    blogs = relationship("Blog", back_populates="categories")


