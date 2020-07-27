class UsersController < ApplicationController
    
    def index
        users = User.all

        render json: users 
    end

    def show
        user = User.find(params[:id])
    end

    def create
        user = User.create!(user_params)

        render json: user 
    end

    def update
        user = User.find(params[:id])

        user.update!(user_params)

        render json: user
    end

    def edit
        user = User.find(params[:id])
    end

    def destroy
        user = User.find(params[:id])

        user.destroy!

        render json: {}
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end

end
