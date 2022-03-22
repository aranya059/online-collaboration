namespace :database do
  desc 'run some rake db task'
  task :subdomain_update do
    on roles(:app) do
      within "#{current_path}" do
        with rails_env: "#{fetch(:rails_env)}" do
          execute :rake, "database:list RAILS_ENV=production"
          execute :rake, "database:update RAILS_ENV=production"
        end
      end
    end
  end
end


namespace :carrierwave do
  task :symlink do
    on roles(:app) do
      execute "ln -nfs #{shared_path}/uploads #{release_path}/public/uploads"
    end
  end
end
