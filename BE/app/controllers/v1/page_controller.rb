class V1::PageController < ApplicationController
  def index
    pages = Page.order('created_at DESC');
    render json: {status: 'successful', message:'pages retrieved', data: pages}, status: :ok
  end

  def show
    page = Page.find(params[:id])
    render json: {status: 'successful', message:'page retrieved', data: page}, status: :ok
  end

  def create
    page = Page.new(page_params)

    if page.save
      render json: {status: 'successful', message:'page created', data: page}, status: :ok
    else
      render json: {status: 'error', message:'article not saved', data: page.error}, status: :unprocessable_entity
    end
  end

  def destroy
    page = Page.find(params[:id])
    page.destroy
    render json: {status: 'successful', message:'page deleted', data: page}, status: :ok
  end

  def update
    page = Page.find(params[:id])
    if page.update_attributes(page_params)
      render json: {status: 'successful', message:'page updated', data: page}, status: :ok
    else
      render json: {status: 'error', message:'page update failed', data: page}, status: :unprocessable_entity
    end
  end


  private

  def page_params
    params.permit(:title, :content, :parent_id)
  end


end
