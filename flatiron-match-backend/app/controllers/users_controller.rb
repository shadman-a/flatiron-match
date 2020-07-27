class UsersController < ApplicationController
    
    def index
        users = User.all

        render json:users 
    end

    def show
        user = User.find(params[:id])
    end

    def create
        user = User.new(user_params)

        render json:users 
    end

    def update
        user = User.find(params[:id])

        user.update(user_params)

        render json:users 
    end

    def edit
        user = User.find(params[:id])
    end

    def destroy
        user = User.find

        user.destroy 
        render
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end

end
