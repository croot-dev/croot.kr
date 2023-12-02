---
layout: post
date: 2023-12-02
title: "Github Pages + notion"
tags: [Config, ]
categories: [Config, ]
---


brew를 사용함


```shell
brew install rbenv
rbenv install 3.1.0
rbenv rehash
rbenv global 3.1.0
```


```shell
# Permission 문제로 sudo 실행.
sudo gem install jekyll
```


플랫폼이 달라서 Github Actions에 맞춰 lockfile 수정.


```shell
> bundle install
/opt/hostedtoolcache/Ruby/3.1.4/x64/bin/bundle config --local path /home/runner/work/croot-dev.github.io/croot-dev.github.io/vendor/bundle
/opt/hostedtoolcache/Ruby/3.1.4/x64/bin/bundle config --local deployment true
Cache key: setup-ruby-bundler-cache-v6-ubuntu-22.04-x64-ruby-3.1.4-wd-/home/runner/work/croot-dev.github.io/croot-dev.github.io-with--without--only--Gemfile.lock-073fe0d893d3d26402573dc722ed2240f3b54e2043dff09f2f61ef058a7aecd1
/opt/hostedtoolcache/Ruby/3.1.4/x64/bin/bundle install --jobs 4
Your bundle only supports platforms ["x86_64-darwin-22"] but your local platform
is x86_64-linux. Add the current platform to the lockfile with
`bundle lock --add-platform x86_64-linux` and try again.
Error: The process '/opt/hostedtoolcache/Ruby/3.1.4/x64/bin/bundle' failed with exit code 16
```


```shell
bundle lock --add-platform x86_64-linux
```

