class CommentsController < ApplicationController
    
    def index
        comments = Comment.all

        render json: comments 
    end

    def show
        comment = Comment.find(params[:id])
    end

    def create
        comment = Comment.create!(comment_params)

        render json: comment 
    end

    def destroy
        comment = Comment.find(params[:id])

        comment.destroy!

        render json: {}
    end

    private

    def comment_params
        params.require(:comment).permit(:text, :user_id)
    end

end
