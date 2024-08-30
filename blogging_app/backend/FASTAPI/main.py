from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Optional, List
from fastapi.responses import JSONResponse
from datetime import datetime
from database import Base, engine, SessionLocal
from models import Blog, BlogStatusEnum, Category, User, UserStatusEnum, Comment, CommentStatusEnum,Tag,BlogTag

from enum import Enum


Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class UserSchema(BaseModel):
    name: str
    email: str
    password: str
    username: str
    phone: Optional[str] = None
    profile_image: Optional[str] = None
    bio: Optional[str] = None
    status: UserStatusEnum = UserStatusEnum.active

    class Config:
        orm_mode = True

class UserCreateSchema(UserSchema):
    pass

@app.get("/users", response_model=List[UserSchema])
def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()

@app.post("/users", response_model=UserCreateSchema)
def create_user(user: UserCreateSchema, db: Session = Depends(get_db)):
    try:
        new_user = User(**user.dict())
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")

@app.put("/users/{user_id}", response_model=UserSchema)
def update_user(user_id: int, user: UserSchema, db: Session = Depends(get_db)):
    u = db.query(User).filter(User.userid == user_id).first()
    if not u:
        raise HTTPException(status_code=404, detail="User not found")
    u.name = user.name
    u.email = user.email
    u.password = user.password
    u.username = user.username
    u.phone = user.phone
    u.profile_image = user.profile_image
    u.bio = user.bio
    u.status = user.status
    db.commit()
    return u

@app.delete("/users/{user_id}", response_class=JSONResponse)
def delete_user(user_id: int, db: Session = Depends(get_db)):
    u = db.query(User).filter(User.userid == user_id).first()
    if not u:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(u)
    db.commit()
    return JSONResponse(content={f"user of id {user_id} has been deleted": True})



class BlogSchema(BaseModel):
    image: str
    title: str
    content: str
    category_id: Optional[int] = None
    status: BlogStatusEnum

    class Config:
        orm_mode = True

class BlogCreateSchema(BlogSchema):
    pass

@app.get("/blogs", response_model=List[BlogSchema])
def get_blogs(db: Session = Depends(get_db)):
    return db.query(Blog).all()

@app.post("/blogs", response_model=BlogCreateSchema)
def create_blog(blog: BlogCreateSchema, db: Session = Depends(get_db)):
    try:
        new_blog = Blog(**blog.dict())
        db.add(new_blog)
        db.commit()
        db.refresh(new_blog)
        return new_blog
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")

@app.put("/blogs/{blog_id}", response_model=BlogSchema)
def update_blog(blog_id: int, blog: BlogSchema, db: Session = Depends(get_db)):
    b = db.query(Blog).filter(Blog.bid == blog_id).first()
    if not b:
        raise HTTPException(status_code=404, detail="Blog not found")
    b.image = blog.image
    b.title = blog.title
    b.content = blog.content
    b.category_id = blog.category_id
    b.status = blog.status
    db.commit()
    return b

@app.delete("/blogs/{blog_id}", response_class=JSONResponse)
def delete_blog(blog_id: int, db: Session = Depends(get_db)):
    b = db.query(Blog).filter(Blog.bid == blog_id).first()
    if not b:
        raise HTTPException(status_code=404, detail="Blog not found")
    db.delete(b)
    db.commit()
    return JSONResponse(content={f"blog of id {blog_id} has been deleted": True})



class CategorySchema(BaseModel):
    name: str

    class Config:
        orm_mode = True

@app.post("/categories", response_model=CategorySchema)
def create_category(category: CategorySchema, db: Session = Depends(get_db)):
    new_category = Category(name=category.name)
    db.add(new_category)
    db.commit()
    db.refresh(new_category)
    return new_category

@app.get("/categories", response_model=List[CategorySchema])
def get_categories(db: Session = Depends(get_db)):
    return db.query(Category).all()

@app.put("/categories/{category_id}", response_model=CategorySchema)
def update_category(category_id: int, category: CategorySchema, db: Session = Depends(get_db)):
    cat = db.query(Category).filter(Category.id == category_id).first()
    if not cat:
        raise HTTPException(status_code=404, detail="Category not found")
    cat.name = category.name
    db.commit()
    return cat

@app.delete("/categories/{category_id}", response_class=JSONResponse)
def delete_category(category_id: int, db: Session = Depends(get_db)):
    cat = db.query(Category).filter(Category.id == category_id).first()
    if not cat:
        raise HTTPException(status_code=404, detail="Category not found")
    db.delete(cat)
    db.commit()
    return JSONResponse(content={f"Category with id {category_id} has been deleted": True})


class CommentSchema(BaseModel):
    cid: int
    userid: int
    bid: int
    comment: str
    created_at: Optional[datetime]
    updated_at: Optional[datetime]
    status: CommentStatusEnum

    class Config:
        orm_mode = True

class CommentCreateSchema(BaseModel):
    userid: int
    bid: int
    comment: str

@app.get("/comments", response_model=List[CommentSchema])
def get_comments(db: Session = Depends(get_db)):
    try:
        return db.query(Comment).all()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


@app.post("/comments", response_model=CommentSchema)
def create_comment(comment: CommentCreateSchema, db: Session = Depends(get_db)):
    try:
        blog = db.query(Blog).filter(Blog.bid == comment.bid).first()
        if not blog:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Blog with bid {comment.bid} not found")

        new_comment = Comment(
            userid=comment.userid,
            bid=comment.bid,
            comment=comment.comment,
            status=CommentStatusEnum.active  # Set status directly to the enum value
        )
        db.add(new_comment)
        db.commit()
        db.refresh(new_comment)
        return new_comment
    except HTTPException as http_error:
        raise http_error
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Internal Server Error: {str(e)}")


@app.put("/comments/{comment_id}", response_model=CommentSchema)
def update_comment(comment_id: int, comment: CommentCreateSchema, db: Session = Depends(get_db)):
    try:
        existing_comment = db.query(Comment).filter(Comment.cid == comment_id).first()
        if not existing_comment:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Comment with id {comment_id} not found")

        existing_comment.userid = comment.userid
        existing_comment.bid = comment.bid
        existing_comment.comment = comment.comment

        db.commit()
        db.refresh(existing_comment)
        return existing_comment
    except HTTPException as http_error:
        raise http_error
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Internal Server Error: {str(e)}")

@app.delete("/comments/{comment_id}", response_class=JSONResponse)
def delete_comment(comment_id: int, db: Session = Depends(get_db)):
    try:
        comment_to_delete = db.query(Comment).filter(Comment.cid == comment_id).first()
        if not comment_to_delete:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Comment with id {comment_id} not found")

        db.delete(comment_to_delete)
        db.commit()
        return JSONResponse(content={f"Comment with id {comment_id} has been deleted": True})
    except HTTPException as http_error:
        raise http_error
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Internal Server Error: {str(e)}")


class TagSchema(BaseModel):
    tname: str

    class Config:
        orm_mode = True

@app.post("/tags", response_model=TagSchema)
def create_tag(tag: TagSchema, db: Session = Depends(get_db)):
    new_tag = Tag(tname=tag.tname)
    db.add(new_tag)
    db.commit()
    db.refresh(new_tag)
    return new_tag

@app.get("/tags", response_model=List[TagSchema])
def get_tags(db: Session = Depends(get_db)):
    return db.query(Tag).all()

@app.put("/tags/{tag_id}", response_model=TagSchema)
def update_tag(tag_id: int, tag: TagSchema, db: Session = Depends(get_db)):
    t = db.query(Tag).filter(Tag.tag_id == tag_id).first()
    if not t:
        raise HTTPException(status_code=404, detail="Tag not found")
    t.tname = tag.tname
    db.commit()
    return t

@app.delete("/tags/{tag_id}", response_class=JSONResponse)
def delete_tag(tag_id: int, db: Session = Depends(get_db)):
    t = db.query(Tag).filter(Tag.tag_id == tag_id).first()
    if not t:
        raise HTTPException(status_code=404, detail="Tag not found")
    db.delete(t)
    db.commit()
    return JSONResponse(content={f"Tag with id {tag_id} has been deleted": True})



class BlogTagSchema(BaseModel):
    tag_id: int
    bid: int
    status: Optional[str] = "active"

    class Config:
        orm_mode = True

@app.post("/blog_tags", response_model=BlogTagSchema)
def create_blog_tag(blog_tag: BlogTagSchema, db: Session = Depends(get_db)):
    new_blog_tag = BlogTag(**blog_tag.dict())
    db.add(new_blog_tag)
    db.commit()
    db.refresh(new_blog_tag)
    return new_blog_tag

@app.get("/blog_tags", response_model=List[BlogTagSchema])
def get_blog_tags(db: Session = Depends(get_db)):
    return db.query(BlogTag).all()

@app.put("/blog_tags/{tag_id}/{bid}", response_model=BlogTagSchema)
def update_blog_tag(tag_id: int, bid: int, blog_tag: BlogTagSchema, db: Session = Depends(get_db)):
    bt = db.query(BlogTag).filter(BlogTag.tag_id == tag_id, BlogTag.bid == bid).first()
    if not bt:
        raise HTTPException(status_code=404, detail="BlogTag not found")
    bt.status = blog_tag.status
    db.commit()
    return bt

@app.delete("/blog_tags/{tag_id}/{bid}", response_class=JSONResponse)
def delete_blog_tag(tag_id: int, bid: int, db: Session = Depends(get_db)):
    bt = db.query(BlogTag).filter(BlogTag.tag_id == tag_id, BlogTag.bid == bid).first()
    if not bt:
        raise HTTPException(status_code=404, detail="BlogTag not found")
    db.delete(bt)
    db.commit()
    return JSONResponse(content={f"BlogTag with tag_id {tag_id} and bid {bid} has been deleted": True})




if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8001)

