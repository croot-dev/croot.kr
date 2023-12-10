source "https://rubygems.org"


gem "jekyll", "~> 3.9.3"
gem "github-pages", "~> 228", group: :jekyll_plugins
gem "rb-fsevent", "0.9.8"

group :jekyll_plugins do
  gem 'jekyll-livereload'
  gem "jekyll-paginate-v2"
  gem "jekyll-sitemap"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "webrick", "~> 1.8"

gem "html-proofer", "~> 5.0"
