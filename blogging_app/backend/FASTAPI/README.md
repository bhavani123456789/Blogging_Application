# Backend Application

## Requirements
- Python
- FastAPI
- sqlalchemy
- mysql-connector-python
- POSTMAN

## Run the Application
- To start the FastAPI application, run the following command:

- uvicorn main:app --reload


## APIS

# Users
- POST /users: Create a new user. - Tested
- PUT /users/{user_id}: Update a user. - Tested
- DELETE /users/{user_id}: Delete a user. - Tested
- GET /users: Retrieve all users. - Tested
# Blogs
- POST /blogs: Create a new blog. - Tested
- PUT /blogs/{blog_id}: Update a blog. - Tested
- DELETE /blogs/{blog_id}: Delete a blog. - Tested
- GET /blogs: Retrieve all blogs. - Tested
# Categories
- POST /categories: Create a new category. - Tested
- PUT /categories/{category_id}: Update a category. - Tested
- DELETE /categories/{category_id}: Delete a category. - Tested
- GET /categories: Retrieve all categories. - Tested
# Comments
- POST /comments: Create a new comment. - Not Tested
- PUT /comments/{comment_id}: Update a comment. - Tested
- DELETE /comments/{comment_id}: Delete a comment. - Tested
- GET /comments: Retrieve all comments. - Tested
# Tags
- POST /tags: Create a new tag. - Tested
- PUT /tags/{tag_id}: Update a tag. - Tested
- DELETE /tags/{tag_id}: Delete a tag. - Tested
- GET /tags: Retrieve all tags. - Tested
# Blog Tags
- POST /blog_tags: Create a new blog tag. - Tested
- PUT /blog_tags/{tag_id}/{bid}: Update a blog tag. - Tested
- DELETE /blog_tags/{tag_id}/{bid}: Delete a blog tag. - Tested
- GET /blog_tags: Retrieve all blog tags. - Tested






